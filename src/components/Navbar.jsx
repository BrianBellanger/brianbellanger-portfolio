import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900 shadow-md">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          className="text-white text-lg font-semibold tracking-tight hover:text-blue-400 transition-colors"
        >
          Brian Bellanger
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 text-slate-300 hover:text-white rounded transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <ul className="flex flex-col px-4 py-3 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm font-medium text-slate-300 hover:text-white py-2 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
