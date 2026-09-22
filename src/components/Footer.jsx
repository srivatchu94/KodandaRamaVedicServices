import { credit, priest, siteInfo, socialLinks } from '../data/content'
import brandSeal from '../assets/brand-seal.png'
import './Footer.css'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Speciality', href: '#speciality' },
  { label: 'Contact', href: '#contact' },
  { label: 'Support', href: '#support' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__col">
          <a href="#home" className="site-footer__brand">
            <span className="site-footer__brand-mark brand-seal">
              <img src={brandSeal} alt="" aria-hidden="true" />
            </span>
            {siteInfo.name}
          </a>
          <p>{siteInfo.tagline}</p>
          <div className="site-footer__social">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__col">
          <h4>Quick Links</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Contact</h4>
          <p>{priest.name}</p>
          <p>{priest.role}</p>
          <a href={priest.phoneHref}>{priest.phone}</a>
          <p className="site-footer__availability">{priest.availability}</p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            © {year} {siteInfo.name}. All rights reserved.
          </p>
          <p>
            {credit.text} <span className="site-footer__brand-link">{credit.brand}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
