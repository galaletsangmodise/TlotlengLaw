import { posts } from '../data/posts'

export default function Blog() {
  return (
    <div className="bg-offwhite">
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-body text-ember text-sm tracking-widest uppercase mb-4">
            Blog
          </p>
          <h1 className="font-display text-5xl text-offwhite">
            Legal Insights
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 flex flex-col gap-12">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-charcoal/10 pb-12 last:border-0">
              <p className="font-body text-sm text-charcoal/50 mb-2">
                {new Date(post.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h2 className="font-display text-2xl text-charcoal mb-3">
                {post.title}
              </h2>
              <p className="font-body text-charcoal/70 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}