export default function Footer() {
  return (
    <footer className="bg-charcoal text-stone py-12 border-t border-stone/20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <span className="font-display text-lg text-offwhite">Tlotleng Attorneys</span>
          <p className="font-body text-sm mt-2 max-w-xs">
            Full-service legal representation across South Africa.
          </p>
        </div>
        <div className="font-body text-sm">
          <p>&copy; {new Date().getFullYear()} Tlotleng Attorneys. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}