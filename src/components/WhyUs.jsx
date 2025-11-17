export default function WhyUs() {
  const perks = [
    {
      title: 'White‑glove Service',
      desc: 'Personal advisors, private tours, and discreet transactions tailored to you.',
    },
    {
      title: 'Global Network',
      desc: 'Access exclusive off‑market listings and international buyers & sellers.',
    },
    {
      title: 'Data‑Driven Insight',
      desc: 'Market intelligence and pricing strategy that maximizes your position.',
    },
  ]

  return (
    <section id="about" className="relative py-20 bg-[var(--tuatara)]">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(205,194,182,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[var(--sisal)] tracking-widest uppercase text-xs">Why choose us</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mt-2">Where luxury meets precision</h2>
          <p className="text-[var(--squirrel)] mt-4">
            We curate, negotiate, and close with an obsession for detail. From first look to final signature, consider every moment elevated.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {perks.map((p) => (
            <div key={p.title} className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 shadow-2xl">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-[var(--sisal)] mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
