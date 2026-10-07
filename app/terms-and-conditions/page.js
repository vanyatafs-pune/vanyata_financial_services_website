import PageHeader from '@/components/shared/PageHeader'
import Container from '@/components/shared/Container'

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms & Conditions governing the use of the Vanyata Financial Services website and services.',
  alternates: { canonical: '/terms-and-conditions' },
}

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="The terms governing your use of the Vanyata Financial Services website and services."
      />
      <section className="bg-white pb-24 pt-4 sm:pb-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-[16px] leading-[1.8] text-brand-secondary/80">
            <p>
              This Terms & Conditions content will be provided by Vanyata Financial Services and
              published here.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
