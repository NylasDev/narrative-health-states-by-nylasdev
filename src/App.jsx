import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Activities from './components/Activities.jsx'
import Signature from './components/Signature.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Pricing from './components/Pricing.jsx'
import Reviews from './components/Reviews.jsx'
import InstagramFeed from './components/InstagramFeed.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppBubble from './components/WhatsAppBubble.jsx'
import './sections.css'

// Scroll narrative: ink-dark adrenaline up top → surfacing to a light
// sand section (reviews) → back into the deep for Instagram + footer.
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Activities />
        <Signature />
        <HowItWorks />
        <Pricing />
        <div className="wave-divider" aria-hidden="true">
          <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path
              d="M0 40c80-24 160-24 240 0s160 24 240 0 160-24 240 0 160 24 240 0 160-24 240 0v30H0V40Z"
              fill="#f2e8d5"
            />
          </svg>
        </div>
        <Reviews />
        <div className="wave-divider flip" aria-hidden="true">
          <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
            <path
              d="M0 40c80-24 160-24 240 0s160 24 240 0 160-24 240 0 160 24 240 0 160-24 240 0v30H0V40Z"
              fill="#f2e8d5"
            />
          </svg>
        </div>
        <InstagramFeed />
        <Faq />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  )
}
