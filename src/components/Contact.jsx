import { useState } from 'react'

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
    <section className="bg-charcoal py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <p className="font-body text-ember text-sm tracking-widest uppercase mb-4 text-center">
          Get In Touch
        </p>
        <h2 className="font-display text-4xl text-offwhite mb-4 text-center">
          Book a Consultation
        </h2>
        <p className="font-body text-stone text-center mb-12">
          Tell us briefly what's going on — we'll be in touch to arrange next steps.
        </p>

        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full bg-offwhite/5 border border-stone/30 text-offwhite px-4 py-3 font-body placeholder:text-stone/60 focus:outline-none focus:border-ember"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full bg-offwhite/5 border border-stone/30 text-offwhite px-4 py-3 font-body placeholder:text-stone/60 focus:outline-none focus:border-ember"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full bg-offwhite/5 border border-stone/30 text-offwhite px-4 py-3 font-body placeholder:text-stone/60 focus:outline-none focus:border-ember"
          />
          <textarea
            name="message"
            placeholder="Briefly describe your legal matter"
            rows={4}
            required
            className="w-full bg-offwhite/5 border border-stone/30 text-offwhite px-4 py-3 font-body placeholder:text-stone/60 focus:outline-none focus:border-ember"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-ember text-offwhite py-3 font-body text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="font-body text-sm text-center text-ember">
              Message sent — we'll be in touch shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="font-body text-sm text-center text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}