import Container from '@/components/shared/Container'
import PageHeader from '@/components/shared/PageHeader'
import EmiCalculator from '@/components/emi/EmiCalculator'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata = {
  title: 'EMI Calculator - Home, Personal, Business & LAP',
  description:
    'Free EMI calculator by Vanyata Financial Services estimate monthly EMI, total interest and amortization schedule for any home, personal, business or LAP loan.',
  alternates: { canonical: 'http://www.vanyatafs.com/emi-calculator' },
}

export default function EmiCalculatorPage() {
  return (
    <>
      <PageHeader
        title="EMI Calculator"
        subtitle="Estimate your monthly EMI, total interest and full amortization schedule. Use the sliders to explore how amount, rate and tenure change your outflow."
      />

      <section className="bg-brand-neutral py-16 sm:py-20">
        <Container>
          <EmiCalculator label="Loan" />

          <div className="mt-6 text-[12.5px] leading-relaxed text-brand-secondary/60">
            Indicative estimate only, not a loan offer. Actual EMI depends on lender terms, processing
            fees and any prepayment structure. Talk to a Vanyata advisor for a personalised quote.
          </div>
        </Container>
      </section>

      <ContactCTA
        heading="Need a real quote instead of an estimate?"
        subheading="Share your requirement - we&apos;ll compare live rates across 20+ banks and NBFCs and get back to you within 24 hours."
      />
    </>
  )
}
