import { COMPANY } from '@/data/company'

const BASE = COMPANY.websiteUrl.replace(/\/$/, '')

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/api/'],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
