import React, { useEffect } from 'react';

export function InvitationModal({ isOpen, onClose, config }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const { bride, groom, monogram } = config.couple;
  const { date, muhurtham, lagna, teluguDate } = config.timing;
  const { name: venue, address } = config.venue;

  return (
    <div className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>

      {/* Sticky top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        width: '100%', maxWidth: '640px', margin: '0 auto 20px',
        background: 'rgba(253,248,240,0.97)', backdropFilter: 'blur(12px)',
        border: '1.5px solid #C9A84C', borderRadius: '100px',
        padding: '10px 16px', position: 'sticky', top: '8px', zIndex: 10,
        boxShadow: '0 8px 40px rgba(43,8,14,0.4)'
      }}>
        <button onClick={onClose} style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-royal)', fontSize: '0.82rem',
          fontWeight: 700, color: '#6B0F1A', letterSpacing: '0.06em'
        }}>
          ← Back
        </button>
        <span className="royal" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#3D0209' }}>
          💌 Wedding Patrika
        </span>
        <button onClick={onClose} style={{
          background: 'none', border: 'none', cursor: 'pointer',
          fontSize: '1.5rem', color: '#6B0F1A', lineHeight: 1, padding: '2px 6px'
        }}>✕</button>
      </div>

      {/* Main Invitation Card */}
      <div style={{
        width: '100%', maxWidth: '600px', margin: '0 auto',
        background: 'linear-gradient(165deg, #FFFDF8 0%, #FAF1DC 60%, #F3E3C0 100%)',
        border: '2.5px solid #C9A84C',
        borderRadius: '28px',
        padding: '44px 28px 36px',
        textAlign: 'center',
        boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'hidden'
      }}>

        {/* Inner decorative border */}
        <div style={{
          position: 'absolute', inset: '10px',
          border: '1px dashed rgba(201,168,76,0.5)',
          borderRadius: '20px', pointerEvents: 'none'
        }} />

        {/* Gold shimmer */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 0%, rgba(201,168,76,0.08) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />

        {/* Corner florals */}
        {['🌸', '🌸', '🌸', '🌸'].map((f, i) => (
          <span key={i} style={{
            position: 'absolute', fontSize: '1.6rem', opacity: 0.2, lineHeight: 1,
            top: i < 2 ? '16px' : 'auto',
            bottom: i >= 2 ? '16px' : 'auto',
            left: i % 2 === 0 ? '16px' : 'auto',
            right: i % 2 === 1 ? '16px' : 'auto',
            transform: i === 1 ? 'scaleX(-1)' : i === 2 ? 'scaleY(-1)' : i === 3 ? 'scale(-1)' : 'none',
            pointerEvents: 'none'
          }}>{f}</span>
        ))}

        {/* ── INVOCATION ── */}
        <p className="telugu" style={{
          fontSize: '0.92rem', color: '#9A6B20', fontWeight: 700,
          letterSpacing: '0.03em', marginBottom: '20px', position: 'relative'
        }}>
          || శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||
        </p>

        {/* Monogram */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
            border: '2.5px solid #C9A84C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 32px rgba(201,168,76,0.4), 0 8px 24px rgba(43,8,14,0.4)',
            fontFamily: 'var(--font-royal)', fontWeight: 700,
            fontSize: '1rem', color: '#F5E4B0', letterSpacing: '0.05em'
          }}>
            {monogram}
          </div>
        </div>

        <p className="royal" style={{
          fontSize: '0.7rem', letterSpacing: '0.22em', color: '#A07830',
          textTransform: 'uppercase', marginBottom: '28px'
        }}>
          Kalyana Mahotsava Patrika
        </p>

        {/* Gold line */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          marginBottom: '28px'
        }} />

        {/* ── COUPLE NAMES ── */}
        <div style={{ marginBottom: '28px' }}>
          <p className="telugu" style={{
            fontSize: '0.9rem', color: '#7A1224', fontWeight: 600, marginBottom: '4px'
          }}>
            {bride.teluguName}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-royal)',
            fontSize: 'clamp(1.9rem, 7vw, 2.6rem)',
            color: '#200105', fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '0.02em'
          }}>
            {bride.firstName}
          </h2>
          <p style={{
            fontFamily: 'var(--font-script)',
            fontSize: 'clamp(1.3rem, 5vw, 1.7rem)',
            color: '#A07830', marginTop: '2px'
          }}>
            ({bride.nickname})
          </p>

          <div style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', gap: '14px', margin: '18px 0'
          }}>
            <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <span style={{
              fontFamily: 'var(--font-script)', fontSize: '2.4rem', color: '#A07830', lineHeight: 1
            }}>weds</span>
            <span style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>

          <p className="telugu" style={{
            fontSize: '0.9rem', color: '#7A1224', fontWeight: 600, marginBottom: '4px'
          }}>
            {groom.teluguName}
          </p>
          <h2 style={{
            fontFamily: 'var(--font-royal)',
            fontSize: 'clamp(1.9rem, 7vw, 2.6rem)',
            color: '#200105', fontWeight: 800, lineHeight: 1.05,
            letterSpacing: '0.02em'
          }}>
            {groom.firstName}
          </h2>
        </div>

        {/* Gold line */}
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          marginBottom: '28px'
        }} />

        {/* ── DATE & TIME BOX ── */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(245,228,176,0.6), rgba(201,168,76,0.15))',
          border: '1.5px solid rgba(201,168,76,0.6)',
          borderRadius: '18px', padding: '22px 20px',
          marginBottom: '20px'
        }}>
          <p className="telugu" style={{
            fontSize: '0.92rem', color: '#7A1224', fontWeight: 700, marginBottom: '6px'
          }}>
            {teluguDate}
          </p>
          <h3 className="royal" style={{
            fontSize: 'clamp(1.15rem, 4vw, 1.45rem)',
            color: '#200105', fontWeight: 800, marginBottom: '10px'
          }}>
            {date}
          </h3>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
            color: '#F5E4B0', padding: '10px 24px',
            borderRadius: '100px', border: '1.5px solid #C9A84C',
            fontFamily: 'var(--font-royal)', fontWeight: 700,
            fontSize: '1rem', letterSpacing: '0.04em',
            boxShadow: '0 4px 20px rgba(107,15,26,0.4)'
          }}>
            ⏰ Muhurtham: {muhurtham}
          </div>
          <p className="telugu" style={{
            fontSize: '1rem', color: '#9A6B20', fontWeight: 700, marginTop: '10px'
          }}>
            ధనుర్ లగ్న సుముహూర్తమున
          </p>
          <p style={{ fontSize: '0.88rem', color: '#5C3840', marginTop: '2px' }}>({lagna})</p>
        </div>

        {/* ── VENUE BOX ── */}
        <div style={{
          background: 'rgba(253,248,240,0.7)',
          border: '1px solid rgba(201,168,76,0.5)',
          borderRadius: '16px', padding: '18px 20px',
          marginBottom: '32px'
        }}>
          <p className="royal" style={{
            fontSize: '0.68rem', letterSpacing: '0.2em',
            color: '#A07830', textTransform: 'uppercase', marginBottom: '6px'
          }}>
            📍 Venue
          </p>
          <p className="telugu" style={{
            fontSize: '1rem', color: '#A07830', fontWeight: 700, marginBottom: '4px'
          }}>
            శ్రీ రామ గార్డెన్స్
          </p>
          <h4 className="royal" style={{
            fontSize: '1.15rem', color: '#200105', fontWeight: 800
          }}>
            {venue}
          </h4>
          <p style={{
            fontSize: '0.9rem', color: '#5C3840', marginTop: '4px', lineHeight: 1.5
          }}>
            {address}
          </p>
        </div>

        {/* ── BUTTONS ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <a
            href={config.invitation.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ display: 'flex' }}
          >
            📄 &nbsp;Open Full Invitation PDF
          </a>
          <a
            href={config.invitation.pdfPath}
            download={config.invitation.fileName}
            className="btn-secondary"
            style={{ display: 'flex' }}
          >
            ⬇️ &nbsp;Download Invitation
          </a>
          <button className="btn-secondary" onClick={onClose}>
            ← Return to Wedding Page
          </button>
        </div>

        {/* Bottom Telugu blessing */}
        <p className="telugu" style={{
          marginTop: '28px', fontSize: '0.82rem',
          color: '#A07830', opacity: 0.8, lineHeight: 1.6
        }}>
          మీ రాక మాకు మరింత ఆనందాన్ని ఇస్తుంది 🙏
        </p>
      </div>
    </div>
  );
}
