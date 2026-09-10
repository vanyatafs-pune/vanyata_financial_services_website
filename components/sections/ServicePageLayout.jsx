import Link from 'next/link'
import Container from '@/components/shared/Container'
import PageHeader from '@/components/shared/PageHeader'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Process from '@/components/sections/Process'
import PartnerBanks from '@/components/sections/PartnerBanks'
import ContactCTA from '@/components/sections/ContactCTA'
import { ArrowRight } from 'lucide-react'

function FaqBlock({ items, title }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(1.95rem,3vw,2.6rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="divide-y divide-brand-primary/10 border-y border-brand-primary/10">
              {items.map((f) => (
                <div key={f.q} className="py-6">
                  <div className="font-display text-[17px] font-medium tracking-tight text-brand-secondary sm:text-[19px]">{f.q}</div>
                  <p className="mt-3 text-[15px] leading-[1.75] text-brand-secondary/75">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function ServicePageLayout({ service }) {
  if (!service) return null
  return (
    <>
      <PageHeader title={service.title} subtitle={service.hero} />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5 space-y-10">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/60">Who it’s for</div>
                <p className="mt-3 text-[15.5px] leading-[1.75] text-brand-secondary/80">{service.who}</p>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/60">How we help</div>
                <p className="mt-3 text-[15.5px] leading-[1.75] text-brand-secondary/80">{service.how}</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.04] hover:bg-brand-secondary hover:shadow-[0_10px_24px_-14px_rgba(23,69,123,0.55)]"
              >
                Get free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-brand-primary/10 bg-brand-neutral p-9 sm:p-11">
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/70">Key benefits</div>
                <ul className="mt-8 divide-y divide-brand-primary/10">
                  {service.benefits.map((f, i) => (
                    <li key={f} className="flex items-start gap-6 py-4">
                      <span className="font-numeric mt-0.5 w-8 flex-none text-[12px] font-medium text-brand-primary/50">
                        0{i + 1}
                      </span>
                      <span className="text-[15px] leading-[1.7] text-brand-secondary/85">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.docsNote && (
                <div className="mt-6 flex flex-col items-start justify-between gap-3 border border-brand-primary/10 bg-white p-6 sm:flex-row sm:items-center">
                  <p className="max-w-2xl text-[14.5px] leading-[1.7] text-brand-secondary/75">
                    <span className="font-semibold text-brand-secondary">Documents required. </span>
                    {service.docsNote}
                  </p>
                  <Link
                    href="/documents"
                    className="inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] font-semibold text-brand-primary transition-colors hover:text-brand-secondary"
                  >
                    View master checklist <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              )}

              {service.related?.length > 0 && (
                <div className="mt-6 border border-brand-primary/10 p-6">
                  <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/60">Related services</div>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                    {service.related.map((r) => (
                      <Link
                        key={r.href}
                        href={r.href}
                        className="inline-flex items-center gap-1.5 text-[14px] font-medium tracking-tight text-brand-secondary hover:text-brand-primary"
                      >
                        {r.title} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <PartnerBanks />
      <WhyChooseUs />
      <Process />

      {service.faq?.length > 0 && (
        <FaqBlock items={service.faq} title={`Frequently Asked - ${service.title.split(' in ')[0]}`} />
      )}

      <ContactCTA
        heading={`Ready to talk about ${service.title.split(' Consultants')[0].toLowerCase()}?`}
        subheading="Tell us your requirement and we&apos;ll give you clear, unbiased options within 24 hours."
      />
    </>
  )
}
