
'use client'
import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/data/services'
import Container from '@/components/shared/Container'
import BrandButton from '@/components/shared/BrandButton'
import Link from 'next/link'


const DESKTOP_QUERY = '(min-width: 1024px)'

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY)
    const update = () => setIsDesktop(mql.matches)
    update()
    mql.addEventListener('change', update)
    return () => mql.removeEventListener('change', update)
  }, [])

  return isDesktop
}

export default function Hero() {
  const wrapRef = useRef(null)
  const reduce = useReducedMotion()
  const isDesktop = useIsDesktop()

  // Only enable the scroll-jack parallax on desktop; mobile gets a plain layout
  const enableParallax = isDesktop && !reduce

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  })

  const cardsY = useTransform(scrollYProgress, [0, 1], ['0%', '-83.5%'])

  return (
    <section
      id="home"
      ref={wrapRef}
      className="relative w-full bg-brand-neutral"
      style={{ height: enableParallax ? '320vh' : 'auto' }}
    >
      <div
        className={
          enableParallax
            // Desktop: sticky scroll-jack section, offset below the fixed navbar
            ? 'sticky top-[120px] flex h-[calc(100dvh-120px)] w-full items-center overflow-hidden'
            // Mobile / tablet: normal flow, padded below the navbar (adjust pt value
            // to match your mobile navbar's actual height)
            : 'flex w-full items-center overflow-hidden pb-16 pt-[96px] sm:pt-[104px]'
        }
      >
        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left copy */}
            <div className="lg:col-span-7">
              <h1 className="text-balance text-[clamp(2.4rem,5.4vw,4.6rem)] font-medium leading-[1.02] tracking-tight text-brand-secondary">
                Loan Consultant in Pune You Can Actually Trust
              </h1>

              <p className="mt-7 max-w-xl text-[16px] leading-[1.65] text-brand-secondary/75">
                We are Vanyata Financial Services an independent consulting firm. We help
                businesses and individuals find the right bank, the right loan, and the right
                terms. No bank bias. No confusion.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <BrandButton href="/contact" variant="primary" icon={false}>Get Free Loan Consultation</BrandButton>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-tight text-brand-primary hover:text-brand-secondary"
                >
                  See our services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-2 gap-8 border-t border-brand-primary/10 pt-8 sm:grid-cols-4">
                {[
                  { k: '1000+', v: 'Customers Served' },
                  { k: '\u20B9700 Cr+', v: 'Loans Processed' },
                  { k: '7+ Years', v: 'Core Team Exp.' },
                  { k: '20+', v: 'Banks & NBFCs' },
                ].map((s) => (
                  <div key={s.v} className="flex flex-col">
                    <span className="font-numeric text-xl font-semibold tracking-tight text-brand-secondary sm:text-2xl">{s.k}</span>
                    <span className="mt-1.5 text-[10.5px] font-medium uppercase tracking-[0.18em] text-brand-primary/60">{s.v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right cards viewport */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto h-[440px] w-full max-w-[440px] overflow-hidden border border-brand-primary/10 bg-white sm:h-[480px]">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-gradient-to-b from-white to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-12 bg-gradient-to-t from-white to-transparent" />

                {enableParallax ? (
                  <motion.div
                    style={{ y: cardsY }}
                    className="flex flex-col divide-y divide-brand-primary/10 will-change-transform"
                  >
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={s.href} className="block p-6 transition-colors hover:bg-brand-neutral">
                        <div className="flex items-baseline justify-between gap-3">
                          <div className="font-numeric text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">{s.num}</div>
                          <div className="text-[11px] font-medium text-brand-accent">{s.highlight}</div>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold tracking-tight text-brand-secondary">{s.title}</h3>
                        <p className="mt-2 text-[13.5px] leading-[1.6] text-brand-secondary/65">{s.tagline}</p>
                      </Link>
                    ))}
                  </motion.div>
                ) : (
                  
                  <div className="flex h-full flex-col divide-y divide-brand-primary/10 overflow-y-auto">
                    {SERVICES.map((s) => (
                      <Link key={s.slug} href={s.href} className="block p-6 transition-colors hover:bg-brand-neutral">
                        <div className="flex items-baseline justify-between gap-3">
                          <div className="font-numeric text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">{s.num}</div>
                          <div className="text-[11px] font-medium text-brand-accent">{s.highlight}</div>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold tracking-tight text-brand-secondary">{s.title}</h3>
                        <p className="mt-2 text-[13.5px] leading-[1.6] text-brand-secondary/65">{s.tagline}</p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-3 text-center text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">
                Scroll to explore all six services
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

