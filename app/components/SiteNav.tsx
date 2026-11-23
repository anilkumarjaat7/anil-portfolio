'use client'

import { useEffect, useState } from 'react'

const links = [['About', 'about'], ['Experience', 'experience'], ['Projects', 'projects'], ['Skills', 'skills'], ['Teaching', 'teaching']]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
    <a className="nav__brand" href="#top">Anil Kumar<span className="mono"> / ANIL.OS</span></a>
    <nav className={open ? 'nav__links nav__links--open' : 'nav__links'} aria-label="Primary navigation">
      {links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav__contact" href="#contact" onClick={() => setOpen(false)}>Contact <span>↗</span></a>
      <div className="nav__social">
        <a href="https://github.com/anilkumarjaat7" target="_blank" rel="noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.3c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C16.4 6 17.4 6.4 17.4 6.4c.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.3c0 4.6-2.8 5.7-5.5 6 .4.3.8 1 .8 2v2.9c0 .3.2.7.8.6A12 12 0 0 0 12 .7Z" /></svg>
        </a>
        <a href="https://www.linkedin.com/in/anilkumarjaat" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.1 2.1 0 1 1 0 4.2 2.1 2.1 0 0 1 0-4.2ZM3.4 9h3.6v11.6H3.4V9Zm5.8 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.3h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.7H9.2V9Z" /></svg>
        </a>
      </div>
    </nav>
    <div className="nav__tools"><button className="nav__toggle" aria-expanded={open} aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span /><span /></button></div>
  </header>
}
