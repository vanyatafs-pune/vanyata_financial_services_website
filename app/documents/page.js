import Link from 'next/link'
import Container from '@/components/shared/Container'
import PageHeader from '@/components/shared/PageHeader'
import ContactCTA from '@/components/sections/ContactCTA'
import { DOCUMENT_SECTIONS } from '@/data/documents'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Documents Required for Loans in Pune | Vanyata Financial Services',
  description:
    'Complete master documents checklist for salaried applicants, self-employed borrowers, property purchases, home loan, LAP and machinery finance curated by Vanyata Financial Services, Pune.',
  alternates: { canonical: 'http://www.vanyatafs.com/documents' },
}

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="Documents Required - Master Checklist"
        subtitle="Use this as a starting point. Exact documentation varies case to case, based on the applicant's profile, loan amount, and the lender selected, our team shares a customised checklist after the first consultation."
      />

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 border border-brand-primary/10 sm:grid-cols-2">
            {DOCUMENT_SECTIONS.map((s, i) => {
              const rightBorder = (i % 2 === 0) ? 'sm:border-r sm:border-brand-primary/10' : ''
              const bottomBorder = (i < DOCUMENT_SECTIONS.length - 2) ? 'border-b border-brand-primary/10' : ''
              return (
                <div key={s.title} className={`p-8 sm:p-10 ${rightBorder} ${bottomBorder}`}>
                  <div className="font-numeric text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">
                    0{i + 1}
                  </div>
                  <h2 className="mt-5 text-[19px] font-medium leading-snug tracking-tight text-brand-secondary sm:text-[22px]">
                    {s.title}
                  </h2>
                  <ul className="mt-6 divide-y divide-brand-primary/10 border-y border-brand-primary/10">
                    {s.docs.map((d, j) => (
                      <li key={d} className="flex items-start gap-4 py-3">
                        <span className="font-numeric mt-0.5 w-8 flex-none text-[12px] text-brand-primary/45">
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        <span className="text-[14.5px] leading-[1.7] text-brand-secondary/80">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border border-brand-primary/10 bg-brand-neutral p-6 sm:flex-row sm:items-center sm:p-8">
            <p className="max-w-2xl text-[15px] leading-[1.7] text-brand-secondary/75">
              Not sure which set applies to you? Share your requirement and we’ll send a
              customised document checklist by WhatsApp within a few hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.04] hover:bg-brand-secondary"
            >
              Request my checklist
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
