'use client'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { WHY_CHOOSE_US } from '@/data/why-choose-us'

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[clamp(1.95rem,3.4vw,2.9rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">
                Why Businesses and Individuals Choose Vanyata
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[15.5px] leading-[1.75] text-brand-secondary/70">
                Four reasons clients stay with us across their next loan and refer their family
                and business partners.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 border border-brand-primary/10 sm:grid-cols-2">
              {WHY_CHOOSE_US.map((it, i) => {
                const rightBorder = (i % 2 === 0) ? 'sm:border-r sm:border-brand-primary/10' : ''
                const bottomBorder = (i < WHY_CHOOSE_US.length - 2) ? 'border-b border-brand-primary/10' : ''
                return (
                  <Reveal key={it.title} delay={i * 0.08}>
                    <div className={`h-full p-8 ${rightBorder} ${bottomBorder}`}>
                      <div className="font-numeric text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">
                        0{i + 1}
                      </div>
                      <h3 className="mt-6 text-[19px] font-medium tracking-tight text-brand-secondary sm:text-[20px]">{it.title}</h3>
                      <p className="mt-3 text-[14.5px] leading-[1.7] text-brand-secondary/70">{it.text}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
