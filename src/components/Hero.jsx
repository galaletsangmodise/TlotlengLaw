import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="relative bg-navy text-ivory overflow-hidden">
      {/* Subtle ambient depth — faint radial glow, not decoration for its own sake */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(123,155,201,0.15), transparent 60%)',
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-6xl mx-auto px-6 py-28 md:py-36"
      >
        <motion.p
          variants={item}
          className="font-body text-accent-light text-sm tracking-widest uppercase mb-6"
        >
          Tlotleng Attorneys
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-5xl md:text-6xl leading-tight max-w-3xl"
        >
          Justice, argued with precision.
        </motion.h1>
        <motion.p
          variants={item}
          className="font-body text-mist text-lg mt-6 max-w-xl"
        >
          Full-service legal representation across South Africa — founded by
          the lawyer who correctly predicted all 11 Constitutional Court
          rulings before the bench did.
        </motion.p>
        <motion.div variants={item} className="flex flex-wrap gap-4 mt-10">
          <Link
            to="/contact"
            className="bg-accent text-ivory px-7 py-3 font-body text-sm hover:bg-accent-light transition-colors"
          >
            Book a Consultation
          </Link>
          <Link
            to="/about"
            className="border border-mist/40 text-ivory px-7 py-3 font-body text-sm hover:border-accent-light hover:text-accent-light transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
