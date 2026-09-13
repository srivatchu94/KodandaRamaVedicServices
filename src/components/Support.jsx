import { useState } from 'react'
import { faqs, priest } from '../data/content'
import './Support.css'

function Support({ onBook }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="support" className="section section--alt support">
      <div className="container">
        <div className="section-heading section-heading--center">
          <span className="eyebrow">Support</span>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know before booking a pooja, homam or Vedic ceremony with us.</p>
        </div>

        <div className="support__layout">
          <div className="support__faqs">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div key={faq.q} className={`support__item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    className="support__question"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="support__question-icon" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && <p className="support__answer">{faq.a}</p>}
                </div>
              )
            })}
          </div>

          <div className="support__help">
            <h3>Still have a question?</h3>
            <p>Reach out directly and we will be glad to guide you through the ceremony and its requirements.</p>
            <button className="btn btn-primary btn-block" onClick={() => onBook()}>
              Book a Pooja
            </button>
            <a href={priest.whatsappHref} className="support__help-link" target="_blank" rel="noreferrer">
              Message on WhatsApp
            </a>
            <a href={priest.phoneHref} className="support__help-phone">
              or call {priest.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support
