import './Watermark.css'

/**
 * Faint, fixed, sitewide backdrop combining the Sudarshana Chakra
 * (Mahavishnu's discus) with the Kodanda — Rama's bow and arrow —
 * set diagonally through it.
 */
function Watermark() {
  return (
    <div className="page-watermark" aria-hidden="true">
      <svg viewBox="0 0 400 400" className="page-watermark__svg">
        <g fill="none" stroke="var(--navy-900)" strokeWidth="1.4">
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="40" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i} x1="200" y1="160" x2="200" y2="70" transform={`rotate(${i * 45} 200 200)`} />
          ))}
        </g>
        <g fill="none" stroke="var(--navy-900)" strokeWidth="1.8" transform="rotate(-28 200 200)">
          <path d="M130,50 Q262,200 130,350" />
          <line x1="130" y1="50" x2="130" y2="350" />
          <line x1="130" y1="200" x2="345" y2="200" />
          <path d="M345,200 L322,190 L322,210 Z" fill="var(--navy-900)" stroke="none" />
          <path d="M152,188 L132,174" />
          <path d="M152,212 L132,226" />
        </g>
      </svg>
    </div>
  )
}

export default Watermark
