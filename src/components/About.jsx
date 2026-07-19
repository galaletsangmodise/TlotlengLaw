import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import headshot from '../assets/images/TLaw.jpg'

export default function About() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative aspect-[4/5] overflow-hidden bg-navy/5"
        >
          <img
            src={headshot}
            alt="Tshepo Tlotleng, founder and head attorney (placeholder — final portrait pending)"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-3 right-3 bg-navy/80 text-ivory text-xs font-body px-2.5 py-1 rounded">
            Placeholder photo
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-4">
            About the Firm
          </p>
          <h2 className="font-display text-4xl text-navy mb-6">
            Founded by Tshepo Tlotleng
          </h2>
          <p className="font-body text-navy/80 leading-relaxed mb-4">
            Tshepo built his career at Maponya Attorneys before founding his
            own practice — bringing the same rigor and attention to detail
            to every client, from individuals to businesses navigating
            complex legal matters.
          </p>
          <p className="font-body text-navy/80 leading-relaxed mb-8">
            His approach is direct, thorough, and grounded in a genuine
            command of the law — the same instinct that led him to
            correctly call every Constitutional Court ruling in South
            Africa's first Con Court Fantasy League.
          </p>
          <Link
            to="/about"
            className="border border-navy/30 text-navy px-7 py-3 font-body text-sm hover:border-accent hover:text-accent transition-colors inline-block"
          >
            More About the Firm
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
