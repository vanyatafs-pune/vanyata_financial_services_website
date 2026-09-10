'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const ACTIONS = [
  { label: 'EMI Calculator', href: '/emi-calculator' },
  { label: 'List of Documents', href: '/documents' },
]

export default function QuickActionsBar() {
  const pathname = usePathname()
  const isActive = (href) => pathname === href

  if (pathname?.startsWith('/studio')) return null

  return (
    <div className="sticky top-[72px] z-30 border-b border-brand-primary/10 bg-white">
      <div className="mx-auto flex h-12 max-w-[1320px] items-center justify-end gap-2 px-5 sm:px-6 lg:px-10">
        {ACTIONS.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className={cn(
              'inline-flex items-center rounded-md px-3.5 py-1.5 text-[12.5px] font-medium tracking-tight transition-colors sm:px-4 sm:text-[13px]',
              isActive(a.href)
                ? 'bg-brand-primary text-white'
                : 'border border-brand-primary/20 text-brand-secondary hover:border-brand-primary hover:bg-brand-primary hover:text-white'
            )}
          >
            {a.label}
          </Link>
        ))}
      </div>
    </div>
  )
}
