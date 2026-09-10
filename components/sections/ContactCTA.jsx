'use client'
import { useState } from 'react'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { COMPANY } from '@/data/company'
import { ArrowRight } from 'lucide-react'

const LOAN_OPTIONS = [
  'MSME /Business Loan',
  'Home Loan',
  'Loan Against Property',
  'Project / Construction Finance',
  'Construction Finance',
  'Machinery / Working Capital',
  'Education Loan',
  'Personal Loan',
  'Insurance',
]

export default function ContactCTA({ heading, subheading }) {
  const [state, setState] = useState({ name: '', phone: '', service: LOAN_OPTIONS[0], requirement: '', website: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    if (loading || sent) return
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }
      setState({ name: '', phone: '', service: LOAN_OPTIONS[0], requirement: '', website: '' })
      setSent(true)
      setTimeout(() => setSent(false), 6000)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-brand-secondary py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-[clamp(2rem,3.6vw,3.1rem)] font-medium leading-[1.1] tracking-tight text-white">
                {heading || 'Ready to Find the Right Loan?'}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[15.5px] leading-[1.75] text-white/70">
                {subheading || 'Stop guessing which bank to approach. Tell us your requirement, and we will give you clear, unbiased options within 24 hours.'}
              </p>
            </Reveal>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              <a href={`https://wa.me/${COMPANY.phones[0].tel.replace('+','')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 py-5">
                <div>
                  <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/55">WhatsApp</div>
                  <div className="mt-1 text-[17px] font-medium tracking-tight text-white">{COMPANY.phones[0].value}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/40" />
              </a>
              <a href={`tel:${COMPANY.phones[1].tel}`} className="flex items-center justify-between gap-4 py-5">
                <div>
                  <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/55">Office</div>
                  <div className="mt-1 text-[17px] font-medium tracking-tight text-white">{COMPANY.phones[1].value}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/40" />
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center justify-between gap-4 py-5">
                <div>
                  <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/55">Email</div>
                  <div className="mt-1 text-[17px] font-medium tracking-tight text-white">{COMPANY.email}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-white/40" />
              </a>
              <div className="py-5">
                <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/55">Visit us</div>
                <div className="mt-2 text-[14.5px] leading-[1.7] text-white/85">
                  {COMPANY.address.line1}<br />
                  {COMPANY.address.line2}<br />
                  {COMPANY.address.line3}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <form onSubmit={submit} className="bg-white p-8 sm:p-10">
                <h3 className="text-[22px] font-medium tracking-tight text-brand-secondary">Submit an enquiry</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-brand-secondary/60">A senior advisor will call you back within 24 hours.</p>

                <div className="mt-8 space-y-5">
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary/70">Full name</label>
                    <input
                      required
                      value={state.name}
                      onChange={(e) => setState({ ...state, name: e.target.value })}
                      placeholder="Your full name"
                      className="mt-2 w-full border-b border-brand-primary/15 bg-transparent py-3 text-[15px] text-brand-secondary outline-none placeholder:text-brand-secondary/35 focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary/70">Mobile number</label>
                    <input
                      required
                      type="tel"
                      value={state.phone}
                      onChange={(e) => setState({ ...state, phone: e.target.value })}
                      placeholder="+91 ••••• •••••"
                      className="mt-2 w-full border-b border-brand-primary/15 bg-transparent py-3 text-[15px] text-brand-secondary outline-none placeholder:text-brand-secondary/35 focus:border-brand-primary"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary/70">Select loan type</label>
                    <select
                      value={state.service}
                      onChange={(e) => setState({ ...state, service: e.target.value })}
                      className="mt-2 w-full border-b border-brand-primary/15 bg-transparent py-3 text-[15px] text-brand-secondary outline-none focus:border-brand-primary"
                    >
                      {LOAN_OPTIONS.map((o) => (<option key={o}>{o}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary/70">Brief requirement</label>
                    <textarea
                      rows={3}
                      value={state.requirement}
                      onChange={(e) => setState({ ...state, requirement: e.target.value })}
                      placeholder="e.g. Home loan of Rs.25 Lakh, first-time buyer in Baner."
                      className="mt-2 w-full resize-none border-b border-brand-primary/15 bg-transparent py-3 text-[15px] text-brand-secondary outline-none placeholder:text-brand-secondary/35 focus:border-brand-primary"
                    />
                  </div>
                  {/* Honeypot: hidden from users; bots that fill it are ignored. */}
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={state.website}
                    onChange={(e) => setState({ ...state, website: e.target.value })}
                    className="absolute left-[-9999px] h-0 w-0 opacity-0"
                  />
                  <button
                    type="submit"
                    disabled={loading || sent}
                    className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-primary px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-secondary disabled:cursor-not-allowed disabled:opacity-80"
                  >
                    {sent ? 'Thank you, we’ll call you shortly.' : loading ? 'Sending…' : 'Submit Enquiry'}
                    {!sent && !loading && <ArrowRight className="h-4 w-4" />}
                  </button>
                  {error ? (
                    <p role="alert" className="text-center text-[13px] text-red-600">{error}</p>
                  ) : null}
                  <div className="flex flex-col items-center gap-1 pt-2 text-center text-[12.5px] text-brand-secondary/70 sm:flex-row sm:justify-center sm:gap-4">
                    <span>Or call us directly at</span>
                    <a href={`tel:${COMPANY.phones[0].tel}`} className="font-semibold text-brand-primary">
                      {COMPANY.phones[0].value}
                    </a>
                    <span className="hidden sm:inline text-brand-primary/25">•</span>
                    <a
                      href={`https://wa.me/${COMPANY.phones[0].tel.replace('+','')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#128C7E]"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
