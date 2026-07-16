import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="bg-charcoal text-offwhite">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-xl tracking-wide">
          Tlotleng Attorneys
        </Link>
        <nav className="hidden md:flex gap-8 font-body text-sm">
          <Link to="/" className="hover:text-ember transition-colors">Home</Link>
          <Link to="/about" className="hover:text-ember transition-colors">About</Link>
          <Link to="/services" className="hover:text-ember transition-colors">Services</Link>
          <Link to="/blog" className="hover:text-ember transition-colors">Blog</Link>
          <Link to="/contact" className="hover:text-ember transition-colors">Contact</Link>
        </nav>
        <Link
          to="/contact"
          className="bg-ember text-offwhite px-5 py-2 text-sm font-body hover:opacity-90 transition-opacity"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  )
}