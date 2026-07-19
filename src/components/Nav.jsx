import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/hero.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-navy text-ivory sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Tlotleng Attorneys logo" className="h-10 w-auto" />
          <span className="font-display text-lg tracking-wide hidden sm:inline">
            Tlotleng Attorneys
          </span>
        </Link>

        <nav className="hidden md:flex gap-8 font-body text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative py-1 transition-colors hover:text-accent-light ${
                  isActive ? 'text-accent-light' : 'text-ivory'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-px bg-accent-light"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-block bg-accent text-ivory px-5 py-2 text-sm font-body hover:bg-accent-light transition-colors"
        >
          Book a Consultation
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-light rounded"
        >
          <span className={`block w-6 h-px bg-ivory transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-ivory transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-ivory transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-mist/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4 font-body text-sm">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="hover:text-accent-light transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="bg-accent text-ivory px-5 py-2.5 text-center hover:bg-accent-light transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
