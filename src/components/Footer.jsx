import React from 'react';
import { ToranamGarland, HeartIcon } from './Icons';

export const Footer = ({ config }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'var(--color-maroon-900)',
        color: 'var(--color-gold-200)',
        paddingTop: '20px',
        paddingBottom: '40px',
        position: 'relative',
        textAlign: 'center',
        marginTop: '40px'
      }}
    >
      {/* Decorative garland separator */}
      <div style={{ marginBottom: '20px', opacity: 0.7 }}>
        <ToranamGarland className="w-full h-6" color="var(--color-gold-400)" />
      </div>

      <div className="container">
        {/* Monogram Badge */}
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'var(--gradient-maroon)',
            border: '2px solid var(--color-gold-500)',
            margin: '0 auto 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-serif-royal)',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--color-gold-300)',
            boxShadow: '0 0 16px rgba(212, 175, 55, 0.3)'
          }}
        >
          {config.couple.monogram}
        </div>

        <h3
          className="font-royal"
          style={{
            fontSize: '1.25rem',
            color: 'var(--color-gold-300)',
            fontWeight: 700,
            letterSpacing: '0.04em'
          }}
        >
          {config.couple.bride.firstName} & {config.couple.groom.firstName}
        </h3>

        <p
          className="font-body"
          style={{
            fontSize: '1.05rem',
            color: 'rgba(247, 231, 180, 0.85)',
            marginTop: '4px'
          }}
        >
          {config.timing.date} • {config.venue.name}, {config.venue.shortAddress}
        </p>

        <p
          style={{
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.6)',
            marginTop: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px'
          }}
        >
          Made with{' '}
          <HeartIcon className="w-3.5 h-3.5" color="#E3556B" fill="#E3556B" />{' '}
          for our families & friends
        </p>

        {/* Back to top button */}
        <div style={{ marginTop: '20px' }}>
          <button
            onClick={scrollToTop}
            style={{
              background: 'none',
              border: '1px solid rgba(212, 175, 55, 0.4)',
              color: 'var(--color-gold-400)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-serif-royal)',
              cursor: 'pointer',
              letterSpacing: '0.05em'
            }}
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};
