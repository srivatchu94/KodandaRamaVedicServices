import { services } from '../data/content'
import './Services.css'

function Services({ onBook }) {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">We Undertake</span>
          <h2>All Types of Poojas, Homas &amp; Vedic Rituals</h2>
          <p>Every ceremony is conducted with proper Vedic procedure, sacred mantras and complete devotion.</p>
        </div>

        <ul className="services__grid">
          {services.map((service) => (
            <li key={service} className="services__item">
              <span className="services__bullet" aria-hidden="true">
                🪔
              </span>
              <span className="services__name">{service}</span>
              <button className="services__book" onClick={() => onBook(service)}>
                Book <span aria-hidden="true">→</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="services__more">
          <p>Looking for a ceremony not listed here?</p>
          <button className="btn btn-ghost" onClick={() => onBook('Other')}>
            Ask About Another Pooja
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
