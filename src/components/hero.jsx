export default function Hero() {
  return (
    <section className="bg-charcoal text-offwhite">
      <div className="max-w-6xl mx-auto px-6 py-28 md:py-36">
        <p className="font-body text-ember text-sm tracking-widest uppercase mb-6">
          Tlotleng Attorneys
        </p>
        <h1 className="font-display text-5xl md:text-6xl leading-tight max-w-3xl">
          Justice, argued with precision.
        </h1>
        <p className="font-body text-stone text-lg mt-6 max-w-xl">
          Full-service legal representation across South Africa — founded by
          the lawyer who correctly predicted all 11 Constitutional Court
          rulings before the bench did.
        </p>
        <div className="flex gap-4 mt-10">
          
            href="/contact"
            className="bg-ember text-offwhite px-7 py-3 font-body text-sm hover:opacity-90 transition-opacity"
          >
            Book a Consultation
          </a>
          
            href="/about"
            className="border border-stone/40 text-offwhite px-7 py-3 font-body text-sm hover:border-ember transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}