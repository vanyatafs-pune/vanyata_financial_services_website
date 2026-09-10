import { sanityClient } from './client'

const postCardFields = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  author,
  publishedDate,
  coverImage{ ..., asset-> }
`

export const postListQuery = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedDate) &&
  !(_id in path("drafts.**"))
] | order(publishedDate desc){
  ${postCardFields}
}`

export const postSlugsQuery = `*[
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedDate) &&
  !(_id in path("drafts.**"))
]{ "slug": slug.current, publishedDate }`

export const postBySlugQuery = `*[
  _type == "post" &&
  slug.current == $slug &&
  defined(publishedDate) &&
  !(_id in path("drafts.**"))
][0]{
  ${postCardFields},
  seoTitle,
  metaDescription,
  body[]{
    ...,
    _type == "image" => { ..., asset-> }
  }
}`

// Cache tagged with 'post' so the Sanity webhook can revalidate on publish.
const FETCH_OPTIONS = { next: { tags: ['post'] } }

export async function getPosts() {
  return sanityClient.fetch(postListQuery, {}, FETCH_OPTIONS)
}

export async function getPostSlugs() {
  return sanityClient.fetch(postSlugsQuery, {}, FETCH_OPTIONS)
}

export async function getPost(slug) {
  return sanityClient.fetch(postBySlugQuery, { slug }, FETCH_OPTIONS)
}
