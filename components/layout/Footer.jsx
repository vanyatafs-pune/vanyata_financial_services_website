'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/shared/Container'
import { COMPANY, FOOTER_QUICK_LINKS } from '@/data/company'
import { SERVICES } from '@/data/services'
import { IconWhatsApp, IconX, IconLinkedIn, IconYouTube } from '@/components/shared/SocialIcons'
import Image from 'next/image'

export default function Footer() {
  const pathname = usePathname()
  const year = new Date().getFullYear()
  const SOCIALS = [
    { icon: IconLinkedIn, href: COMPANY.social.linkedin, label: 'LinkedIn' },
    { icon: IconX, href: COMPANY.social.x, label: 'X (Twitter)' },
    { icon: IconYouTube, href: COMPANY.social.youtube, label: 'YouTube' },
    { icon: IconWhatsApp, href: COMPANY.social.whatsapp, label: 'WhatsApp' },
  ]

  if (pathname?.startsWith('/studio')) return null

  return (
    <footer className="bg-brand-ink text-white">
      <Container className="pt-20 pb-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            {/* <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-primary text-white">
                <span className="font-display text-lg font-semibold">V</span>
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-semibold tracking-tight text-white">Vanyata</span>
                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">Financial Services</span>
              </div>
            </Link> */}
            <Link href="/" className="flex items-center gap-2.5">
  <Image
    src="/logo_invert.png"
    alt="Vanyata Financial Services"
    width={160}
    height={44}
    className="h-16 w-auto"
  />
</Link>
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-white/65">
              {COMPANY.legalName} <br /> <span>Independent loan consultants in Pune.</span>
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/75 transition-all duration-200 hover:scale-[1.06] hover:border-brand-accent hover:text-brand-accent"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">Quick Links</div>
            <ul className="mt-5 space-y-3">
              {FOOTER_QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[14.5px] text-white/75 transition-colors hover:text-brand-accent">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/documents" className="text-[14.5px] text-white/75 transition-colors hover:text-brand-accent">Documents Checklist</Link>
              </li>
              <li>
                <Link href="/emi-calculator" className="text-[14.5px] text-white/75 transition-colors hover:text-brand-accent">EMI Calculator</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">Loan Services</div>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-[14.5px] text-white/75 transition-colors hover:text-brand-accent">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">Contact Info</div>
            <div className="mt-5 space-y-4 text-[14px] text-white/75">
              <p className="leading-relaxed">
                {COMPANY.address.line1} {COMPANY.address.line2} {COMPANY.address.line3}
              </p>
              <div className="space-y-1.5">
                <a href={`https://wa.me/${COMPANY.phones[0].tel.replace('+','')}`} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">WhatsApp </span>{COMPANY.phones[0].value}
                </a>
                <a href={`tel:${COMPANY.phones[1].tel}`} className="block hover:text-white">
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">Office </span>{COMPANY.phones[1].value}
                </a>
                <a href={`mailto:${COMPANY.email}`} className="block hover:text-white">
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/45">Email </span>{COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-[12.5px] text-white/55 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>&copy; {year} {COMPANY.legalName} All rights reserved.</span>
            <span className="hidden text-white/25 sm:inline">|</span>
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span className="text-white/25">|</span>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
          </div>
          <div>
            Website Designed &amp; Developed by{' '}
            <a
              href={COMPANY.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/85 underline underline-offset-4 decoration-white/25 hover:text-brand-accent"
            >
              {COMPANY.developer.name}
            </a>
          </div>
        </div>
      </Container>

      <a
        href={COMPANY.social.whatsapp}
        target="_blank" rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-8px_rgba(37,211,102,0.55)] transition-transform duration-200 hover:scale-[1.06] active:scale-[0.98]"
      >
        <IconWhatsApp className="h-7 w-7" />
      </a>
    </footer>
  )
}
