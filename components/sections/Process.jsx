'use client'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { PROCESS } from '@/data/process'

export default function Process() {
  return (
    <section id="process" className="bg-brand-neutral py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-[clamp(1.95rem,3.6vw,3.1rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">
              How Our Loan Consulting Works
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[15.5px] leading-[1.75] text-brand-secondary/70">
              A simple, unhurried four-step process from your first call to the day the loan is
              disbursed.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 border border-brand-primary/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className={`h-full p-8 ${i < 3 ? 'lg:border-r lg:border-brand-primary/10' : ''} ${i < 2 ? 'sm:border-b sm:border-brand-primary/10 lg:border-b-0' : ''} ${(i === 0) ? 'sm:border-r sm:border-brand-primary/10' : ''} ${(i === 2) ? 'sm:border-r sm:border-brand-primary/10 lg:border-r' : ''}`}>
                <div className="font-numeric text-[13px] font-semibold tracking-widest text-brand-accent">{p.step}</div>
                <h3 className="mt-8 text-[19px] font-medium tracking-tight text-brand-secondary sm:text-[20px]">{p.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-brand-secondary/70">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
