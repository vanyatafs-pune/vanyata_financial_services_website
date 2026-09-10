import PageHeader from '@/components/shared/PageHeader'
import Container from '@/components/shared/Container'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Vanyata Financial Services how we collect, use and protect your information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="How Vanyata Financial Services collects, uses and safeguards your information."
      />
      <section className="bg-white pb-24 pt-4 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-[16px] leading-[1.8] text-brand-secondary/80">
            <p>
              This Privacy Policy content will be provided by Vanyata Financial Services and
              published here.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
