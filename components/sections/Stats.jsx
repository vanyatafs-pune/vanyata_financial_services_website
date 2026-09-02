'use client'
import { useEffect, useRef } from 'react'
import { useInView, motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { STATS } from '@/data/stats'
import Container from '@/components/shared/Container'

function Counter({ target, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null)
  // const inView = useInView(ref, { once: true, margin: '-80px' }) 
  // below line - added because stack was not running- 2 items from 4 
  const inView = useInView(ref, { once: true, margin: '-20px' })
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString('en-IN')}${suffix}`)
  useEffect(() => {
    if (inView) {
      const c = animate(mv, target, { duration, ease: [0.2, 0.7, 0.2, 1] })
      return c.stop
    }
  }, [inView, target, duration, mv])
  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function Stats() {
  return (
    <section className="bg-brand-secondary py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.label} className={`flex flex-col ${i > 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''}`}>
              <div className="text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-none tracking-tight text-white">
                <Counter target={s.value} suffix={s.suffix} prefix={s.prefix || ''} />
              </div>
              <div className="mt-4 text-[11.5px] font-medium uppercase tracking-[0.22em] text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
