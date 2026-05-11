import React from 'react';

/**
 * Splits a string at every occurrence of "AIyavaa" and returns a React node
 * where each occurrence is rendered with brand-accurate styling:
 *   AI   → white bold
 *   y    → cyan/blue gradient
 *   avaa → white bold
 *
 * Usage:
 *   <p>{brandText('AIyavaa 是一个平台')}</p>
 */
export function brandText(text: string): React.ReactNode {
  if (!text.includes('AIyavaa')) return text;

  const parts = text.split('AIyavaa');
  return (
    <>
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="font-bold">
              <span className="text-white">AI</span>
              <span
                style={{
                  background: 'linear-gradient(90deg, #38bdf8 0%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                y
              </span>
              <span className="text-white">avaa</span>
            </span>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
