import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="bg-offwhite min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-display text-6xl text-charcoal mb-4">404</p>
        <p className="font-body text-charcoal/70 mb-8">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="bg-ember text-offwhite px-7 py-3 font-body text-sm hover:opacity-90 transition-opacity inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}