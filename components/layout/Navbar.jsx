'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Plus, Minus } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/data/company'
import { ALL_SERVICES } from '@/data/services'
import { cn } from '@/lib/utils'
import BrandButton from '@/components/shared/BrandButton'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false); setDropdown(false) }, [pathname])

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full bg-white transition-shadow',
          scrolled ? 'border-b border-brand-primary/10 shadow-[0_1px_0_rgba(20,45,82,0.04)]' : 'border-b border-transparent'
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-5 sm:px-6 lg:px-10">
          {/* <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-primary text-white">
              <span className="font-display text-base font-semibold">v</span>
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-[19px] font-semibold tracking-tight text-brand-secondary">Vanyata</span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-brand-primary/70">Financial Services</span>
            </span>
          </Link> */}
          <Link href="/" className="flex items-center gap-2.5">
  <Image
    src="/logo.png"
    alt="Vanyata Financial Services"
    width={140}
    height={40}
    className="mt-4 h-16 w-auto"
    priority
  />
</Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((l) => {
              const active = isActive(l.href)
              if (l.hasDropdown) {
                return (
                  <div
                    key={l.href}
                    className="relative"
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link
                      href={l.href}
                      className={cn(
                        'group relative inline-flex items-center gap-1 text-[13.5px] font-medium tracking-tight transition-colors',
                        active ? 'text-brand-primary' : 'text-brand-secondary/85 hover:text-brand-primary'
                      )}
                    >
                      {l.label}
                      <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', dropdown && 'rotate-180')} />
                      <span className={cn('absolute -bottom-1.5 left-0 h-[2px] bg-brand-accent transition-all duration-200', active ? 'w-full' : 'w-0 group-hover:w-full')} />
                    </Link>

                    {dropdown && (
                      <div className="absolute left-1/2 top-full z-50 w-[720px] -translate-x-1/2 pt-4">
                        <div className="grid grid-cols-3 gap-8 border border-brand-primary/10 bg-white p-8 shadow-[0_20px_40px_-20px_rgba(20,45,82,0.15)]">
                          {ALL_SERVICES.map((group) => (
                            <div key={group.group}>
                              <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">{group.group}</div>
                              <ul className="mt-4 space-y-3">
                                {group.items.map((s) => (
                                  <li key={s.href}>
                                    <Link
                                      href={s.href}
                                      className={cn(
                                        'block text-[13.5px] font-medium tracking-tight transition-colors',
                                        pathname === s.href ? 'text-brand-primary' : 'text-brand-secondary hover:text-brand-primary'
                                      )}
                                    >
                                      {s.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    'group relative text-[13.5px] font-medium tracking-tight transition-colors',
                    active ? 'text-brand-primary' : 'text-brand-secondary/85 hover:text-brand-primary'
                  )}
                >
                  {l.label}
                  <span className={cn('absolute -bottom-1.5 left-0 h-[2px] bg-brand-accent transition-all duration-200', active ? 'w-full' : 'w-0 group-hover:w-full')} />
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY.phones[0].tel}`}
              className="hidden border-l border-brand-primary/15 pl-4 text-[13px] font-medium tracking-tight text-brand-secondary hover:text-brand-primary md:inline-block"
            >
              {COMPANY.phones[0].value}
            </a>
            <div className="hidden lg:block">
              <BrandButton href="/contact" variant="primary" icon={false}>Enquiry</BrandButton>
            </div>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-brand-primary/15 text-brand-secondary lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-brand-ink/40 lg:hidden" onClick={() => setOpen(false)} />
          <aside className="fixed right-0 top-0 z-50 flex h-full w-[86%] max-w-[380px] flex-col overflow-y-auto bg-white p-6 lg:hidden">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-lg font-semibold tracking-tight text-brand-secondary">Vanyata</span>
              <button className="h-10 w-10 rounded-md border border-brand-primary/15 text-brand-secondary" onClick={() => setOpen(false)} aria-label="Close menu">
                <X className="mx-auto h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col">
              {NAV_LINKS.map((l) => {
                if (l.hasDropdown) {
                  return (
                    <div key={l.href} className="border-b border-brand-primary/10">
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className={cn(
                          'flex w-full items-center justify-between py-4 text-[16px] font-medium',
                          isActive(l.href) ? 'text-brand-primary' : 'text-brand-secondary'
                        )}
                      >
                        {l.label}
                        {mobileServicesOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </button>
                      {mobileServicesOpen && (
                        <div className="pb-4">
                          {ALL_SERVICES.map((group) => (
                            <div key={group.group} className="mt-3 first:mt-0">
                              <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">{group.group}</div>
                              <ul className="mt-2 space-y-2">
                                {group.items.map((s) => (
                                  <li key={s.href}>
                                    <Link href={s.href} className="block py-1 text-[14px] font-medium text-brand-secondary">{s.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          <Link href={l.href} className="mt-4 inline-flex text-[13px] font-semibold text-brand-primary">View all services →</Link>
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={cn(
                      'flex items-center justify-between border-b border-brand-primary/10 py-4 text-[16px] font-medium',
                      isActive(l.href) ? 'text-brand-primary' : 'text-brand-secondary'
                    )}
                  >
                    {l.label}
                    <span className="text-brand-primary/40">/</span>
                  </Link>
                )
              })}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`tel:${COMPANY.phones[0].tel}`} className="rounded-md border border-brand-primary/15 px-4 py-3 text-sm font-medium text-brand-secondary">
                <span className="block text-[11px] uppercase tracking-wider text-brand-primary/60">Call</span>
                {COMPANY.phones[0].value}
              </a>
              <BrandButton href="/contact" variant="primary" icon={false} className="justify-center">Enquiry</BrandButton>
            </div>
          </aside>
        </>
      )}
    </>
  )
}
