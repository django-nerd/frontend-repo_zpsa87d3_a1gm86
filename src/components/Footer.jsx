export default function Footer() {
  return (
    <footer className="relative bg-[var(--cod-gray)] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white text-lg font-semibold">Flames Estates</h4>
            <p className="text-[var(--squirrel)] mt-2">A private collection of contemporary homes in the world’s most coveted addresses.</p>
          </div>
          <div>
            <h5 className="text-[var(--sisal)] font-medium">Explore</h5>
            <ul className="mt-3 space-y-2 text-[var(--squirrel)]">
              <li><a href="#buy" className="hover:text-white">Buy</a></li>
              <li><a href="#rent" className="hover:text-white">Rent</a></li>
              <li><a href="#areas" className="hover:text-white">Neighborhoods</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[var(--sisal)] font-medium">Company</h5>
            <ul className="mt-3 space-y-2 text-[var(--squirrel)]">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-[var(--sisal)] font-medium">Contact</h5>
            <p className="text-[var(--squirrel)] mt-3">concierge@flames.estates</p>
            <p className="text-[var(--squirrel)]">+1 (212) 555‑0199</p>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-[var(--squirrel)] text-sm">
          <p>© {new Date().getFullYear()} Flames Estates. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
