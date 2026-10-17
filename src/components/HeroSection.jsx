import React, { useState, useEffect } from 'react';
import {
  GaneshaMotif,
  KalashMotif,
  MandalaCorner,
  OrnamentalDivider,
  MapPinIcon,
  CalendarIcon,
  ClockIcon
} from './Icons';
import { useScrollReveal } from '../utils/useScrollReveal';

export const HeroSection = ({ config, onOpenInvitation, onExploreVenue }) => {
  // Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  // Scroll animations for different elements
  const [heroCardRef, heroCardRevealed] = useScrollReveal({ threshold: 0.1 });
  const [actionsRef, actionsRevealed] = useScrollReveal({ threshold: 0.1 });
  const [countdownRef, countdownRevealed] = useScrollReveal({ threshold: 0.1 });

  useEffect(() => {
    const targetDate = new Date(config.timing.targetDateTime).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsPast(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [config.timing.targetDateTime]);

  return (
    <section
      id="home"
      style={{
        paddingTop: '88px',
        paddingBottom: '48px',
        position: 'relative',
        textAlign: 'center'
      }}
    >
      <div className="container">
        {/* Main Royal Card with Sideways Reveal */}
        <div
          ref={heroCardRef}
          className={`royal-card gold-shimmer-border reveal-scale ${heroCardRevealed ? 'is-revealed' : ''}`}
          style={{
            padding: '40px 22px',
            position: 'relative',
            background: 'var(--gradient-card)',
            border: '2px solid var(--color-gold-600)',
            boxShadow: 'var(--shadow-lg), var(--shadow-gold)'
          }}
        >
          {/* Ornamental Mandala Corners */}
          <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
            <MandalaCorner className="w-10 h-10" color="var(--color-gold-600)" rotate={0} />
          </div>
          <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
            <MandalaCorner className="w-10 h-10" color="var(--color-gold-600)" rotate={90} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
            <MandalaCorner className="w-10 h-10" color="var(--color-gold-600)" rotate={180} />
          </div>
          <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
            <MandalaCorner className="w-10 h-10" color="var(--color-gold-600)" rotate={270} />
          </div>

          {/* Auspicious Shloka & Lord Ganesha Lineage */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
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

            <p
              className="font-telugu"
              style={{
                fontSize: '0.92rem',
                color: 'var(--color-gold-900)',
                fontWeight: 700,
                marginTop: '10px',
                letterSpacing: '0.04em'
              }}
            >
              || శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||
            </p>
          </div>

          <div style={{ margin: '14px 0 8px' }}>
            <OrnamentalDivider className="w-48 h-6" color="var(--color-gold-600)" />
          </div>

          <p
            className="font-royal"
            style={{
              fontSize: '0.82rem',
              color: 'var(--color-text-muted)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginTop: '4px'
            }}
          >
            We Cordially Solicit Your Gracious Presence At The Marriage Of
          </p>

          {/* Couple Names Section with Alternating Sideways Visual Flourish */}
          <div style={{ margin: '26px 0 20px' }}>
            {/* Bride */}
            <div style={{ marginBottom: '6px' }}>
              <p
                className="font-telugu"
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-maroon-600)',
                  fontWeight: 600,
                  marginBottom: '2px'
                }}
              >
                {config.couple.bride.teluguName}
              </p>
              <h2
                className="font-royal"
                style={{
                  fontSize: 'clamp(2rem, 7.5vw, 2.85rem)',
                  fontWeight: 700,
                  color: 'var(--color-maroon-800)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.15
                }}
              >
                {config.couple.bride.firstName}
                <span
                  style={{
                    fontSize: 'clamp(1.2rem, 4.5vw, 1.6rem)',
                    color: 'var(--color-gold-700)',
                    fontFamily: 'var(--font-script)',
                    marginLeft: '8px'
                  }}
                >
                  ({config.couple.bride.nickname})
                </span>
              </h2>
            </div>

            {/* weds */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                margin: '12px 0'
              }}
            >
              <span style={{ width: '48px', height: '1.5px', background: 'var(--color-gold-600)' }} />
              <span
                className="font-script"
                style={{
                  fontSize: '2.4rem',
                  color: 'var(--color-gold-700)',
                  lineHeight: 1
                }}
              >
                weds
              </span>
              <span style={{ width: '48px', height: '1.5px', background: 'var(--color-gold-600)' }} />
            </div>

            {/* Groom */}
            <div>
              <p
                className="font-telugu"
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-maroon-600)',
                  fontWeight: 600,
                  marginBottom: '2px'
                }}
              >
                {config.couple.groom.teluguName}
              </p>
              <h2
                className="font-royal"
                style={{
                  fontSize: 'clamp(2rem, 7.5vw, 2.85rem)',
                  fontWeight: 700,
                  color: 'var(--color-maroon-800)',
                  letterSpacing: '0.04em',
                  lineHeight: 1.15
                }}
              >
                {config.couple.groom.firstName}
              </h2>
            </div>
          </div>

          {/* Auspicious Muhurtham & Venue Badge */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(253, 251, 244, 0.98), rgba(247, 231, 180, 0.5))',
              border: '1.5px solid var(--color-gold-600)',
              borderRadius: 'var(--radius-md)',
              padding: '18px 16px',
              margin: '22px auto 28px',
              maxWidth: '480px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: 'var(--color-maroon-800)',
                marginBottom: '6px'
              }}
            >
              <CalendarIcon className="w-5 h-5" color="var(--color-gold-800)" />
              <span
                className="font-royal"
                style={{
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}
              >
                {config.timing.date}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: 'var(--color-maroon-700)',
                fontSize: '1.1rem'
              }}
            >
              <ClockIcon className="w-5 h-5" color="var(--color-gold-800)" />
              <span className="font-body" style={{ fontWeight: 700 }}>
                Muhurtham: {config.timing.muhurtham} ({config.timing.lagna})
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                color: 'var(--color-text-muted)',
                fontSize: '0.88rem',
                marginTop: '8px'
              }}
            >
              <MapPinIcon className="w-4 h-4" color="var(--color-gold-800)" />
              <span>{config.venue.name}, {config.venue.shortAddress}</span>
            </div>
          </div>

          {/* Two Prominent Actions (Coming from Left and Right) */}
          <div
            ref={actionsRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              maxWidth: '420px',
              margin: '0 auto'
            }}
          >
            {/* Button 1: Slides in from the LEFT */}
            <div className={`reveal-left ${actionsRevealed ? 'is-revealed' : ''}`}>
              <button
                onClick={onExploreVenue}
                className="btn-royal-primary"
                style={{ width: '100%' }}
                aria-label="Explore Wedding Venue"
              >
                <MapPinIcon className="w-5 h-5" color="var(--color-gold-300)" />
                Explore Wedding Venue
              </button>
            </div>

            {/* Button 2: Slides in from the RIGHT */}
            <div className={`reveal-right delay-150 ${actionsRevealed ? 'is-revealed' : ''}`}>
              <button
                onClick={onOpenInvitation}
                className="btn-royal-secondary"
                style={{ width: '100%' }}
                aria-label="View Wedding Invitation"
              >
                <KalashMotif className="w-5 h-5" color="var(--color-gold-700)" />
                View Wedding Invitation
              </button>
            </div>
          </div>

          {/* Live Countdown Timer with Sideways Reveal */}
          <div
            ref={countdownRef}
            className={`reveal-up delay-200 ${countdownRevealed ? 'is-revealed' : ''}`}
            style={{ marginTop: '38px' }}
          >
            <p
              className="font-royal"
              style={{
                fontSize: '0.78rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-maroon-700)',
                fontWeight: 700,
                marginBottom: '14px'
              }}
            >
              {isPast ? "Celebrating the Auspicious Union" : "Auspicious Muhurtham Countdown"}
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '10px',
                maxWidth: '380px',
                margin: '0 auto'
              }}
            >
              {[
                { label: 'Days', value: timeLeft.days, direction: 'reveal-left' },
                { label: 'Hours', value: timeLeft.hours, direction: 'reveal-left' },
                { label: 'Mins', value: timeLeft.minutes, direction: 'reveal-right' },
                { label: 'Secs', value: timeLeft.seconds, direction: 'reveal-right' }
              ].map((unit, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--gradient-card-dark)',
                    border: '1.5px solid var(--color-gold-500)',
                    borderRadius: 'var(--radius-md)',
                    padding: '12px 4px',
                    boxShadow: 'var(--shadow-md), var(--shadow-gold)'
                  }}
                >
                  <span
                    className="font-royal"
                    style={{
                      display: 'block',
                      fontSize: 'clamp(1.3rem, 4.5vw, 1.75rem)',
                      fontWeight: 700,
                      color: 'var(--color-gold-300)',
                      lineHeight: 1
                    }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span
                    style={{
                      display: 'block',
                      fontSize: '0.65rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-gold-200)',
                      marginTop: '6px',
                      fontWeight: 600,
                      opacity: 0.85
                    }}
                  >
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
