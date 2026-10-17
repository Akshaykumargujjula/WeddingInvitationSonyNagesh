import React from 'react';

// Welcome / Splash Screen shown before the main site
export function WelcomeScreen({ config, onEnter }) {
  const { bride, groom, monogram } = config.couple;
  const { date, muhurtham, lagna } = config.timing;

  return (
    <div className="welcome-screen">
      {/* Decorative top border strip */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '6px',
        background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'
      }} />

      <div className="welcome-card anim-pulse-gold">
        {/* Auspicious invocation */}
        <p className="anim-fade-down telugu" style={{
          fontSize: '0.88rem', color: '#A07830', fontWeight: 700,
          letterSpacing: '0.04em', marginBottom: '16px'
        }}>
          || శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||
        </p>

        {/* Decorative monogram circle */}
        <div className="anim-fade-down anim-delay-1" style={{
          display: 'flex', justifyContent: 'center', marginBottom: '12px'
        }}>
          <div style={{
            width: '70px', height: '70px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
            border: '2px solid #C9A84C',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 24px rgba(201,168,76,0.35)',
            fontFamily: 'var(--font-royal)', fontWeight: 700,
            fontSize: '1rem', color: '#F5E4B0'
          }}>
            {monogram}
          </div>
        </div>

        <p className="anim-fade-down anim-delay-1 royal" style={{
          fontSize: '0.72rem', letterSpacing: '0.18em', color: '#A07830',
          textTransform: 'uppercase', marginBottom: '6px'
        }}>
          Kalyana Mahotsava Patrika
        </p>

        {/* Couple Names */}
        <div className="anim-fade-down anim-delay-2" style={{ margin: '18px 0 14px' }}>
          <p className="telugu" style={{ fontSize: '0.88rem', color: '#7A1224', fontWeight: 600, marginBottom: '2px' }}>
            {bride.teluguName}
          </p>
          <h1 className="royal" style={{
            fontSize: 'clamp(1.85rem, 6.5vw, 2.5rem)',
            color: '#3D0209', fontWeight: 700, lineHeight: 1.15
          }}>
            {bride.firstName}
            <span className="script" style={{ fontSize: '1.6rem', color: '#A07830', marginLeft: '8px' }}>
              ({bride.nickname})
            </span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '10px 0' }}>
            <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.6 }} />
            <span className="script" style={{ fontSize: '2.2rem', color: '#A07830' }}>weds</span>
            <span style={{ flex: 1, height: '1px', background: 'var(--gold)', opacity: 0.6 }} />
          </div>

          <p className="telugu" style={{ fontSize: '0.88rem', color: '#7A1224', fontWeight: 600, marginBottom: '2px' }}>
            {groom.teluguName}
          </p>
          <h1 className="royal" style={{
            fontSize: 'clamp(1.85rem, 6.5vw, 2.5rem)',
            color: '#3D0209', fontWeight: 700, lineHeight: 1.15
          }}>
            {groom.firstName}
          </h1>
        </div>

        {/* Date + Time info box */}
        <div className="anim-fade-up anim-delay-3" style={{
          background: 'linear-gradient(135deg, rgba(245,228,176,0.5), rgba(201,168,76,0.15))',
          border: '1px solid rgba(201,168,76,0.5)',
          borderRadius: '14px', padding: '14px', margin: '16px 0 22px'
        }}>
          <p className="royal" style={{ fontSize: '1.02rem', color: '#3D0209', fontWeight: 700 }}>{date}</p>
          <p className="body-serif" style={{ fontSize: '1.05rem', color: '#6B0F1A', fontWeight: 600, marginTop: '4px' }}>
            Muhurtham: {muhurtham} · {lagna}
          </p>
          <p style={{ fontSize: '0.85rem', color: '#7A7266', marginTop: '4px' }}>
            📍 {config.venue.name}, {config.venue.shortAddress}
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onEnter}
          className="btn-primary anim-fade-up anim-delay-4"
          style={{ fontSize: '1rem', letterSpacing: '0.1em' }}
        >
          ✦ &nbsp;Open Invitation&nbsp; ✦
        </button>

        <p style={{ marginTop: '12px', fontSize: '0.78rem', color: '#9A8070' }}>
          🎵 Includes traditional wedding music
        </p>
      </div>

      {/* Bottom gold strip */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '6px',
        background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'
      }} />
    </div>
  );
}
