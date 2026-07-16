import { services } from '../data/services'

export default function Services() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-body text-ember text-sm tracking-widest uppercase mb-4">
          Practice Areas
        </p>
        <h2 className="font-display text-4xl text-offwhite max-w-xl mb-16">
          Full-spectrum legal representation, under one roof.
        </h2>
        <div className="grid md:grid-cols-3 gap-px bg-stone/10">
          {services.map((service) => (
            <div key={service.title} className="bg-charcoal p-8">
              <h3 className="font-display text-xl text-offwhite mb-3">
                {service.title}
              </h3>
              <p className="font-body text-stone text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}