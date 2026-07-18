// Custom v001 logo mark — a wind-filled sail over a wave, in the lagoon
// gradient. Replace with the official logo when the owner provides one.
export default function Logo({ size = 34, wordmark = true }) {
  return (
    <span className="logo">
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lg-sail" x1="10" y1="4" x2="38" y2="34">
            <stop offset="0" stopColor="#7fcdff" />
            <stop offset="1" stopColor="#1ecdcb" />
          </linearGradient>
        </defs>
        {/* main sail */}
        <path
          d="M27 4C27 4 13 14 11 30c6.5 1.5 13 .5 16-1V4Z"
          fill="url(#lg-sail)"
        />
        {/* jib sail */}
        <path
          d="M31 10c0 0 7 8 8 19-4 .8-7 .3-8-.4V10Z"
          fill="url(#lg-sail)"
          opacity="0.65"
        />
        {/* wave */}
        <path
          d="M4 38c4 0 6-2.6 10-2.6s6 2.6 10 2.6 6-2.6 10-2.6 6 2.6 10 2.6"
          stroke="#def3f6"
          strokeWidth="2.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      {wordmark && (
        <span className="logo-word">
          Sea&nbsp;Sail
          <span className="logo-sub">Maldives</span>
        </span>
      )}
    </span>
  )
}
