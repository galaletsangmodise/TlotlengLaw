import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="bg-ivory min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-6"
      >
        <p className="font-display text-6xl text-navy mb-4">404</p>
        <p className="font-body text-navy/70 mb-8">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-accent text-ivory px-7 py-3 font-body text-sm hover:bg-accent-light transition-colors inline-block"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
