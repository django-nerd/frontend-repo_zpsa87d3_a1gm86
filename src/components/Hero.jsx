import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--cod-gray)]/40 via-[var(--cod-gray)]/20 to-[var(--cod-gray)]/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pb-16">
          <div className="max-w-2xl rounded-3xl backdrop-blur-xl bg-[var(--cod-gray)]/40 border border-white/10 p-6 sm:p-8 shadow-2xl">
            <p className="text-[var(--sisal)] tracking-widest uppercase text-xs mb-2">Curated Luxury Real Estate</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-white">
              Elevated living, crafted for the discerning few.
            </h1>
            <p className="text-[var(--squirrel)] mt-4 text-base sm:text-lg">
              Explore penthouses, designer townhomes, and investment properties across the city’s most coveted addresses.
            </p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 bg-white/5 border border-white/10 rounded-2xl p-2">
              <input className="col-span-1 md:col-span-2 bg-transparent rounded-xl px-4 py-3 placeholder-[var(--squirrel)] text-white focus:outline-none" placeholder="Location, neighborhood, or address" />
              <input className="bg-transparent rounded-xl px-4 py-3 placeholder-[var(--squirrel)] text-white focus:outline-none" placeholder="Min price" />
              <input className="bg-transparent rounded-xl px-4 py-3 placeholder-[var(--squirrel)] text-white focus:outline-none" placeholder="Max price" />
              <button className="md:col-span-1 rounded-xl bg-gradient-to-br from-[var(--soft-amber)] to-[var(--pearl-bush)] text-[var(--birch)] font-medium px-6 py-3 shadow-lg hover:shadow-xl transition-shadow">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
