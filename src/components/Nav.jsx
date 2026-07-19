import { useEffect, useState } from 'react'
import { COURSE_URL } from '../config'

const LINKS = [
  { href: '#problem', id: 'problem', label: 'Problem' },
  { href: '#insight', id: 'insight', label: 'Insight' },
  { href: '#objectives', id: 'objectives', label: 'Objectives' },
  { href: '#redesign', id: 'redesign', label: 'Redesign' },
  { href: '#evaluation', id: 'evaluation', label: 'Evaluation' },
  { href: '#reflection', id: 'reflection', label: 'Reflection' },
]

const PORTFOLIO_HOME = 'https://cicidong.com/'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#problem')
  const [logoFailed, setLogoFailed] = useState(false)

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

  useEffect(() => {
    const elements = LINKS.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    )
    if (!elements.length) return undefined

    const ratios = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        })

        let bestId = null
        let bestRatio = 0
        ratios.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestId = id
          }
        })

        if (bestId) setActive(`#${bestId}`)
      },
      {
        root: null,
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="site-brand" href={PORTFOLIO_HOME} onClick={close}>
          {!logoFailed && (
            <img
              className="site-brand__mark"
              src="/images/logo.png"
              alt=""
              width={28}
              height={28}
              onError={() => setLogoFailed(true)}
            />
          )}
          <span className="site-brand__name">Cici Dong</span>
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
                <a
                  href={link.href}
                  className={active === link.href ? 'is-active' : undefined}
                  aria-current={active === link.href ? 'location' : undefined}
                  onClick={close}
                >
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
