import { NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'
import { parseBody } from 'next-sanity/webhook'

// Receives a signed webhook from Sanity when a post is created/updated/deleted
// and revalidates the affected cached pages so changes appear without a redeploy.
export async function POST(request) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET
    if (!secret) {
      return NextResponse.json(
        { message: 'Server misconfigured: SANITY_REVALIDATE_SECRET is not set.' },
        { status: 500 }
      )
    }

    // Validates the HMAC signature against the raw request body.
    const { isValidSignature, body } = await parseBody(request, secret, true)

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 })
    }

    if (body?._type !== 'post') {
      return NextResponse.json({ message: 'Ignored: not a blog post' }, { status: 200 })
    }

    // Refresh the blog list, the affected article, and the sitemap.
    revalidateTag('post')
    revalidatePath('/blogs')
    if (body?.slug) {
      revalidatePath(`/blogs/${body.slug}`)
    }
    revalidatePath('/sitemap.xml')

    return NextResponse.json({ revalidated: true, slug: body?.slug || null, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: err?.message || 'Unexpected error' }, { status: 500 })
  }
}
