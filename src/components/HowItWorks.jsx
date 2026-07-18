import useReveal from '../useReveal.js'

const STEPS = [
  {
    n: '01',
    title: 'Pick your adventure',
    text: 'Swipe the activities, choose one — or let us build you a combo.',
  },
  {
    n: '02',
    title: 'Message us your date',
    text: 'One WhatsApp message. We confirm your slot within minutes.',
  },
  {
    n: '03',
    title: 'We handle the rest',
    text: 'Pickup from your jetty, all gear included. Just bring swimwear.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()
  return (
    <section className="how" ref={ref}>
      <div className="wrap">
        <p className="kicker reveal">Easy as a sea breeze</p>
        <h2 className="section-title reveal">
          Booked in <em>three taps.</em>
        </h2>
        <ol className="how-steps">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="how-step reveal"
              style={{ '--reveal-delay': `${i * 0.1}s` }}
            >
              <span className="how-n">{s.n}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
