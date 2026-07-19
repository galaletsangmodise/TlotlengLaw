import { motion } from 'framer-motion'

export default function SignatureMoment() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display text-2xl md:text-4xl leading-snug text-navy"
        >
          In South Africa's first Constitutional Court Fantasy League, one
          lawyer called all 11 judges' rulings correctly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          className="relative inline-block font-display text-2xl md:text-4xl leading-snug text-accent mt-6"
        >
          He's the one representing you.
          <motion.svg
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}
            className="absolute left-0 -bottom-2 w-full h-3"
            viewBox="0 0 300 12"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 8 Q 75 2, 150 6 T 298 5"
              fill="none"
              stroke="var(--color-accent-light)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </motion.svg>
        </motion.p>
      </div>
    </section>
  )
}
