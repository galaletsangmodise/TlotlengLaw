import { motion } from 'framer-motion'
import { posts } from '../data/posts'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Blog() {
  return (
    <div className="bg-ivory">
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-body text-accent-light text-sm tracking-widest uppercase mb-4"
          >
            Blog
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl text-ivory"
          >
            Legal Insights
          </motion.h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-3xl mx-auto px-6 flex flex-col gap-12"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={item}
              className="border-b border-navy/10 pb-12 last:border-0"
            >
              <p className="font-body text-sm text-navy/50 mb-2">
                {new Date(post.date).toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <h2 className="font-display text-2xl text-navy mb-3">
                {post.title}
              </h2>
              <p className="font-body text-navy/70 leading-relaxed">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
