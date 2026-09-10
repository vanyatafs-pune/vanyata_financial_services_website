import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { MongoClient } from 'mongodb'

export const runtime = 'nodejs'

const CONTACT_INBOX = process.env.CONTACT_INBOX || 'contact@vanyatafs.com'
const MAIL_FROM = process.env.MAIL_FROM || 'Vanyata Financial Services <onboarding@resend.dev>'

let mongoPromise
function getMongo() {
  if (!process.env.MONGO_URL) return null
  if (!mongoPromise) {
    mongoPromise = new MongoClient(process.env.MONGO_URL).connect()
  }
  return mongoPromise
}

const clean = (v) => (typeof v === 'string' ? v.trim() : '')
const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const name = clean(body.name)
  const phone = clean(body.phone)
  const service = clean(body.service || body.loanType)
  const requirement = clean(body.requirement)
  const website = clean(body.website) // honeypot: real users leave this empty

  // Silently accept bot submissions without sending mail.
  if (website) return NextResponse.json({ ok: true })

  if (name.length < 2 || phone.length < 7 || !service) {
    return NextResponse.json(
      { error: 'Please add your name, mobile number and loan type.' },
      { status: 400 }
    )
  }
  if (name.length > 100 || phone.length > 30 || service.length > 100 || requirement.length > 2000) {
    return NextResponse.json({ error: 'One of the fields is too long.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 })
  }

  // Best-effort persistence (never blocks the email).
  let enquiryId = null
  try {
    const cp = getMongo()
    if (cp) {
      const db = (await cp).db(process.env.DB_NAME || 'vanyatafs')
      const res = await db
        .collection('enquiries')
        .insertOne({ name, phone, service, requirement, status: 'pending', createdAt: new Date() })
      enquiryId = res.insertedId?.toString() || null
    }
  } catch {
    // ignore persistence errors
  }

  const text = [
    'New website enquiry',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Loan type: ${service}`,
    '',
    'Requirement:',
    requirement || '(not provided)',
  ].join('\n')

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#1a1a1a;line-height:1.6">
    <h2 style="margin:0 0 16px;font-size:18px">New website enquiry</h2>
    <p style="margin:0 0 8px"><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p style="margin:0 0 8px"><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p style="margin:0 0 8px"><strong>Loan type:</strong> ${escapeHtml(service)}</p>
    <p style="margin:16px 0 4px"><strong>Requirement:</strong></p>
    <p style="margin:0;white-space:pre-line">${escapeHtml(requirement || '(not provided)')}</p>
  </div>`

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { data, error } = await resend.emails.send({
      from: MAIL_FROM,
      to: [CONTACT_INBOX],
      subject: `New enquiry from ${name} - ${service}`,
      text,
      html,
    })

    if (error) {
      // Log server-side only (no secrets). Helps diagnose sender/domain issues.
      console.error('Enquiry email failed:', error?.message || error)
      if (enquiryId) {
        try {
          const db = (await getMongo()).db(process.env.DB_NAME || 'vanyatafs')
          await db
            .collection('enquiries')
            .updateOne({ _id: (await import('mongodb')).ObjectId.createFromHexString(enquiryId) }, { $set: { status: 'failed' } })
        } catch {}
      }
      return NextResponse.json(
        { error: 'We could not send your enquiry right now. Please call us instead.' },
        { status: 502 }
      )
    }

    if (enquiryId) {
      try {
        const { ObjectId } = await import('mongodb')
        const db = (await getMongo()).db(process.env.DB_NAME || 'vanyatafs')
        await db
          .collection('enquiries')
          .updateOne({ _id: ObjectId.createFromHexString(enquiryId) }, { $set: { status: 'sent', providerMessageId: data?.id || null } })
      } catch {}
    }

    return NextResponse.json({ ok: true, id: data?.id || null }, { status: 201 })
  } catch (err) {
    console.error('Enquiry email exception:', err?.message || err)
    return NextResponse.json(
      { error: 'We could not send your enquiry right now. Please call us instead.' },
      { status: 502 }
    )
  }
}
