import { priest, socialLinks } from '../data/content'
import './Contact.css'

const ICONS = {
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.45 3.38 1.3 4.85L2.05 22l5.36-1.4a9.9 9.9 0 0 0 4.63 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.12h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.18.83.85-3.1-.2-.32a8.2 8.2 0 0 1-1.26-4.39c0-4.55 3.7-8.25 8.3-8.25 2.22 0 4.3.87 5.87 2.44a8.22 8.22 0 0 1 2.43 5.83c0 4.55-3.71 8.29-8.31 8.29Zm4.54-6.21c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14-.01-.31-.01-.47-.01a.9.9 0 0 0-.65.3c-.22.24-.86.84-.86 2.05s.88 2.38 1 2.55c.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.92 2 14.6 2 11.83 2 10 3.66 10 6.7v2.8H7v4h3V22h4v-8.5Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25A3.25 3.25 0 1 1 12 6.75a3.25 3.25 0 0 1 0 6.5ZM17.4 5.85a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.49 20.5 12 20.5 12 20.5s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.5v-7l6.4 3.5-6.4 3.5Z" />
    </svg>
  ),
}

function Contact({ onBook }) {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">Get in Touch</span>
          <h2>Book Your Pooja or Homam</h2>
          <p>Connect with us to plan your ceremony with an auspicious muhurtham and complete Vedic guidance.</p>
        </div>

        <div className="contact__panel">
          <div className="contact__priest">
            <span className="contact__priest-mark" aria-hidden="true">
              🙏
            </span>
            <div>
              <p className="contact__priest-role">{priest.role}</p>
              <h3 className="contact__priest-name">{priest.name}</h3>
              <p className="contact__priest-serving">{priest.serving}</p>
            </div>
          </div>

          <div className="contact__details">
            <a href={priest.phoneHref} className="contact__detail">
              <span className="contact__detail-icon" aria-hidden="true">
                📞
              </span>
              <div>
                <p className="contact__detail-label">Call / Phone</p>
                <p className="contact__detail-value contact__detail-value--phone">{priest.phone}</p>
              </div>
            </a>

            <a href={priest.whatsappHref} className="contact__detail" target="_blank" rel="noreferrer">
              <span className="contact__detail-icon" aria-hidden="true">
                💬
              </span>
              <div>
                <p className="contact__detail-label">WhatsApp</p>
                <p className="contact__detail-value">{priest.phone}</p>
              </div>
            </a>

            <div className="contact__detail contact__detail--static">
              <span className="contact__detail-icon" aria-hidden="true">
                📍
              </span>
              <div>
                <p className="contact__detail-label">Availability</p>
                <p className="contact__detail-value">{priest.availability}</p>
              </div>
            </div>
          </div>

          <button className="btn btn-primary contact__cta" onClick={() => onBook()}>
            Book a Pooja Online
          </button>

          <div className="contact__social">
            <p>Follow &amp; Connect</p>
            <div className="contact__social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="contact__social-link"
                >
                  {ICONS[link.icon]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
