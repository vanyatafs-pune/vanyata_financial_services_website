import Link from 'next/link'
import { notFound } from 'next/navigation'
import Container from '@/components/shared/Container'
import { BLOGS } from '@/data/blogs'
import { ArrowLeft } from 'lucide-react'

export function generateStaticParams() {
  return BLOGS.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({ params }) {
  const post = BLOGS.find((b) => b.slug === params.slug)
  if (!post) return { title: 'Blog - Vanyata Financial Services' }
  return { title: `${post.title} - Vanyata`, description: post.excerpt }
}

export default function BlogPostPage({ params }) {
  const post = BLOGS.find((b) => b.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="bg-white pt-20 pb-24 sm:pt-24 sm:pb-32">
      <Container>
        <Link href="/blogs" className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-primary hover:text-brand-secondary">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to blogs
        </Link>

        <div className="mt-8 max-w-3xl">
          <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/60">
            <span>{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-brand-primary/25" />
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-brand-primary/25" />
            <span>{post.readMinutes} min read</span>
          </div>
          <h1 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-brand-secondary">
            {post.title}
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-brand-secondary/75">{post.excerpt}</p>

          <div className="mt-12 space-y-6 text-[16px] leading-[1.75] text-brand-secondary/80">
            <p>
              This is a placeholder for a full post. When wired to a CMS, the article body will
              render here with sections, callouts, and inline notes from the advisor.
            </p>
            <p>
              Vanyata’s blog is written by our senior advisors and updated as lender policies
              change. If you’d like to discuss any point in this post as it applies to your loan,
              please reach out.
            </p>
            <p>
              Full editorial layout including images, pull quotes, tables and related posts
              will be added when the content pipeline is wired up.
            </p>
          </div>

          <div className="mt-14 border-t border-brand-primary/10 pt-8">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-secondary">
              Talk to an advisor
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}
