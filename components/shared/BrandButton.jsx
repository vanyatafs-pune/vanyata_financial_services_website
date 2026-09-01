'use client'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export function BrandButton({ href = '#', children, variant = 'primary', className, icon = true, ...props }) {
  const base =
    'group inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium tracking-tight whitespace-nowrap ' +
    'transition-all duration-300 will-change-transform ' +
    'hover:-translate-y-[1px] hover:scale-[1.04] active:scale-[0.98] ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2'
  const variants = {
    primary:
      'bg-brand-primary text-white border border-brand-primary hover:bg-brand-secondary hover:border-brand-secondary hover:shadow-[0_10px_24px_-14px_rgba(23,69,123,0.55)]',
    dark:
      'bg-brand-secondary text-white border border-brand-secondary hover:bg-brand-primary hover:border-brand-primary hover:shadow-[0_10px_24px_-14px_rgba(20,45,82,0.55)]',
    accent:
      'bg-brand-accent text-white border border-brand-accent hover:bg-[#a06722] hover:border-[#a06722]',
    outline:
      'border-2 border-brand-primary/40 text-brand-primary bg-transparent hover:border-brand-primary hover:bg-brand-primary hover:text-white',
    outlineLight:
      'border-2 border-white/40 text-white bg-transparent hover:border-white hover:bg-white hover:text-brand-secondary',
    ghost:
      'border border-transparent text-brand-primary hover:text-brand-secondary',
    light:
      'bg-white text-brand-primary border border-brand-primary/15 hover:border-brand-primary/60 hover:shadow-[0_10px_24px_-14px_rgba(23,69,123,0.35)]',
  }

  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </Link>
  )
}

export default BrandButton
