import ContactCTA from '../components/contact.jsx'

export default function Contact() {
  return (
    <div className="bg-offwhite">
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-body text-ember text-sm tracking-widest uppercase mb-4">
            Contact
          </p>
          <h1 className="font-display text-5xl text-offwhite">
            Let's Discuss Your Matter
          </h1>
        </div>
      </section>
      <ContactCTA />
    </div>
  )
}