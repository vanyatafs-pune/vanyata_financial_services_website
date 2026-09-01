'use client'
import { Target, Compass } from 'lucide-react'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'

export default function MissionVision() {
  const items = [
    {
      icon: Target,
      tag: 'Our Mission',
      title: 'Make honest, low-friction credit accessible to every Indian family and business.',
      body:
        'Borrowing should feel like a considered decision, not a chase. Our role is to bring transparency, negotiate rates, and remove every avoidable step between you and your goal.',
    },
    {
      icon: Compass,
      tag: 'Our Vision',
      title: 'To be the loan advisor Pune recommends by name for the next generation.',
      body:
        'We are building a firm whose brand is trust: where families return for their next loan, and refer their circle, because we handled the first one right.',
    },
  ]

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-0 border border-brand-primary/10 md:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon
            return (
              <Reveal key={it.tag} delay={i * 0.1}>
                <div className={`h-full p-10 sm:p-12 ${i === 0 ? 'border-b border-brand-primary/10 md:border-b-0 md:border-r' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-neutral text-brand-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/70">{it.tag}</span>
                  </div>
                  <h3 className="mt-8 text-[clamp(1.35rem,2.2vw,1.75rem)] font-semibold leading-[1.2] tracking-tight text-brand-secondary">
                    {it.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-brand-secondary/70">{it.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
