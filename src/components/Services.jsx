import { motion } from 'framer-motion'
import { services } from '../data/services'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-accent-light text-sm tracking-widest uppercase mb-4">
          Practice Areas
        </p>
        <h2 className="font-display text-4xl text-ivory max-w-xl mb-16">
          Full-spectrum legal representation, under one roof.
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-3 gap-px bg-mist/10"
        >
          {services.map((service) => (
            <motion.a
              key={service.slug}
              href={`/services#${service.slug}`}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-navy p-8 block hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
            >
              <h3 className="font-display text-xl text-ivory mb-3">
                {service.title}
              </h3>
              <p className="font-body text-mist text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
