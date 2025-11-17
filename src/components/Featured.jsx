export default function Featured() {
  const listings = [
    {
      id: 1,
      title: 'Skyline Penthouse',
      location: 'Hudson Yards, NYC',
      price: '$8,950,000',
      beds: 4,
      baths: 4.5,
      area: '4,200 sq ft',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2069&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Modern Hillside Villa',
      location: 'Trousdale Estates, LA',
      price: '$6,480,000',
      beds: 5,
      baths: 6,
      area: '5,100 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Waterfront Residence',
      location: 'Miami Beach, FL',
      price: '$7,240,000',
      beds: 4,
      baths: 4,
      area: '3,800 sq ft',
      image: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?q=80&w=2069&auto=format&fit=crop',
    },
  ]

  return (
    <section id="featured" className="relative py-20 bg-gradient-to-b from-[var(--cod-gray)] to-[var(--tuatara)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[var(--sisal)] tracking-widest uppercase text-xs">Featured</p>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">Handpicked listings</h2>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-xl bg-white/5 border border-white/10 text-white px-4 py-2 hover:bg-white/10 transition-colors">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((home) => (
            <article key={home.id} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={home.image} alt={home.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{home.title}</h3>
                    <p className="text-[var(--squirrel)]">{home.location}</p>
                  </div>
                  <span className="inline-flex rounded-xl bg-gradient-to-br from-[var(--soft-amber)] to-[var(--pearl-bush)] text-[var(--birch)] px-3 py-1 text-sm font-medium shadow-lg">{home.price}</span>
                </div>
                <div className="mt-4 flex items-center gap-4 text-[var(--sisal)]">
                  <p>{home.beds} bd</p>
                  <p>{home.baths} ba</p>
                  <p>{home.area}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
