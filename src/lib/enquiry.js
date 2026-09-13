const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const ENQUIRY_EMAIL = import.meta.env.VITE_ENQUIRY_EMAIL || 'srivatchu94@gmail.com'

function buildMailtoFallback({ name, purpose, contact, message }) {
  const subject = encodeURIComponent(`New Pooja Booking Enquiry — ${purpose}`)
  const lines = [
    `Name: ${name}`,
    `Pooja / Purpose: ${purpose}`,
    `Contact (phone or email): ${contact}`,
    message ? `Message: ${message}` : null,
  ].filter(Boolean)
  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:${ENQUIRY_EMAIL}?subject=${subject}&body=${body}`
}

export async function submitEnquiry({ name, purpose, contact, message }) {
  if (!FORM_ENDPOINT) {
    if (typeof window !== 'undefined') {
      window.location.href = buildMailtoFallback({ name, purpose, contact, message })
    }
    return { ok: true, mode: 'mailto' }
  }

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      purpose,
      contact,
      message,
      _subject: `New Pooja Booking Enquiry — ${purpose}`,
    }),
  })

  if (!response.ok) {
    throw new Error('We could not send your enquiry right now. Please try again or reach us directly.')
  }

  return { ok: true, mode: 'api' }
}
