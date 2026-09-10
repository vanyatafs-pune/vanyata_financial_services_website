'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '@/data/testimonials'
import Container from '@/components/shared/Container'
import Eyebrow from '@/components/shared/Eyebrow'
import Reveal from '@/components/shared/Reveal'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const next = () => setI((v) => (v + 1) % TESTIMONIALS.length)
  const prev = () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const t = TESTIMONIALS[i]

  return (
    <section id="reviews" className="bg-brand-neutral py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal><Eyebrow>Client voices</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.6rem)] font-semibold leading-[1.1] tracking-tight text-brand-secondary">
                What clients say after the loan closes.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-brand-secondary/70">
                Every review below is from a real Vanyata client, verified by name and location.
              </p>
            </Reveal>

            <div className="mt-8 flex items-center gap-3">
              <button onClick={prev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center border border-brand-primary/15 text-brand-primary transition-colors hover:bg-brand-primary hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label="Next" className="flex h-10 w-10 items-center justify-center border border-brand-primary/15 text-brand-primary transition-colors hover:bg-brand-primary hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="ml-2 text-[12.5px] font-medium tracking-tight text-brand-secondary/60">
                {String(i + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border border-brand-primary/10 bg-white p-10 sm:p-14">
              <p className="text-[clamp(1.15rem,1.9vw,1.55rem)] leading-[1.5] tracking-tight text-brand-secondary">
                “{t.quote}”
              </p>
              <div className="mt-10 h-px w-10 bg-brand-accent" />
              <div className="mt-5">
                <div className="text-base font-semibold tracking-tight text-brand-secondary">{t.name}</div>
                <div className="text-sm text-brand-primary/70">{t.role}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
