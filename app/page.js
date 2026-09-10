import Hero from '@/components/sections/Hero'
import Stats from '@/components/sections/Stats'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import PartnerBanks from '@/components/sections/PartnerBanks'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import Process from '@/components/sections/Process'
import FAQ from '@/components/sections/FAQ'
import AreasServed from '@/components/sections/AreasServed'
import ContactCTA from '@/components/sections/ContactCTA'
import { FAQ_PAGE_SCHEMA } from '@/data/schemas'

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_PAGE_SCHEMA) }}
      />
      <Hero />
      <Stats />
      <About />
      <Services />
      <PartnerBanks />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <AreasServed />
      <ContactCTA />
    </>
  )
}
