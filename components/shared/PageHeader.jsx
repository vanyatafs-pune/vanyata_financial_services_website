import Container from '@/components/shared/Container'

export default function PageHeader({ eyebrow: _eyebrow, title, subtitle }) {
  return (
    <section className="bg-white pt-16 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-[clamp(2.1rem,4.4vw,3.8rem)] font-medium leading-[1.05] tracking-tight text-brand-secondary">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.75] text-brand-secondary/70">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
