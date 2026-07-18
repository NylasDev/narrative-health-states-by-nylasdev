import Logo from './Logo.jsx'
import useReveal from '../useReveal.js'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL, waLink } from '../data.js'
import { IconInstagram, IconWhatsApp } from './Icons.jsx'

export default function Footer() {
  const ref = useReveal()
  return (
    <footer className="footer" ref={ref}>
      <div className="wrap footer-cta reveal">
        <h2 className="section-title">
          Tomorrow, this
          <br />
          could be <em>you.</em>
        </h2>
        <a
          className="btn-cta"
          href={waLink('Hi Sea Sail! I would like to book an activity.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWhatsApp size={20} />
          Book on WhatsApp
        </a>
      </div>
      <div className="wrap footer-base">
        <Logo size={28} />
        <p className="footer-line">
          Watersports &amp; ocean adventures · Maldives
        </p>
        <a
          className="footer-ig"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconInstagram size={18} />@{INSTAGRAM_HANDLE}
        </a>
        <p className="footer-fine">
          © {new Date().getFullYear()} Sea Sail Maldives · Site v0.0.1 —
          preview build
        </p>
      </div>
    </footer>
  )
}
