import Logo from './Logo.jsx'
import { IconWhatsApp } from './Icons.jsx'
import { waLink } from '../data.js'

export default function Nav() {
  return (
    <header className="nav">
      <a href="#top" className="nav-logo" aria-label="Sea Sail Maldives — home">
        <Logo />
      </a>
      <a
        className="nav-chat"
        href={waLink('Hi Sea Sail! I would like to book an activity.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Sea Sail"
      >
        <IconWhatsApp size={20} />
        <span>Chat</span>
      </a>
    </header>
  )
}
