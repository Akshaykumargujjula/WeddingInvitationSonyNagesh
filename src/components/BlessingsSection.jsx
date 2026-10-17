import React, { useState } from 'react';
import { useReveal } from '../utils/useScrollReveal';

export function BlessingsSection({ config, onReplayWelcome }) {
  const [shared, setShared] = useState(false);
  const [ref, vis] = useReveal();

  const handleShare = async () => {
    const data = {
      title: `${config.couple.bride.firstName} & ${config.couple.groom.firstName}'s Wedding`,
      text: `You are invited to the wedding of ${config.couple.bride.displayName} and ${config.couple.groom.displayName} on ${config.timing.date} at ${config.venue.name}, ${config.venue.shortAddress}.`,
      url: window.location.href
    };

    if (navigator.share) {
      try { await navigator.share(data); } catch (_) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 3000);
    }
  };

  return (
    <section style={{ background: '#FAF5EB' }}>
      <div className="wrap">
        <div ref={ref} className={`card reveal-right ${vis ? 'revealed' : ''}`} style={{ textAlign: 'center' }}>

          {/* Monogram emblem */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
              border: '2px solid #C9A84C',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 24px rgba(201,168,76,0.3)',
              fontFamily: 'var(--font-royal)', fontWeight: 700,
              fontSize: '1.1rem', color: '#F5E4B0'
            }}>
              {config.couple.monogram}
            </div>
          </div>

          {/* Telugu Shloka */}
          <p className="telugu" style={{
            fontSize: '1.05rem', color: '#A07830', fontWeight: 700,
            lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 10px'
          }}>
            {config.blessingMessage.shloka}
          </p>
          <p className="royal" style={{
            fontSize: '0.78rem', letterSpacing: '0.1em', color: '#7A1224',
            marginBottom: '18px', textTransform: 'uppercase'
          }}>
            ~ Sacred Mangala Shloka ~
          </p>

          <div className="divider"><div className="divider-diamond" /></div>

          {/* Quote */}
          <p className="body-serif" style={{
            fontSize: '1.2rem', color: '#3D0209',
            maxWidth: '500px', margin: '16px auto 18px',
            lineHeight: 1.65, fontStyle: 'italic'
          }}>
            "{config.blessingMessage.quote}"
          </p>

          <p className="royal" style={{ fontSize: '1rem', color: '#3D0209', fontWeight: 700 }}>
            With Love & Blessings,
          </p>
          <p className="body-serif" style={{ fontSize: '1.1rem', color: '#5C2830', marginTop: '4px' }}>
            {config.blessingMessage.familyNames}
          </p>

          {/* Share & Replay */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '28px' }}>
            <button className="btn-primary" onClick={handleShare}>
              {shared ? '✅ Link Copied!' : '🔗 Share With Family & Friends'}
            </button>
            <button className="btn-secondary" onClick={onReplayWelcome}>
              💌 Replay Welcome Invitation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
