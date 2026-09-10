import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Container from '@/components/shared/Container'
import ContactCTA from '@/components/sections/ContactCTA'
import SanityImage from '@/components/blog/SanityImage'
import PortableBody from '@/components/blog/PortableBody'
import { getPost, getPostSlugs } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/client'
import { COMPANY } from '@/data/company'

export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return (slugs || []).map((s) => ({ slug: s.slug }))
}

function ogImage(image) {
  if (!image?.asset) return null
  try {
    return urlFor(image).width(1200).height(630).fit('crop').auto('format').url()
  } catch (err) {
    return null
  }
}

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }) : ''

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return { title: 'Article not found' }

  const title = post.seoTitle || post.title
  const description = post.metaDescription || post.excerpt || undefined
  const url = `${COMPANY.websiteUrl}/blogs/${post.slug}`
  const img = ogImage(post.coverImage)

  return {
    title,
    description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedDate,
      siteName: 'Vanyata Financial Services',
      images: img
        ? [{ url: img, width: 1200, height: 630, alt: post.coverImage?.alt || post.title }]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: img ? [img] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return notFound()

  const img = ogImage(post.coverImage)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seoTitle || post.title,
    description: post.metaDescription || post.excerpt || undefined,
    image: img ? [img] : undefined,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: post.author
      ? { '@type': 'Person', name: post.author }
      : { '@type': 'Organization', name: COMPANY.name },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.legalName,
      logo: { '@type': 'ImageObject', url: `${COMPANY.websiteUrl}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${COMPANY.websiteUrl}/blogs/${post.slug}` },
  }

  return (
    <>
      <article className="bg-white pt-14 pb-20 sm:pt-16 sm:pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <Container>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-primary hover:text-brand-secondary"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to blogs
          </Link>

          <div className="mx-auto mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/60">
              {post.author ? (
                <>
                  <span>{post.author}</span>
                  <span className="h-1 w-1 rounded-full bg-brand-primary/25" />
                </>
              ) : null}
              <span>{formatDate(post.publishedDate)}</span>
            </div>
            <h1 className="mt-5 font-display text-[clamp(2rem,4vw,3.1rem)] font-semibold leading-[1.1] tracking-tight text-brand-secondary">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-6 text-[18px] leading-relaxed text-brand-secondary/70">{post.excerpt}</p>
            ) : null}
          </div>

          {post.coverImage?.asset ? (
            <div className="mx-auto mt-10 max-w-4xl">
              <SanityImage
                image={post.coverImage}
                priority
                sizes="(max-width: 896px) 100vw, 896px"
                maxWidth={1600}
                className="h-auto w-full rounded-xl border border-brand-primary/10"
              />
            </div>
          ) : null}

          <div className="mx-auto mt-10 max-w-3xl">
            <PortableBody value={post.body} />
            <div className="mt-14 border-t border-brand-primary/10 pt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-secondary"
              >
                Talk to an advisor
              </Link>
            </div>
          </div>
        </Container>
      </article>
      <ContactCTA />
    </>
  )
}
