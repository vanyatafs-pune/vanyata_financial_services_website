import PageHeader from '@/components/shared/PageHeader'
import ContactCTA from '@/components/sections/ContactCTA'
import AreasServed from '@/components/sections/AreasServed'
import FAQ from '@/components/sections/FAQ'

export const metadata = {
  title: 'Contact Vanyata Financial Services | Loan Consultants in Pune',
  description:
    'Get in touch with Vanyata Financial Services for expert guidance on business loans, home loans, MSME finance, and more, right here in Pune.',
  alternates: { canonical: 'http://www.vanyatafs.com/contact-us' },
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="A straightforward, no-pressure consultation."
        subtitle="Have a loan requirement, an insurance question, or simply need a second opinion before you approach a bank? Vanyata Financial Services is based in Swargate, Pune, and works with individuals, MSMEs and builders across the city on everything from business loans and home loans to construction finance and insurance advisory."
      />
      <ContactCTA
        heading="Reach out. We listen first."
        subheading="Financial decisions can feel overwhelming when there&apos;s a bank form in front of you and not enough clarity on what it actually means. We start every conversation by listening - whether you&apos;re a salaried professional exploring your first home loan or a business owner weighing working capital options."
      />
      <AreasServed />
      <FAQ />
    </>
  )
}
