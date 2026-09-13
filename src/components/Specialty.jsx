import { siteInfo, specialties } from '../data/content'
import './Specialty.css'

function Specialty() {
  return (
    <section id="speciality" className="section section--alt specialty">
      <div className="container specialty__inner">
        <div className="specialty__text">
          <span className="eyebrow">Our Speciality</span>
          <h2>Rituals Rooted in Vedic &amp; Vaikhanasa Tradition</h2>
          <ul className="specialty__list">
            {specialties.map((item) => (
              <li key={item}>
                <span className="specialty__icon" aria-hidden="true">
                  ✦
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="specialty__card">
          <span className="specialty__card-mark">ॐ</span>
          <p className="specialty__card-quote">{siteInfo.closingLine}</p>
          <div className="specialty__card-rule" />
          <p className="specialty__card-sub">Serving Sanatana Dharma with dedication and devotion</p>
        </div>
      </div>
    </section>
  )
}

export default Specialty
