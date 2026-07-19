import { motion } from 'framer-motion'

const stats = [
  { number: "1st", label: "To sweep the Con Court Fantasy League" },
  { number: "8", label: "Practice areas covered" },
  { number: "100%", label: "Client-focused representation" },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function StatsBar() {
  return (
    <section className="bg-mist py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item}>
            <p className="font-display text-4xl text-navy">{stat.number}</p>
            <p className="font-body text-sm text-navy/70 mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
