import { motion } from 'framer-motion'
import ContactCTA from '../components/Contact.jsx'
import Map from '../components/Map.jsx'

export default function Contact() {
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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl text-ivory"
          >
            Let's Discuss Your Matter
          </motion.h1>
        </div>
      </section>
      <ContactCTA />
      <Map />
    </div>
  )
}
