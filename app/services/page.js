import PageHeader from '@/components/shared/PageHeader'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import PartnerBanks from '@/components/sections/PartnerBanks'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import FAQ from '@/components/sections/FAQ'
import ContactCTA from '@/components/sections/ContactCTA'

export const metadata = {
  title: 'Loan & Credit Consultancy Services in Pune | Vanyata Financial Services',
  description:
    'From business loans to home loans, LAP to construction finance, Vanyata Financial Services connects Pune borrowers with the right bank for every credit need.',
  alternates: { canonical: 'http://www.vanyatafs.com/services' },
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Loan & Credit Consultancy Services in Pune"
        subtitle="Every borrower&apos;s situation is different, and no single bank has the right answer for everyone. We work across business loans, MSME and project finance, machine finance, construction finance for builders, home loans, education loans, personal loans, LAP, working capital and insurance - so you get a solution built around your profile, not a product pushed to meet a target."
      />
      <Services />
      <PartnerBanks />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <ContactCTA
        heading="Talk to a loan consultant."
        subheading="Whether you&apos;re a salaried professional buying your first home, a business owner expanding operations, or a builder financing your next project - we&apos;ll compare lenders, structure your proposal, and stay with you from the first call to disbursement."
      />
    </>
  )
}
