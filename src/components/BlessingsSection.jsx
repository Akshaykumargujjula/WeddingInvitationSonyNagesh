import React, { useState } from 'react';
import {
  GaneshaMotif,
  OrnamentalDivider,
  ShareIcon,
  CheckIcon
} from './Icons';
import { useScrollReveal } from '../utils/useScrollReveal';

export const BlessingsSection = ({ config, onReopenCurtain }) => {
  const [shared, setShared] = useState(false);
  const [blessingsRef, blessingsRevealed] = useScrollReveal({ threshold: 0.15 });

  const handleShare = async () => {
    const shareData = {
      title: `${config.couple.bride.firstName} & ${config.couple.groom.firstName}'s Wedding Invitation`,
      text: `You are cordially invited to celebrate the marriage of ${config.couple.bride.displayName} and ${config.couple.groom.displayName} on ${config.timing.date} at ${config.venue.name}, ${config.venue.shortAddress}. Subha Muhurtham: ${config.timing.muhurtham} (${config.timing.lagna}).`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        setShared(true);
        setTimeout(() => setShared(false), 3000);
      });
    }
  };

  return (
    <section
      style={{
        padding: '50px 0 30px',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Blessings Card - Slides in from the RIGHT with Gold Shimmer */}
        <div
          ref={blessingsRef}
          className={`royal-card gold-shimmer-border reveal-right ${blessingsRevealed ? 'is-revealed' : ''}`}
          style={{
            textAlign: 'center',
            padding: '40px 22px',
            background: 'var(--gradient-card)',
            border: '2px solid var(--color-gold-600)',
            position: 'relative',
            boxShadow: 'var(--shadow-lg), var(--shadow-gold)'
          }}
        >
          {/* Lord Ganesha blessing emblem */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(212, 175, 55, 0.12)',
                border: '1.5px solid var(--color-gold-500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <GaneshaMotif className="w-10 h-10" color="var(--color-maroon-700)" />
            </div>
          </div>

          <h3
            className="font-telugu"
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-gold-900)',
              fontWeight: 700,
              maxWidth: '560px',
              margin: '0 auto 8px',
              lineHeight: 1.65
            }}
          >
            {config.blessingMessage.shloka}
          </h3>

          <p
            className="font-royal"
            style={{
              fontSize: '0.82rem',
              color: 'var(--color-maroon-600)',
              letterSpacing: '0.08em',
              marginBottom: '16px',
              fontWeight: 600
            }}
          >
            ~ Sacred Mangala Shloka ~
          </p>

          <div style={{ margin: '14px 0' }}>
            <OrnamentalDivider className="w-40 h-5" color="var(--color-gold-600)" />
          </div>

          <p
            className="font-body"
            style={{
              fontSize: '1.2rem',
              color: 'var(--color-text-main)',
              maxWidth: '520px',
              margin: '0 auto 20px',
              lineHeight: 1.6,
              fontStyle: 'italic'
            }}
          >
            "{config.blessingMessage.quote}"
          </p>

          <p
            className="font-royal"
            style={{
              fontSize: '1rem',
              color: 'var(--color-maroon-800)',
              fontWeight: 700,
              letterSpacing: '0.05em'
            }}
          >
            With Love & Blessings,
          </p>
          <p
            className="font-body"
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-muted)',
              fontWeight: 700,
              marginTop: '4px'
            }}
          >
            {config.blessingMessage.familyNames}
          </p>

          {/* Social Share & Replay Envelope Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '28px'
            }}
          >
            <button
              onClick={handleShare}
              className="btn-royal-primary"
              style={{
                padding: '12px 24px',
                fontSize: '0.9rem'
              }}
              aria-label="Share Wedding Invitation"
            >
              {shared ? (
                <>
                  <CheckIcon className="w-4 h-4" color="#FFFDF9" />
                  Link Copied!
                </>
              ) : (
                <>
                  <ShareIcon className="w-4 h-4" color="var(--color-gold-300)" />
                  Share With Family & Friends
                </>
              )}
            </button>

            <button
              onClick={onReopenCurtain}
              className="btn-royal-secondary"
              style={{
                padding: '12px 22px',
                fontSize: '0.9rem'
              }}
              aria-label="View Opening Envelope Again"
            >
              <span>💌</span> Replay Royal Envelope
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
