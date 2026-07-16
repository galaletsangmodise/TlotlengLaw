const stats = [
  { number: "1st", label: "To sweep the Con Court Fantasy League" },
  { number: "6+", label: "Practice areas covered" },
  { number: "100%", label: "Client-focused representation" },
]

export default function StatsBar() {
  return (
    <section className="bg-stone py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl text-charcoal">{stat.number}</p>
            <p className="font-body text-sm text-charcoal/70 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}