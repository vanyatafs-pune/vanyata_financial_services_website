'use client'
import { BANKS } from '@/data/banks'
import Container from '@/components/shared/Container'

export default function PartnerBanks() {
  const list = [...BANKS, ...BANKS]
  return (
    <section id="partners" className="border-y border-brand-primary/10 bg-white py-12">
      <Container>
        <div className="mb-6 text-center text-[11px] font-medium uppercase tracking-[0.28em] text-brand-primary/70">
          Financial Institutions We Work With
        </div>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-14">
            {list.map((b, i) => (
              <span key={i} className="whitespace-nowrap text-[13px] font-medium tracking-[0.22em] text-brand-secondary/55 sm:text-[14px]">
                {b}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
