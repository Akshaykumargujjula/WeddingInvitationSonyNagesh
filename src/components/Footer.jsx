import React from 'react';

export function Footer({ config }) {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #3D0209 0%, #200105 100%)',
      color: '#F5E4B0', padding: '40px 0 32px', textAlign: 'center'
    }}>
      {/* Gold line top */}
      <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', marginBottom: '28px' }} />

      <div className="wrap">
        {/* Monogram */}
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
          border: '2px solid #C9A84C', margin: '0 auto 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-royal)', fontSize: '1rem',
          fontWeight: 700, color: '#F5E4B0',
          boxShadow: '0 0 20px rgba(201,168,76,0.3)'
        }}>
          {config.couple.monogram}
        </div>

        <h3 className="royal" style={{ fontSize: '1.2rem', color: '#E8CB7A', fontWeight: 700 }}>
          {config.couple.bride.firstName} & {config.couple.groom.firstName}
        </h3>

        <p className="body-serif" style={{ color: 'rgba(245,228,176,0.8)', marginTop: '6px', fontSize: '1rem' }}>
          {config.timing.date}
        </p>
        <p style={{ color: 'rgba(245,228,176,0.65)', fontSize: '0.88rem', marginTop: '4px' }}>
          {config.venue.name}, {config.venue.shortAddress}
        </p>

        <p style={{ color: 'rgba(245,228,176,0.45)', fontSize: '0.78rem', marginTop: '20px' }}>
          Made with ❤️ for our families & friends
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            background: 'none', border: '1px solid rgba(201,168,76,0.4)',
            color: 'rgba(201,168,76,0.8)', padding: '7px 18px',
            borderRadius: '100px', fontSize: '0.78rem',
            fontFamily: 'var(--font-royal)', cursor: 'pointer',
            marginTop: '18px', letterSpacing: '0.06em'
          }}
        >
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}
