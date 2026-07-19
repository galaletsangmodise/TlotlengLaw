import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.jpeg'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-mist py-12 border-t border-mist/10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Tlotleng Attorneys logo" className="h-8 w-auto" />
            <span className="font-display text-lg text-ivory">Tlotleng Attorneys</span>
          </Link>
          <p className="font-body text-sm max-w-xs">
            Full-service legal representation across South Africa.
          </p>
        </div>

        <div>
          <p className="font-body text-sm text-ivory uppercase tracking-wide mb-3">
            Quick Links
          </p>
          <nav className="flex flex-col gap-2 font-body text-sm">
            <Link to="/" className="hover:text-accent-light transition-colors">Home</Link>
            <Link to="/about" className="hover:text-accent-light transition-colors">About</Link>
            <Link to="/services" className="hover:text-accent-light transition-colors">Services</Link>
            <Link to="/blog" className="hover:text-accent-light transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-accent-light transition-colors">Contact</Link>
          </nav>
        </div>

        <div>
          <p className="font-body text-sm text-ivory uppercase tracking-wide mb-3">
            Practice Areas
          </p>
          <nav className="flex flex-col gap-2 font-body text-sm">
            <Link to="/services#criminal-law" className="hover:text-accent-light transition-colors">Criminal Law</Link>
            <Link to="/services#raf-claims" className="hover:text-accent-light transition-colors">RAF Claims</Link>
            <Link to="/services#family-law" className="hover:text-accent-light transition-colors">Family Law</Link>
          </nav>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-mist/10 font-body text-sm">
        <p>&copy; {new Date().getFullYear()} Tlotleng Attorneys. All rights reserved.</p>
      </div>
    </footer>
  )
}
