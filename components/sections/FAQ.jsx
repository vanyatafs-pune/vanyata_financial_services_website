'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ as FAQS } from '@/data/faq'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'

export default function FAQ({ heading }) {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[clamp(1.95rem,3vw,2.7rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">
                {heading || 'Common Questions About Our Loan Consulting'}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-md text-[15.5px] leading-[1.75] text-brand-secondary/70">
                Don’t see your question here? Call or WhatsApp us an advisor will respond
                within two working hours.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">
              {FAQS.map((f, i) => {
                const isOpen = open === i
                return (
                  <div key={f.q}>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    >
                      <span className="font-display text-[17px] font-medium tracking-tight text-brand-secondary sm:text-[19px]">{f.q}</span>
                      <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-md border transition-colors ${isOpen ? 'border-brand-primary bg-brand-primary text-white' : 'border-brand-primary/20 bg-white text-brand-primary'}`}>
                        {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pr-10 text-[15px] leading-[1.75] text-brand-secondary/70">{f.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
