'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { TEAM } from '@/data/team'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { ArrowRight } from 'lucide-react'

export default function About({ withCarousel = false, textVariant = 'home' }) {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (!withCarousel) return
    const t = setInterval(() => setIdx((i) => (i + 1) % TEAM.length), 3800)
    return () => clearInterval(t)
  }, [withCarousel])

  const active = TEAM[idx]

  const Left = () => (
    <>
      <Reveal>
        <h2 className="text-[clamp(1.95rem,3.4vw,2.9rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">
          {textVariant === 'about'
            ? 'Ex-bankers helping Pune borrow better.'
            : 'Independent Financial Advisors Built on Banking Experience'}
        </h2>
      </Reveal>
      {textVariant === 'about' ? (
        <>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[16px] leading-[1.75] text-brand-secondary/80">
              We are Vanyata Financial Services Pvt. Ltd., an independent loan and credit consultancy
              based in Pune, built by a former banker and a veteran loan consultant who understand how lending really works.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-5 text-[16px] leading-[1.75] text-brand-secondary/80">
              Today, we help individuals, entrepreneurs, MSMEs and builders across Pune find the
              right bank, the right loan product, and the right way forward without the
              guesswork.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-5 text-[16px] font-medium leading-[1.75] text-brand-primary">
              Independent by design. Answerable only to the customer.
            </p>
          </Reveal>
        </>
      ) : (
        <>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[16px] leading-[1.75] text-brand-secondary/80">
              Most people walk into a bank, accept the first loan product offered, and never
              realize they are paying more than they should.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-5 text-[16px] leading-[1.75] text-brand-secondary/80">
              Vanyata Financial Services exists to fix that. Our founders with over seven years
              inside SBI and SIDBI use that insider knowledge to analyze your profile, compare
              options across nationalised, private and cooperative banks, and find the lender
              that actually fits your needs.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-5 text-[16px] font-medium leading-[1.75] text-brand-primary">
              We do not work for any specific bank. We work for you.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <Link
              href="/about-us"
              className="mt-8 inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-tight text-brand-primary transition-colors hover:text-brand-secondary"
            >
              Learn more about our story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </>
      )}
    </>
  )

  if (!withCarousel) {
    return (
      <section id="about" className="bg-white py-24 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5"><Left /></div>
            <div className="lg:col-span-7" />
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6"><Left /></div>
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-primary/10 bg-brand-neutral">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
                    className="absolute inset-0"
                  >
                    <Image src={active.img} alt={active.name} fill sizes="(max-width:1024px) 90vw, 42vw" className="object-cover" />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-secondary via-brand-secondary/70 to-transparent p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="text-[10.5px] font-medium uppercase tracking-[0.22em] text-white/60">The team</div>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={active.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="font-display mt-1 text-xl font-medium text-white">{active.name}</div>
                          <div className="text-[13px] text-white/75">{active.role}</div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {TEAM.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setIdx(i)}
                          aria-label={`Show teammate ${i + 1}`}
                          className={`h-1 rounded-full transition-all ${i === idx ? 'w-7 bg-brand-accent' : 'w-3 bg-white/30'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
