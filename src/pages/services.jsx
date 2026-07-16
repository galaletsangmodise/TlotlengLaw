import { services } from '../data/services'

export default function Services() {
  return (
    <div className="bg-offwhite">
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-body text-ember text-sm tracking-widest uppercase mb-4">
            Practice Areas
          </p>
          <h1 className="font-display text-5xl text-offwhite">
            Full-Spectrum Legal Representation
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-px bg-stone/20">
          {services.map((service) => (
            <div key={service.title} className="bg-offwhite p-10">
              <h2 className="font-display text-2xl text-charcoal mb-3">
                {service.title}
              </h2>
              <p className="font-body text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}