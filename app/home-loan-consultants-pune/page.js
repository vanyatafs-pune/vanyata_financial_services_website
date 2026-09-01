import ServicePageLayout from '@/components/sections/ServicePageLayout'
import { getLoanService } from '@/data/loan-services'

const service = getLoanService('home-loan-consultants-pune')

export const metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  alternates: { canonical: `http://www.vanyatafs.com/${service.slug}` },
}

export default function Page() { return <ServicePageLayout service={service} /> }
