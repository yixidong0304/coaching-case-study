import { useEffect, useState } from 'react'
import { COURSE_URL } from '../config'

const LINKS = [
  { href: '#overview', label: 'Overview' },
  { href: '#design-decisions', label: 'Design Decisions' },
  { href: '#final-experience', label: 'Final Experience' },
  { href: '#evaluation', label: 'Evaluation' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="site-brand" href="#top" onClick={close}>
          <span className="site-brand__name">Cici Dong</span>
          <span className="site-brand__role">Instructional Design</span>
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">
            {open ? 'Close menu' : 'Open menu'}
          </span>
          <span className="nav-toggle__bars" aria-hidden="true" />
        </button>

        <nav
          id="site-nav"
          className={`site-nav${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul className="site-nav__list">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={close}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--nav"
            href={COURSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            View Course
          </a>
        </nav>
      </div>
    </header>
  )
}
