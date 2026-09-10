import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = process.env.SANITY_API_VERSION || '2025-01-01'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  // Published content is safe to serve from the CDN; the webhook revalidation
  // strategy (see /api/revalidate) refreshes the cache after propagation.
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source) => builder.image(source)
