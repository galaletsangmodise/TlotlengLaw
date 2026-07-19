import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { services } from '../data/services'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Services() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const el = document.getElementById(location.hash.slice(1))
    if (el) {
      // small delay lets the page finish its entrance transition first
      const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150)
      return () => clearTimeout(t)
    }
  }, [location.hash])

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
            Practice Areas
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl text-ivory"
          >
            Full-Spectrum Legal Representation
          </motion.h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-px bg-navy/10"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              id={service.slug}
              variants={item}
              className="bg-ivory p-10 scroll-mt-24"
            >
              <h2 className="font-display text-2xl text-navy mb-3">
                {service.title}
              </h2>
              <p className="font-body text-navy/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
