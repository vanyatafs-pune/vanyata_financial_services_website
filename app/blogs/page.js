import PageHeader from '@/components/shared/PageHeader'
import Container from '@/components/shared/Container'
import BlogCard from '@/components/shared/BlogCard'
import ContactCTA from '@/components/sections/ContactCTA'
import { getPosts } from '@/sanity/lib/queries'

export const metadata = {
  title: 'Blogs',
  description:
    'Practical, jargon-free writing on home loans, business loans, credit health and lending in India from the advisors at Vanyata Financial Services.',
  alternates: { canonical: '/blogs' },
}

export default async function BlogsPage() {
  const posts = await getPosts()

  return (
    <>
      <PageHeader
        eyebrow="Field notes"
        title="Practical writing on borrowing well."
        subtitle="The loan questions our clients ask us most answered in plain language."
      />
      <section className="bg-brand-neutral py-16 sm:py-20">
        <Container>
          {posts?.length ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-md py-16 text-center">
              <p className="text-lg font-medium text-brand-secondary">No articles published yet.</p>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-secondary/60">
                We are working on our first posts. Please check back soon.
              </p>
            </div>
          )}
        </Container>
      </section>
      <ContactCTA />
    </>
  )
}
