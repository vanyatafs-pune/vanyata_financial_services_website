import PageHeader from '@/components/shared/PageHeader'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Process from '@/components/sections/Process'
import AreasServed from '@/components/sections/AreasServed'
import ContactCTA from '@/components/sections/ContactCTA'
import Container from '@/components/shared/Container'

export const metadata = {
  title: 'About Vanyata Financial Services | Loan & Credit Consultants in Pune',
  description:
    'Meet Vanyata Financial Services, a Pune-based loan consultancy led by ex-bankers, helping individuals and businesses find the right lender for every credit need.',
  alternates: { canonical: 'http://www.vanyatafs.com/about-us' },
}

const VALUES = [
  { title: 'Integrity', text: 'We act in the customer&apos;s interest, not the bank&apos;s.' },
  { title: 'Transparency', text: 'Every cost, condition and risk is explained before you decide.' },
  { title: 'Independence', text: 'No ties to any single bank means unbiased recommendations.' },
  { title: 'Expertise', text: 'Advice grounded in real banking experience, not just theory.' },
  { title: 'Customer First', text: 'We start with your goals, not a product pitch.' },
  { title: 'Solution-Oriented', text: 'Even rejected or complex files get a second, structured look.' },
]

function Story() {
  return (
    <section className="bg-brand-neutral py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(1.95rem,3.4vw,2.9rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">Our Story</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[16px] leading-[1.8] text-brand-secondary/80">
            <p>
              Vanyata Financial Services was founded by Vaibhav Nalwade and Rutuja Nimbalkar, two
              banking professionals who spent years sitting across the table from customers and
              watching the same problem repeat itself. As an SBI Home Loan Counsellor, Vaibhav
              saw homebuyers struggle to understand which bank actually suited their profile. As
              an Assistant Manager at SBI and later SIDBI, Rutuja saw businesses and MSMEs lose
              time and money because nobody had explained their options clearly.
            </p>
            <p>
              Working inside a single bank, both could only offer what that one institution had
              on its shelf, even when they could see a better fit elsewhere. That gap is what
              led them to start Vanyata Financial Services in 2023: an independent platform
              where the advice isn’t tied to any one bank’s target, and every recommendation is
              built around the customer’s actual profile and requirement.
            </p>
            <p>
              The name reflects the intent behind the company to be a single, dependable
              point of contact for every kind of borrowing need, whether it is a home loan, a
              business loan, or funding for a builder’s next project.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function WhatWeDo() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(1.95rem,3.4vw,2.9rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">What We Do</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[16px] leading-[1.8] text-brand-secondary/80">
            <p>
              Vanyata Financial Services works as a bridge between borrowers and lenders. We
              help with business loans, MSME loans, project finance, machine finance,
              construction finance for builders and developers, home loans, education loans,
              personal loans, loans against property and working capital facilities. Alongside
              lending, we also guide clients on health, term and general insurance, and offer
              broader personal financial planning support.
            </p>
            <p>
              We are not attached to any single bank. Instead, we work across a wide network of
              nationalised banks, private banks, co-operative banks and non-bank financial institutions,
              which means our recommendation is based on what actually fits you, not on what
              one bank needs to sell that month.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Approach() {
  return (
    <section className="bg-brand-neutral py-24 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-[clamp(1.95rem,3.4vw,2.9rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">Our Approach</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[16px] leading-[1.8] text-brand-secondary/80">
            <p>
              Every engagement starts with understanding your profile, your goal and your
              repayment comfort before we even mention a bank name. From there, we compare
              lenders on your behalf, prepare and strengthen your documentation, coordinate
              directly with the bank, and stay involved until disbursement, and often beyond it.
            </p>
            <p>
              We explain every term in plain language, flag charges upfront, and never push a
              product just because it’s easier to sell.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Values() {
  return (
    <section className="bg-white py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-[clamp(1.95rem,3.6vw,3.1rem)] font-medium leading-[1.1] tracking-tight text-brand-secondary">Our Values</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 border border-brand-primary/10 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => {
            const right = (i % 3 !== 2) ? 'lg:border-r lg:border-brand-primary/10' : ''
            const smRight = (i % 2 === 0) ? 'sm:border-r sm:border-brand-primary/10' : ''
            const bottom = (i < VALUES.length - 3) ? 'lg:border-b lg:border-brand-primary/10' : ''
            const smBottom = (i < VALUES.length - 2) ? 'sm:border-b sm:border-brand-primary/10' : ''
            return (
              <div key={v.title} className={`p-8 ${right} ${smRight} ${bottom} ${smBottom}`}>
                <div className="font-numeric text-[11px] font-medium uppercase tracking-[0.22em] text-brand-primary/55">0{i + 1}</div>
                <h3 className="mt-5 text-[19px] font-medium tracking-tight text-brand-secondary">{v.title}</h3>
                <p className="mt-3 text-[14.5px] leading-[1.7] text-brand-secondary/70">{v.text}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default function AboutUsPage() {
  return (
    <>
      <PageHeader
        title="Ex-bankers helping Pune borrow better."
        subtitle="Vanyata Financial Services Pvt. Ltd. an independent loan and credit consultancy in Pune, 
        built by a former banker and a veteran loan consultant who understand how lending really works."
      />
      <About withCarousel textVariant="about" />
      <Story />
      <WhatWeDo />
      <Stats />
      <WhyChooseUs />
      <Approach />
      <Values />
      <AreasServed />
      <ContactCTA
        heading="Talk to us before you talk to a bank."
        subheading="If you&apos;re weighing your borrowing options and want an honest, experienced opinion first, get in touch with Vanyata Financial Services today."
      />
    </>
  )
}
