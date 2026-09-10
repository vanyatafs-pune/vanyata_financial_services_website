import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import SanityImage from './SanityImage'

const components = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8">
          <SanityImage
            image={value}
            sizes="(max-width: 768px) 100vw, 768px"
            maxWidth={1536}
            className="h-auto w-full rounded-lg border border-brand-primary/10"
          />
          {value.caption ? (
            <figcaption className="mt-3 text-center text-[13px] italic leading-relaxed text-brand-secondary/55">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      )
    },
  },
  block: {
    normal: ({ children }) => (
      <p className="my-5 text-[16.5px] leading-[1.8] text-brand-secondary/80">{children}</p>
    ),
    // The article title is the single <h1>; in-body H1 renders as a large H2
    // to keep a valid heading hierarchy for SEO.
    h1: ({ children }) => (
      <h2 className="mt-12 mb-4 font-display text-[1.9rem] font-semibold leading-tight tracking-tight text-brand-secondary">{children}</h2>
    ),
    h2: ({ children }) => (
      <h2 className="mt-11 mb-4 font-display text-[1.6rem] font-semibold leading-tight tracking-tight text-brand-secondary">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-9 mb-3 font-display text-[1.3rem] font-semibold leading-snug tracking-tight text-brand-secondary">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-2 border-brand-primary/40 bg-brand-neutral py-4 pl-6 pr-4 text-[17px] italic leading-relaxed text-brand-secondary/85">{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-[16.5px] leading-[1.75] text-brand-secondary/80 marker:text-brand-primary/50">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-5 list-decimal space-y-2 pl-6 text-[16.5px] leading-[1.75] text-brand-secondary/80 marker:text-brand-primary/60">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1.5">{children}</li>,
    number: ({ children }) => <li className="pl-1.5">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-brand-secondary">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      const href = value?.href || '#'
      const external = /^https?:\/\//.test(href)
      const blank = value?.blank ?? external
      const cls =
        'font-medium text-brand-primary underline underline-offset-2 decoration-brand-primary/30 transition-colors hover:decoration-brand-primary'
      if (blank || external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
        )
      }
      return <Link href={href} className={cls}>{children}</Link>
    },
  },
}

export default function PortableBody({ value }) {
  if (!value || value.length === 0) return null
  return <PortableText value={value} components={components} />
}
