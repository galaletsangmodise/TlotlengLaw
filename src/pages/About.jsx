import { motion } from 'framer-motion'
import ImagePlaceholder from '../components/ImagePlaceholder'

export default function About() {
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
            About the Firm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl text-ivory"
          >
            Tshepo Tlotleng Attorneys
          </motion.h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-navy/80 leading-relaxed mb-6 text-lg">
              Tshepo built his career at Maponya Attorneys before founding his
              own practice, bringing the same rigor and attention to detail to
              every client he represents — from individuals navigating a
              personal legal matter to businesses facing complex disputes.
            </p>
            <p className="font-body text-navy/80 leading-relaxed mb-6 text-lg">
              His approach is direct, thorough, and grounded in a genuine
              command of the law — the same instinct that led him to correctly
              call every Constitutional Court ruling in South Africa's first
              Con Court Fantasy League.
            </p>
            <p className="font-body text-navy/80 leading-relaxed text-lg">
              Today, the firm represents clients across South Africa, offering
              full-service legal representation across criminal law, family
              law, civil litigation, and more.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
                                  src={ImagePlaceholder}
                                  alt="Tshepo Tlotleng, founder and head attorney (placeholder — final portrait pending)"
                                  className="w-full h-full object-cover"
                                />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
