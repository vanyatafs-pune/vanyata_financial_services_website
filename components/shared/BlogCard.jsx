import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col border border-brand-primary/10 bg-white p-8 transition-colors hover:bg-brand-neutral"
    >
      <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-brand-primary/60">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-brand-primary/25" />
        <span>{post.date}</span>
      </div>
      <h3 className="mt-6 text-lg font-semibold leading-snug tracking-tight text-brand-secondary sm:text-xl">
        {post.title}
      </h3>
      <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-brand-secondary/65">
        {post.excerpt}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-brand-primary/10 pt-4">
        <span className="text-[12px] font-medium tracking-tight text-brand-secondary/55">{post.readMinutes} min read</span>
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold tracking-tight text-brand-primary">
          Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}
