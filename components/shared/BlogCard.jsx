import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SanityImage from '@/components/blog/SanityImage'

const formatDate = (d) =>
  d ? new Date(d).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) : ''

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-brand-primary/10 bg-white transition-colors hover:bg-brand-neutral"
    >
      {post.coverImage?.asset ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-neutral">
          <SanityImage
            image={post.coverImage}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            maxWidth={800}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary/60">
          {post.author ? (
            <>
              <span>{post.author}</span>
              <span className="h-1 w-1 rounded-full bg-brand-primary/25" />
            </>
          ) : null}
          <span>{formatDate(post.publishedDate)}</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-brand-secondary sm:text-xl">
          {post.title}
        </h3>
        {post.excerpt ? (
          <p className="mt-3 line-clamp-3 flex-1 text-[14.5px] leading-relaxed text-brand-secondary/65">
            {post.excerpt}
          </p>
        ) : (
          <span className="flex-1" />
        )}
        <div className="mt-6 flex items-center justify-end border-t border-brand-primary/10 pt-4">
          <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-tight text-brand-primary">
            Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  )
}
