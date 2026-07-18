import { useState } from 'react'
import useReveal from '../useReveal.js'
import { FAQS } from '../data.js'

export default function Faq() {
  const ref = useReveal()
  const [open, setOpen] = useState(0)
  return (
    <section className="faq" ref={ref}>
      <div className="wrap">
        <p className="kicker reveal">Good to know</p>
        <h2 className="section-title reveal">
          Before you <em>dive in.</em>
        </h2>
        <ul className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={i} className={`faq-item reveal${isOpen ? ' is-open' : ''}`}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{f.q}</span>
                  <span className="faq-plus" aria-hidden="true" />
                </button>
                <div className="faq-a" hidden={!isOpen}>
                  <p>{f.a}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
