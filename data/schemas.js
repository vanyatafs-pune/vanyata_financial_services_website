import { COMPANY } from '@/data/company'
import { FAQ } from '@/data/faq'

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY.legalName,
  url: COMPANY.websiteUrl,
  logo: `${COMPANY.websiteUrl}/logo.png`,
  description:
    'Independent loan consulting firm in Pune helping businesses and individuals secure the right financial solutions.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.address.streetAddress,
    addressLocality: 'Pune',
    addressRegion: COMPANY.address.region,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.country,
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: COMPANY.phones[0].tel,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'mr'],
    },
  ],
}

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  name: COMPANY.legalName,
  image: `${COMPANY.websiteUrl}/logo.png`,
  telephone: [COMPANY.phones[0].tel, COMPANY.phones[1].tel],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No. 216, Paras Chamber, 2nd Floor, Above Bank of India',
    addressLocality: 'Swargate, Pune',
    addressRegion: 'MH',
    postalCode: '411009',
  },
  areaServed: { '@type': 'City', name: 'Pune' },
  url: COMPANY.websiteUrl,
  email: COMPANY.email,
}

export const FAQ_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}
