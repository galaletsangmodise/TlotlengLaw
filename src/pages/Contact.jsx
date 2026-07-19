import { motion } from 'framer-motion'
import { Phone, MapPin, Mail } from 'lucide-react'
import ContactCTA from '../components/Contact.jsx'
import Map from '../components/Map.jsx'

export default function Contact() {
  const details = [
    {
      icon: Phone,
      label: 'Call Us',
      lines: ['018 012 0017', '065 937 1560'],
      hrefs: ['tel:0180120017', 'tel:0659371560'],
    },
    {
      icon: MapPin,
      label: 'Visit Our Office',
      lines: ['1A North Street', 'Klerksdorp, 2571'],
    },
    {
      icon: Mail,
      label: 'Email',
      lines: ['info@tlotlenglaw.co.za'],
      hrefs: ['mailto:info@tlotlenglaw.co.za'],
    },
  ]

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

      <section className="bg-navy pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto px-6 grid sm:grid-cols-3 gap-10"
        >
          {details.map(({ icon: Icon, label, lines, hrefs }) => (
            <div key={label} className="text-center">
              <Icon
                className="mx-auto text-accent-light mb-4"
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <p className="font-display text-lg text-ivory mb-3">{label}</p>
              <div className="font-body text-sm text-mist space-y-1">
                {lines.map((line, i) =>
                  hrefs?.[i] ? (
                    <a
                      key={line}
                      href={hrefs[i]}
                      className="block hover:text-accent-light transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <p key={line}>{line}</p>
                  )
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      <ContactCTA />
      <Map />
    </div>
  )
}