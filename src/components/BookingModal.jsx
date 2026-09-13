import { useEffect, useRef, useState } from 'react'
import { services } from '../data/content'
import { submitEnquiry } from '../lib/enquiry'
import './BookingModal.css'

function BookingModal({ onClose, presetPurpose }) {
  const [form, setForm] = useState(() => ({
    name: '',
    purpose: presetPurpose || '',
    contact: '',
    message: '',
  }))
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    document.body.classList.add('no-scroll')
    const timer = setTimeout(() => firstFieldRef.current?.focus(), 50)
    return () => {
      clearTimeout(timer)
      document.body.classList.remove('no-scroll')
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) onClose()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!form.name.trim() || !form.purpose || !form.contact.trim()) {
      setError('Please fill in your name, pooja and a contact detail.')
      return
    }
    setError('')
    setStatus('submitting')
    try {
      await submitEnquiry(form)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="booking-modal__backdrop" onMouseDown={handleBackdropClick}>
      <div
        className="booking-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        ref={dialogRef}
      >
        <button className="booking-modal__close" onClick={onClose} aria-label="Close booking form">
          ✕
        </button>

        {status === 'success' ? (
          <div className="booking-modal__success">
            <span className="booking-modal__success-icon" aria-hidden="true">
              ✓
            </span>
            <h3>Enquiry Sent</h3>
            <p>
              Thank you, {form.name.split(' ')[0] || 'and welcome'}. Your enquiry has been received and we will get
              back to you shortly to confirm the details.
            </p>
            <button className="btn btn-primary btn-block" onClick={onClose}>
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="booking-modal__header">
              <span className="eyebrow">Book a Pooja</span>
              <h3 id="booking-modal-title">Tell Us About Your Ceremony</h3>
              <p>Share a few details and we will reach out to confirm the muhurtham and requirements.</p>
            </div>

            <form className="booking-modal__form" onSubmit={handleSubmit} noValidate>
              <label className="booking-modal__field">
                <span>Your Name</span>
                <input
                  ref={firstFieldRef}
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange('name')}
                  autoComplete="name"
                  required
                />
              </label>

              <label className="booking-modal__field">
                <span>Pooja / Purpose</span>
                <select name="purpose" value={form.purpose} onChange={handleChange('purpose')} required>
                  <option value="" disabled>
                    Select a pooja or service
                  </option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                  <option value="Other">Other / Not sure yet</option>
                </select>
              </label>

              <label className="booking-modal__field">
                <span>Phone Number or Email</span>
                <input
                  type="text"
                  name="contact"
                  placeholder="e.g. 98765 43210 or you@email.com"
                  value={form.contact}
                  onChange={handleChange('contact')}
                  autoComplete="tel"
                  required
                />
              </label>

              <label className="booking-modal__field">
                <span>Message (optional)</span>
                <textarea
                  name="message"
                  placeholder="Preferred date, location or anything else we should know"
                  rows={3}
                  value={form.message}
                  onChange={handleChange('message')}
                />
              </label>

              {error && <p className="booking-modal__error">{error}</p>}

              <button type="submit" className="btn btn-primary btn-block" disabled={status === 'submitting'}>
                {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
              </button>
              <p className="booking-modal__note">We usually respond within a few hours.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

export default BookingModal
