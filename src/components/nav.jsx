export default function Nav() {
  return (
    <header className="bg-charcoal text-offwhite">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
        <span className="font-display text-xl tracking-wide">
          Tlotleng Attorneys
        </span>
        <nav className="hidden md:flex gap-8 font-body text-sm">
          <a href="/" className="hover:text-ember transition-colors">Home</a>
          <a href="/about" className="hover:text-ember transition-colors">About</a>
          <a href="/services" className="hover:text-ember transition-colors">Services</a>
          <a href="/blog" className="hover:text-ember transition-colors">Blog</a>
          <a href="/contact" className="hover:text-ember transition-colors">Contact</a>
        </nav>
        <a
          href="/contact"
          className="bg-ember text-offwhite px-5 py-2 text-sm font-body hover:opacity-90 transition-opacity"
        >
          Book a Consultation
        </a>
      </div>
    </header>
  )
}