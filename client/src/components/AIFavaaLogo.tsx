/**
 * AIFavaa Brand Logo Component
 * Official visual identity: AI mark (geometric A triangle + I bar) | FAVAA wordmark
 * Dark variant: white logo on dark background (default for this site)
 * Light variant: dark logo on light background
 */

interface AIFavaaLogoProps {
  /** 'dark' = white logo on dark bg (default), 'light' = dark logo on light bg */
  variant?: 'dark' | 'light';
  /** Size scaling: 'sm' | 'md' | 'lg' */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function AIFavaaLogo({ variant = 'dark', size = 'md', className = '' }: AIFavaaLogoProps) {
  const scales = {
    sm: { width: 96, height: 28, fontSize: 13, letterSpacing: '0.22em' },
    md: { width: 120, height: 34, fontSize: 16, letterSpacing: '0.22em' },
    lg: { width: 160, height: 46, fontSize: 21, letterSpacing: '0.22em' },
  };
  const s = scales[size];

  const logoColor = variant === 'light' ? '#0a0c10' : '#ffffff';
  const dividerColor = variant === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.35)';

  // SVG viewBox: 160 wide x 44 tall
  // AI mark occupies left ~56px, divider ~8px, FAVAA wordmark ~96px
  return (
    <svg
      width={s.width}
      height={s.height}
      viewBox="0 0 160 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AIFavaa"
      className={`select-none ${className}`}
    >
      {/* ── AI Mark ─────────────────────────────────────── */}
      {/* A: large geometric triangle — outer stroke only, no crossbar fill */}
      {/* Left leg of A */}
      <path
        d="M4 40 L22 4 L22 4"
        stroke={logoColor}
        strokeWidth="5"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Right leg of A (angled outward) */}
      <path
        d="M22 4 L40 40"
        stroke={logoColor}
        strokeWidth="5"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        fill="none"
      />
      {/* Crossbar of A — at ~55% height */}
      <line
        x1="11"
        y1="27"
        x2="33"
        y2="27"
        stroke={logoColor}
        strokeWidth="5"
        strokeLinecap="butt"
      />
      {/* I: vertical bar — positioned close to A, slightly taller */}
      <line
        x1="46"
        y1="6"
        x2="46"
        y2="40"
        stroke={logoColor}
        strokeWidth="5"
        strokeLinecap="butt"
      />

      {/* ── Divider ──────────────────────────────────────── */}
      <line
        x1="58"
        y1="6"
        x2="58"
        y2="38"
        stroke={dividerColor}
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* ── FAVAA Wordmark ───────────────────────────────── */}
      <text
        x="68"
        y="32"
        fill={logoColor}
        fontFamily='"Inter", "Helvetica Neue", Arial, sans-serif'
        fontSize={s.fontSize}
        fontWeight="700"
        letterSpacing={s.letterSpacing}
        dominantBaseline="auto"
        textAnchor="start"
        style={{ textTransform: 'uppercase' }}
      >
        FAVAA
      </text>
    </svg>
  );
}
