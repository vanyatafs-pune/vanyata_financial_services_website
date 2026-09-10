'use client'
import Link from 'next/link'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { SERVICES, SECONDARY_SERVICES } from '@/data/services'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="bg-brand-neutral py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <h2 className="text-[clamp(1.95rem,3.6vw,3.1rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">
                Loan Consulting Services in Pune
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="lg:col-span-4">
            <p className="text-[15.5px] leading-[1.75] text-brand-secondary/70">
              Every mandate is handled by a senior advisor not a call-centre. From eligibility
              to disbursal, one point of contact, start to finish.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 border border-brand-primary/10 bg-white sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const rightBorder = (i % 3 !== 2) ? 'lg:border-r lg:border-brand-primary/10' : ''
            const smRightBorder = (i % 2 === 0) ? 'sm:border-r sm:border-brand-primary/10' : ''
            const bottomBorder = (i < SERVICES.length - (SERVICES.length % 3 || 3)) ? 'border-b border-brand-primary/10' : ''
            const smBottomBorder = (i < SERVICES.length - 2) ? 'sm:border-b sm:border-brand-primary/10' : ''
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className={`group flex h-full flex-col justify-between p-9 transition-colors hover:bg-brand-neutral ${rightBorder} ${smRightBorder} ${smBottomBorder} ${bottomBorder}`}
                >
                  <div>
                    <div className="font-numeric text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">{s.num}</div>
                    <h3 className="mt-6 text-[22px] font-medium leading-tight tracking-tight text-brand-secondary sm:text-[24px]">{s.title}</h3>
                    <p className="mt-4 text-[14.5px] leading-[1.7] text-brand-secondary/65">{s.description}</p>
                  </div>
                  <div className="mt-10 flex items-center justify-between border-t border-brand-primary/10 pt-5">
                    <span className="text-[13px] font-semibold tracking-tight text-brand-primary">Learn more</span>
                    <ArrowRight className="h-4 w-4 text-brand-primary transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] text-brand-secondary/70">
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/60">Also handled</span>
            {SECONDARY_SERVICES.map((s, i) => (
              <span key={s.title} className="inline-flex items-center gap-2">
                <Link href={s.href} className="font-medium text-brand-secondary hover:text-brand-primary">
                  {s.title}
                </Link>
                {i < SECONDARY_SERVICES.length - 1 && <span className="text-brand-primary/25">/</span>}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
