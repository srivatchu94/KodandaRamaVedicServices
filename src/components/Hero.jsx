import { priest, siteInfo } from '../data/content'
import './Hero.css'

function Hero({ onBook }) {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Authentic Vedic Poojas,
            <span>Performed with Devotion</span>
          </h1>

          <p className="hero__tagline">{siteInfo.tagline}</p>

          <div className="hero__actions">
            <button className="btn btn-primary" onClick={() => onBook()}>
              Book a Pooja
            </button>
            <a href="#services" className="btn btn-outline">
              View All Poojas
            </a>
          </div>

          <div className="hero__meta">
            <a href={priest.phoneHref} className="hero__meta-item hero__meta-item--phone">
              <span aria-hidden="true">📞</span> {priest.phone}
            </a>
            <span className="hero__meta-divider" aria-hidden="true" />
            <span className="hero__meta-item">
              <span aria-hidden="true">📍</span> {priest.availability}
            </span>
          </div>
        </div>

        <div className="hero__card">
          <div className="hero__card-glow" aria-hidden="true" />
          <span className="hero__card-mark">ॐ</span>
          <p className="hero__card-banner">{siteInfo.banner}</p>
          <div className="hero__card-rule" />
          <p className="hero__card-priest">{priest.name}</p>
          <p className="hero__card-role">{priest.role}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
