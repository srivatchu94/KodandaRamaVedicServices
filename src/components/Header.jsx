import { useEffect, useState } from 'react'
import emblemBanner from '../assets/vaishnava-emblem.png'
import brandSeal from '../assets/brand-seal.png'
import { siteInfo } from '../data/content'
import './Header.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Poojas', href: '#services' },
  { label: 'Speciality', href: '#speciality' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQs', href: '#support' },
]

function Header({ onBook }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleBook = () => {
    closeMenu()
    onBook()
  }

  return (
    <>
      <div className="site-topbar">
        <div className="container site-topbar__inner">
          <img
            src={emblemBanner}
            alt="Garuda, Sudarshana Chakra, Namam, Shankha and Hanuman — the Sri Vaishnava emblem"
            className="site-topbar__image"
          />
          <p className="site-topbar__invocation">
            {siteInfo.invocation} <span aria-hidden="true">:</span> {siteInfo.guruVandanam}:
          </p>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
        <div className="container site-header__inner">
          <a href="#home" className="site-header__brand" onClick={closeMenu}>
            <span className="site-header__brand-mark brand-seal">
              <img src={brandSeal} alt="Sri Kodanda Rama Vedic Services seal" />
            </span>
            <span className="site-header__brand-text">
              <strong>Sri Kodanda Rama</strong>
              <small>Vedic Services</small>
            </span>
          </a>

          <nav className={`site-header__nav ${menuOpen ? 'is-open' : ''}`}>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn btn-primary site-header__cta" onClick={handleBook}>
              Book a Pooja
            </button>
          </nav>

          <button
            className={`site-header__toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
