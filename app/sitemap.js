import { COMPANY } from '@/data/company'
import { ALL_SERVICES } from '@/data/services'
import { getPostSlugs } from '@/sanity/lib/queries'

const BASE = COMPANY.websiteUrl.replace(/\/$/, '')

export default async function sitemap() {
  const now = new Date()

  const staticPaths = ['', '/about-us', '/services', '/contact', '/documents', '/emi-calculator', '/blogs', '/privacy-policy', '/terms-and-conditions']
  const servicePaths = ALL_SERVICES.flatMap((group) => group.items.map((item) => item.href))
  const uniquePaths = Array.from(new Set([...staticPaths, ...servicePaths]))

  const staticEntries = uniquePaths.map((path) => ({
    url: `${BASE}${path || '/'}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.7,
  }))

  let postEntries = []
  try {
    const slugs = await getPostSlugs()
    postEntries = (slugs || []).map((s) => ({
      url: `${BASE}/blogs/${s.slug}`,
      lastModified: s.publishedDate ? new Date(s.publishedDate) : now,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))
  } catch (err) {
    postEntries = []
  }

  return [...staticEntries, ...postEntries]
}
