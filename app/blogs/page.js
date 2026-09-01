import PageHeader from '@/components/shared/PageHeader'
import Container from '@/components/shared/Container'
import BlogCard from '@/components/shared/BlogCard'
import ContactCTA from '@/components/sections/ContactCTA'
import { BLOGS } from '@/data/blogs'

export const metadata = {
  title: 'Blogs - Vanyata Financial Services',
  description: 'Practical, jargon-free writing on home loans, business loans, credit health and lending in India.',
}

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Field notes"
        title="Practical writing on borrowing well."
        subtitle="The loan questions our clients ask us most answered in plain language."
      />
      <section className="bg-brand-neutral py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOGS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
      <ContactCTA />
    </>
  )
}
