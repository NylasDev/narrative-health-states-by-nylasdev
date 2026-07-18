// ------------------------------------------------------------------
// Central site data. Everything the owner needs to change lives here.
// ------------------------------------------------------------------

// PLACEHOLDER — replace with the real number (international format,
// digits only, no "+"), e.g. "9607771234". CTAs fall back to Instagram
// DM until it is set.
export const WHATSAPP_NUMBER = ''

export const INSTAGRAM_HANDLE = 'seasail.maldives'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`

export function waLink(message) {
  const text = encodeURIComponent(message)
  if (WHATSAPP_NUMBER) return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
  return INSTAGRAM_DM_URL
}

// Prices are indicative, anchored to published Maafushi/Hulhumalé market
// rates (see PLAN.md) — confirm with the owner before launch.
export const ACTIVITIES = [
  {
    id: 'jetski',
    name: 'Jet Ski',
    tagline: 'Full throttle across glass-flat lagoon',
    duration: '15–30 min',
    price: 60,
    icon: 'jetski',
    hue: 186,
  },
  {
    id: 'parasailing',
    name: 'Parasailing',
    tagline: 'The Maldives from 70 metres up',
    duration: '15 min flight',
    price: 70,
    icon: 'parasail',
    hue: 199,
  },
  {
    id: 'funtube',
    name: 'Fun Tube',
    tagline: 'Hold on tight — pure adrenaline',
    duration: '15 min',
    price: 35,
    icon: 'tube',
    hue: 173,
  },
  {
    id: 'sailing',
    name: 'Sailing Trip',
    tagline: 'Catch the wind at golden hour',
    duration: '2–3 hours',
    price: 85,
    icon: 'sail',
    hue: 210,
  },
  {
    id: 'snorkeling',
    name: 'Snorkeling',
    tagline: 'Turtles, reefs & nurse sharks',
    duration: 'Half day',
    price: 45,
    icon: 'snorkel',
    hue: 165,
  },
  {
    id: 'sup',
    name: 'Kayak & SUP',
    tagline: 'Slow mornings on still water',
    duration: 'Per hour',
    price: 10,
    icon: 'sup',
    hue: 192,
  },
]

export const BUNDLES = [
  {
    name: 'Splash',
    price: 79,
    per: 'per person',
    items: ['Jet ski · 15 min', 'Fun tube · 15 min', 'Kayak · 1 hour'],
    note: 'The quick fix',
  },
  {
    name: 'Lagoon Day',
    price: 139,
    per: 'per person',
    items: [
      'Parasailing · 15 min',
      'Jet ski · 15 min',
      'Fun tube · 15 min',
      'Snorkeling stop',
    ],
    note: 'Most popular',
    featured: true,
  },
  {
    name: 'Sunset Sail',
    price: 99,
    per: 'per person',
    items: ['Sailing trip · 2.5 h', 'Snacks & drinks', 'Dolphin lookout'],
    note: 'The romantic one',
  },
]

// SAMPLE CONTENT — layout demonstration only. Replace with real guest
// reviews before launch (none are published anywhere yet).
export const REVIEWS = [
  {
    text: 'The most relaxing 15 minutes of flight time ever. We took off and landed straight from the boat — felt safe the whole way.',
    who: 'Sample review',
    where: 'Replace with a real guest quote',
  },
  {
    text: 'Professional, funny and safe. The team turned a jet ski ride into the highlight of our honeymoon.',
    who: 'Sample review',
    where: 'Replace with a real guest quote',
  },
  {
    text: 'Crystal water, sea turtles on the first reef, and photos of everything included. Book the combo — worth every dollar.',
    who: 'Sample review',
    where: 'Replace with a real guest quote',
  },
]

export const FAQS = [
  {
    q: 'Do I need to know how to swim?',
    a: 'Not for most rides — life jackets are provided and worn for every activity. For snorkeling we keep it to calm, shallow reefs and a guide is always in the water with you.',
  },
  {
    q: 'What happens if the weather turns?',
    a: 'Safety first: if the sea says no, we reschedule your ride or refund you in full. Maldivian squalls usually pass within the hour.',
  },
  {
    q: 'What should I bring?',
    a: 'Swimwear, sunscreen (reef-safe please), sunglasses with a strap, and a dry change of clothes. We handle the rest — gear, water and the good mood.',
  },
  {
    q: 'How do I book?',
    a: 'Message us on WhatsApp with your activity and preferred date — we confirm within minutes and arrange pickup from your guesthouse or resort jetty.',
  },
]
