'use client'
import Container from '@/components/shared/Container'
import Reveal from '@/components/shared/Reveal'
import { COMPANY } from '@/data/company'

export default function AreasServed() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-[clamp(1.95rem,3.4vw,2.9rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">
                Serving Customers Across Pune
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[15.5px] leading-[1.75] text-brand-secondary/70">
                Based in Swargate, we assist individuals, MSMEs and builders across Pune and
                PCMC in person at our office, or over a call and WhatsApp anywhere in the city.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-4 text-[15.5px] leading-[1.75] text-brand-secondary/70">
                Our office is easy to reach from Swargate bus stand and metro station, above
                Bank of India, behind Laxminarayan Theatre.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="aspect-[4/3] w-full overflow-hidden border border-brand-primary/10 bg-brand-neutral">
                <iframe
                  src={COMPANY.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vanyata Financial Services, Paras Chamber, Swargate, Pune"
                  allowFullScreen
                />
              </div>
              <a
                href={COMPANY.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-primary hover:text-brand-secondary"
              >
                View on Google Maps →
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
