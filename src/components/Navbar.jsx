import React from 'react';
import { useReveal } from '../utils/useScrollReveal';

export function Navbar({ config, onOpenInvitation, petalsEnabled, onTogglePetals }) {
  return (
    <nav className="navbar">
      <div className="wrap" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '36px', height: '36px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
            border: '1.5px solid #C9A84C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-royal)', fontSize: '0.78rem',
            fontWeight: 700, color: '#F5E4B0', flexShrink: 0
          }}>
            {config.couple.monogram}
          </div>
          <span className="royal" style={{ fontSize: '0.85rem', color: '#3D0209', fontWeight: 600 }}>
            {config.couple.bride.firstName} <span style={{ color: '#C9A84C' }}>&</span> {config.couple.groom.firstName}
          </span>
        </div>

        {/* Right nav actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => {
              document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-royal)', fontSize: '0.78rem',
              color: '#6B0F1A', fontWeight: 600, padding: '6px 10px',
              letterSpacing: '0.06em', textTransform: 'uppercase'
            }}
          >
            Venue
          </button>

          <button
            onClick={onOpenInvitation}
            style={{
              background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
              color: '#F5E4B0',
              border: '1px solid #C9A84C',
              borderRadius: '100px',
              padding: '7px 14px',
              fontFamily: 'var(--font-royal)',
              fontSize: '0.74rem',
              fontWeight: 700,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Invitation PDF
          </button>

          <button
            onClick={onTogglePetals}
            title={petalsEnabled ? 'Pause petals' : 'Enable petals'}
            style={{
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.35)',
              borderRadius: '50%', width: '34px', height: '34px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', fontSize: '1rem', flexShrink: 0
            }}
          >
            {petalsEnabled ? '🌸' : '🍂'}
          </button>
        </div>
      </div>
    </nav>
  );
}
