import React, { useState } from 'react';
import { GaneshaMotif, KalashMotif, ToranamGarland, HeartIcon } from './Icons';
import { audioManager } from '../utils/audioHelper';

export const OpeningCurtain = ({ config, onOpen, isOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    // Start music on user interaction (safely complies with mobile browser autoplay policies)
    audioManager.play(config.audio.trackUrl);

    // Allow the envelope unfolding animation to complete before hiding
    setTimeout(() => {
      onOpen();
    }, 750);
  };

  if (isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        background: 'radial-gradient(circle at center, #550715 0%, #36050C 70%, #1D0206 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        opacity: isOpening ? 0 : 1,
        transform: isOpening ? 'scale(1.04)' : 'scale(1)',
        transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: isOpening ? 'none' : 'auto'
      }}
    >
      {/* Traditional Marigold Toranam at top */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 2 }}>
        <ToranamGarland className="w-full h-8" color="var(--color-gold-400)" />
      </div>

      {/* Royal Card / Envelope Outer Frame */}
      <div
        className="royal-card animate-gold-pulse"
        style={{
          width: '100%',
          maxWidth: '440px',
          background: 'var(--gradient-card)',
          borderRadius: '24px',
          padding: '32px 24px',
          textAlign: 'center',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.65), 0 0 32px rgba(212, 175, 55, 0.35)',
          border: '2px solid var(--color-gold-500)',
          position: 'relative'
        }}
      >
        {/* Sacred Auspicious Heading */}
        <div style={{ marginBottom: '14px' }}>
          <GaneshaMotif className="w-12 h-12" color="var(--color-maroon-700)" />
          <p
            className="font-telugu"
            style={{
              fontSize: '0.85rem',
              color: 'var(--color-gold-800)',
              fontWeight: 600,
              letterSpacing: '0.04em',
              marginTop: '6px'
            }}
          >
            శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
          </p>
        </div>

        {/* Small Traditional Kalash Motif */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
          <KalashMotif className="w-8 h-8" color="var(--color-gold-700)" />
        </div>

        <p
          className="font-royal"
          style={{
            fontSize: '0.75rem',
            color: 'var(--color-maroon-600)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: 700
          }}
        >
          Kalyana Patrika • Wedding Invitation
        </p>

        {/* Bride & Groom Grand Names */}
        <div style={{ margin: '20px 0 16px' }}>
          <h1
            className="font-royal"
            style={{
              fontSize: 'clamp(1.75rem, 6vw, 2.2rem)',
              color: 'var(--color-maroon-800)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            {config.couple.bride.firstName}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              margin: '8px 0'
            }}
          >
            <span style={{ width: '40px', height: '1px', background: 'var(--color-gold-600)' }} />
            <span
              className="font-script"
              style={{
                fontSize: '1.8rem',
                color: 'var(--color-gold-700)',
                lineHeight: 1
              }}
            >
              weds
            </span>
            <span style={{ width: '40px', height: '1px', background: 'var(--color-gold-600)' }} />
          </div>

          <h1
            className="font-royal"
            style={{
              fontSize: 'clamp(1.75rem, 6vw, 2.2rem)',
              color: 'var(--color-maroon-800)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            {config.couple.groom.firstName}
          </h1>
        </div>

        {/* Wedding Date & Muhurtham Badge */}
        <div
          style={{
            background: 'rgba(212, 175, 55, 0.1)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            margin: '16px 0 24px'
          }}
        >
          <p
            className="font-royal"
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-maroon-800)',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
          >
            {config.timing.date}
          </p>
          <p
            className="font-body"
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-gold-900)',
              fontWeight: 600,
              marginTop: '4px'
            }}
          >
            Subha Muhurtham: {config.timing.muhurtham} ({config.timing.lagna})
          </p>
        </div>

        {/* Golden Wax Seal Opening Action */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button
            onClick={handleOpenInvitation}
            className="btn-royal-primary"
            style={{
              width: '100%',
              maxWidth: '300px',
              padding: '15px 24px',
              fontSize: '0.95rem',
              gap: '10px'
            }}
            aria-label="Open Wedding Invitation"
          >
            <span
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'var(--color-gold-400)',
                color: 'var(--color-maroon-900)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '0.75rem'
              }}
            >
              {config.couple.monogram}
            </span>
            Open Royal Invitation
          </button>

          <p
            style={{
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              marginTop: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>🎵</span> Includes auspicious traditional music
          </p>
        </div>
      </div>
    </div>
  );
};
