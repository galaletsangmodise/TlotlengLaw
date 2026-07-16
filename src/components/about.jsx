import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="aspect-[4/5] bg-stone/40 flex items-center justify-center">
          <span className="font-body text-sm text-charcoal/50">
            Photo placeholder
          </span>
        </div>
        <div>
          <p className="font-body text-ember text-sm tracking-widest uppercase mb-4">
            About the Firm
          </p>
          <h2 className="font-display text-4xl text-charcoal mb-6">
            Founded by Tshepo Tlotleng
          </h2>
          <p className="font-body text-charcoal/80 leading-relaxed mb-4">
            Tshepo built his career at Maponya Attorneys before founding his
            own practice — bringing the same rigor and attention to detail
            to every client, from individuals to businesses navigating
            complex legal matters.
          </p>
          <p className="font-body text-charcoal/80 leading-relaxed mb-8">
            His approach is direct, thorough, and grounded in a genuine
            command of the law — the same instinct that led him to
            correctly call every Constitutional Court ruling in South
            Africa's first Con Court Fantasy League.
          </p>
          <Link
            to="/about"
            className="border border-charcoal/30 text-charcoal px-7 py-3 font-body text-sm hover:border-ember hover:text-ember transition-colors inline-block"
          >
            More About the Firm
          </Link>
        </div>
      </div>
    </section>
  )
}