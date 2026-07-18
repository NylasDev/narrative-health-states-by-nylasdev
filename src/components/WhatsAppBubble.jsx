import { IconWhatsApp } from './Icons.jsx'
import { waLink } from '../data.js'

// Floating booking bubble — number is wired in src/data.js and will be
// linked later; until then it opens Instagram DM.
export default function WhatsAppBubble() {
  return (
    <a
      className="wa-bubble"
      href={waLink('Hi Sea Sail! I would like to book an activity.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <IconWhatsApp size={28} />
    </a>
  )
}
