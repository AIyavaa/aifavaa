/**
 * AIyavaa Brand Logo Component
 * Implements the official AI | YAVAA visual identity:
 * - AI mark: bold geometric "A" triangle + "I" bar
 * - Divider: vertical line
 * - Wordmark: YAVAA in custom tracking
 * Supports dark (default) and light variants.
 */

interface AIyavaaLogoProps {
  /** 'dark' = white logo on dark bg (default), 'light' = dark logo on light bg */
  variant?: 'dark' | 'light';
  /** Size scaling: 'sm' | 'md' | 'lg' */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function AIyavaaLogo({ variant = 'dark', size = 'md', className = '' }: AIyavaaLogoProps) {
  const scales = {
    sm: { mark: 28, font: 13, divH: 20, divW: 1, gap: 8 },
    md: { mark: 36, font: 16, divH: 26, divW: 1.5, gap: 10 },
    lg: { mark: 48, font: 22, divH: 34, divW: 2, gap: 14 },
  };
  const s = scales[size];

  const textColor = variant === 'light' ? '#0a0c10' : '#ffffff';
  const dividerColor = variant === 'light' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.25)';

  return (
    <span
      className={`inline-flex items-center select-none ${className}`}
      style={{ gap: s.gap }}
      aria-label="AIyavaa"
    >
      {/* AI mark — geometric triangle A + I bar */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Triangle A shape */}
        <path
          d="M4 30 L18 4 L32 30"
          stroke={textColor}
          strokeWidth="4.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        {/* Crossbar of A */}
        <line
          x1="10"
          y1="22"
          x2="26"
          y2="22"
          stroke={textColor}
          strokeWidth="4.5"
          strokeLinecap="square"
        />
        {/* I bar — right side, slightly offset */}
        <line
          x1="29"
          y1="8"
          x2="29"
          y2="30"
          stroke={textColor}
          strokeWidth="4.5"
          strokeLinecap="square"
        />
      </svg>

      {/* Divider */}
      <span
        style={{
          display: 'inline-block',
          width: s.divW,
          height: s.divH,
          background: dividerColor,
          borderRadius: 1,
          flexShrink: 0,
        }}
      />

      {/* Wordmark: YAVAA */}
      <span
        style={{
          fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
          fontWeight: 700,
          fontSize: s.font,
          letterSpacing: '0.18em',
          color: textColor,
          lineHeight: 1,
          textTransform: 'uppercase',
        }}
      >
        YAVAA
      </span>
    </span>
  );
}
