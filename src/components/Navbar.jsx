import { useState } from 'react'
import { Menu, X, Home, Phone, Search } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Buy', href: '#buy' },
    { label: 'Rent', href: '#rent' },
    { label: 'Neighborhoods', href: '#areas' },
    { label: 'About', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl bg-[var(--cod-gray)]/50 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--sisal)]/80 to-[var(--soft-amber)]/80 text-[var(--birch)] shadow-lg">
                <Home className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm tracking-wider text-[var(--sisal)]">FLAMES</p>
                <p className="-mt-1 text-lg font-semibold text-white">Estates</p>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-[var(--sisal)] hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--squirrel)]" />
                <input
                  type="text"
                  placeholder="Search address, city, or ZIP"
                  className="pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--squirrel)] focus:outline-none focus:ring-2 focus:ring-[var(--soft-amber)]/30"
                />
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[var(--soft-amber)] to-[var(--pearl-bush)] text-[var(--birch)] px-4 py-2 font-medium shadow-lg hover:shadow-xl transition-shadow">
                <Phone className="h-4 w-4" />
                Consult
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl h-10 w-10 bg-white/5 border border-white/10 text-white" onClick={() => setOpen(!open)} aria-label="Menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 sm:px-6 py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="text-[var(--sisal)] hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[var(--soft-amber)] to-[var(--pearl-bush)] text-[var(--birch)] px-4 py-2 font-medium shadow-lg">
                  <Phone className="h-4 w-4" />
                  Consult
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
