import { useState } from 'react'
import { links } from '../data/dados'

function Header() {
  const [aberto, setAberto] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-superficie px-5 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <h1 className="text-2xl font-bold text-roxo-forte">Jovi-v70</h1>

        <button
          type="button"
          onClick={() => setAberto(!aberto)}
          aria-label="Abrir menu"
          aria-expanded={aberto}
          className="rounded px-3 py-1 text-2xl text-white hover:bg-cartao md:hidden"
        >
          {aberto ? '✕' : '☰'}
        </button>

        <nav className={`${aberto ? 'block' : 'hidden'} absolute left-0 top-full w-full bg-superficie px-5 pb-4 md:static md:block md:w-auto md:p-0`}>
          <ul className="flex flex-col gap-3 md:flex-row md:gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setAberto(false)}
                  className="text-white transition-colors hover:text-roxo"
                >
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
