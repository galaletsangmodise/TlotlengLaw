import { MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Map() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="text-accent" size={20} strokeWidth={1.5} aria-hidden="true" />
          <p className="font-body text-navy text-sm">
            Klerksdorp, 2570, South Africa
          </p>
        </div>
        <div className="w-full aspect-[16/7] border border-navy/10 overflow-hidden">
          <iframe
            title="Tlotleng Attorneys — Klerksdorp, South Africa"
            src="https://www.google.com/maps?q=Klerksdorp,+South+Africa&output=embed"
            className="w-full h-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="font-body text-navy/50 text-xs mt-3">
          Map shows Klerksdorp city centre — update with the exact office
          pin once you have the street address.
        </p>
      </motion.div>
    </section>
  )
}