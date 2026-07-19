import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="bg-navy py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl mx-auto px-6"
      >
        <p className="font-body text-accent-light text-sm tracking-widest uppercase mb-4 text-center">
          Get In Touch
        </p>
        <h2 className="font-display text-4xl text-ivory mb-4 text-center">
          Book a Consultation
        </h2>
        <p className="font-body text-mist text-center mb-12">
          Tell us briefly what's going on — we'll be in touch to arrange next steps.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* Honeypot — hidden from real users, catches bots. */}
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />

          <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="w-full bg-ivory/5 border border-mist/30 text-ivory px-4 py-3 font-body placeholder:text-mist/60 focus:outline-none focus:border-accent-light"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full bg-ivory/5 border border-mist/30 text-ivory px-4 py-3 font-body placeholder:text-mist/60 focus:outline-none focus:border-accent-light"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full bg-ivory/5 border border-mist/30 text-ivory px-4 py-3 font-body placeholder:text-mist/60 focus:outline-none focus:border-accent-light"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Briefly describe your legal matter</label>
            <textarea
              id="message"
              name="message"
              placeholder="Briefly describe your legal matter"
              rows={4}
              required
              className="w-full bg-ivory/5 border border-mist/30 text-ivory px-4 py-3 font-body placeholder:text-mist/60 focus:outline-none focus:border-accent-light"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-accent text-ivory py-3 font-body text-sm hover:bg-accent-light transition-colors disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          <div aria-live="polite">
            {status === 'success' && (
              <p className="font-body text-sm text-center text-accent-light">
                Message sent — we'll be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="font-body text-sm text-center text-red-400">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </motion.div>
    </section>
  )
}
