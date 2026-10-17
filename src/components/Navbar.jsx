import React from 'react';

export function Navbar({ config, onOpenInvitation, petalsEnabled, onTogglePetals }) {
  const { bride, groom, monogram } = config.couple;
  // Show "Invitation PDF" button only when pdfPath is set and not a placeholder
  const hasPdf = config.invitation?.pdfPath && config.invitation.pdfPath !== '';

  return (
    <nav className="navbar">
      <div className="wrap" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo + Names */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
          <div style={{
            width: '38px', height: '38px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
            border: '1.5px solid #C9A84C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-royal)', fontSize: '0.72rem',
            fontWeight: 700, color: '#F5E4B0', flexShrink: 0,
            boxShadow: '0 2px 10px rgba(43,8,14,0.3)'
          }}>
            {monogram}
          </div>
          {/* Names — two lines for clarity on mobile */}
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: 'var(--font-royal)',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#200105',
              lineHeight: 1.15,
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              {bride.firstName} <span style={{ color: '#C9A84C', fontWeight: 400 }}>&</span> {groom.firstName}
            </div>
            <div style={{
              fontFamily: 'var(--font-telugu)',
              fontSize: '0.68rem',
              color: '#A07830',
              fontWeight: 600,
              lineHeight: 1.2,
              whiteSpace: 'nowrap'
            }}>
              3 Dec 2026 • Nizamabad
            </div>
          </div>
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          <button
            onClick={() => document.getElementById('venue')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-royal)', fontSize: '0.78rem',
              color: '#6B0F1A', fontWeight: 700, padding: '6px 10px',
              letterSpacing: '0.05em', textTransform: 'uppercase'
            }}
          >
            Venue
          </button>

          {/* Only show if PDF is available */}
          {hasPdf && (
            <button
              onClick={onOpenInvitation}
              style={{
                background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
                color: '#F5E4B0', border: '1px solid #C9A84C',
                borderRadius: '100px', padding: '7px 14px',
                fontFamily: 'var(--font-royal)', fontSize: '0.74rem',
                fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', cursor: 'pointer', whiteSpace: 'nowrap'
              }}
            >
              Invitation
            </button>
          )}

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
