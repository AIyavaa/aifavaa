/**
 * BrandName — renders "AIyavaa" with brand-accurate styling:
 *   AI    → white, bold, uppercase
 *   yavaa → cyan/blue gradient
 *
 * Usage:
 *   <BrandName />                  — default (inherits font-size)
 *   <BrandName className="text-2xl" />
 */
interface BrandNameProps {
  className?: string;
}

export default function BrandName({ className = '' }: BrandNameProps) {
  return (
    <span className={`font-bold tracking-tight ${className}`}>
      <span className="text-white">AI</span>
      <span
        style={{
          background: 'linear-gradient(90deg, #38bdf8 0%, #3b82f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        yavaa
      </span>
    </span>
  );
}
