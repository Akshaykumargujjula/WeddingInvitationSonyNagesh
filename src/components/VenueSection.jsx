import React, { useState } from 'react';
import {
  MapPinIcon,
  DirectionIcon,
  OrnamentalDivider,
  CalendarIcon,
  ClockIcon,
  CheckIcon
} from './Icons';
import { useScrollReveal } from '../utils/useScrollReveal';

export const VenueSection = ({ config }) => {
  const [copied, setCopied] = useState(false);

  // Scroll reveal hooks for sideways entrance
  const [headerRef, headerRevealed] = useScrollReveal({ threshold: 0.1 });
  const [venueCardRef, venueCardRevealed] = useScrollReveal({ threshold: 0.15 });

  const handleCopyAddress = () => {
    const fullAddress = `${config.venue.name}, ${config.venue.address}`;
    navigator.clipboard.writeText(fullAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <section
      id="venue"
      style={{
        padding: '50px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header with Reveal */}
        <div
          ref={headerRef}
          className={`reveal-up ${headerRevealed ? 'is-revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <MapPinIcon className="w-6 h-6" color="var(--color-gold-700)" />
            <span
              className="font-telugu"
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-gold-900)',
                fontWeight: 700
              }}
            >
              కళ్యాణ వేదిక
            </span>
            <MapPinIcon className="w-6 h-6" color="var(--color-gold-700)" />
          </div>

          <h2
            className="font-royal"
            style={{
              fontSize: 'clamp(1.7rem, 5.5vw, 2.3rem)',
              color: 'var(--color-maroon-800)',
              fontWeight: 700
            }}
          >
            Wedding Venue
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              marginTop: '4px'
            }}
          >
            Join us in the sacred celebration at Nizamabad, Telangana
          </p>

          <div style={{ margin: '12px 0' }}>
            <OrnamentalDivider className="w-40 h-5" color="var(--color-gold-600)" />
          </div>
        </div>

        {/* Venue Information Card - Slides in from the LEFT */}
        <div
          ref={venueCardRef}
          className={`royal-card gold-shimmer-border reveal-left ${venueCardRevealed ? 'is-revealed' : ''}`}
          style={{
            padding: '36px 22px',
            marginBottom: '28px',
            position: 'relative',
            background: 'var(--gradient-card)',
            border: '2px solid var(--color-gold-600)',
            boxShadow: 'var(--shadow-lg), var(--shadow-gold)'
          }}
        >
          {/* Traditional Telugu venue subtitle */}
          <p
            className="font-telugu"
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-gold-900)',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '4px'
            }}
          >
            {config.venue.teluguName}
          </p>

          <h3
            className="font-royal"
            style={{
              fontSize: 'clamp(1.6rem, 5.5vw, 2.15rem)',
              color: 'var(--color-maroon-900)',
              fontWeight: 700,
              textAlign: 'center'
            }}
          >
            {config.venue.name}
          </h3>

          <p
            style={{
              textAlign: 'center',
              color: 'var(--color-text-main)',
              fontSize: '1.02rem',
              marginTop: '6px'
            }}
          >
            {config.venue.address}
          </p>

          {/* Quick Date & Muhurtham Summary in Venue */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              margin: '22px 0',
              padding: '14px',
              background: 'linear-gradient(135deg, rgba(253, 245, 222, 0.7), rgba(247, 229, 232, 0.4))',
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(212, 175, 55, 0.5)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CalendarIcon className="w-4 h-4" color="var(--color-maroon-700)" />
              <span
                className="font-royal"
                style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-maroon-800)' }}
              >
                {config.timing.date}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ClockIcon className="w-4 h-4" color="var(--color-maroon-700)" />
              <span
                className="font-royal"
                style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-maroon-800)' }}
              >
                Muhurtham: {config.timing.muhurtham} ({config.timing.lagna})
              </span>
            </div>
          </div>

          {/* Actions: Get Directions & Copy Address (Slides in from the RIGHT) */}
          <div
            className={`reveal-right delay-150 ${venueCardRevealed ? 'is-revealed' : ''}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              maxWidth: '380px',
              margin: '0 auto 26px'
            }}
          >
            {/* Functional Get Directions Button Linking to the Exact Google Maps URL */}
            <a
              href={config.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-royal-primary"
              style={{
                width: '100%',
                padding: '14px 24px',
                fontSize: '0.95rem'
              }}
              aria-label="Get Directions to Sri Rama Gardens on Google Maps"
            >
              <DirectionIcon className="w-5 h-5" color="var(--color-gold-300)" />
              Get Directions On Google Maps
            </a>

            <button
              onClick={handleCopyAddress}
              className="btn-royal-secondary"
              style={{
                width: '100%',
                padding: '12px 20px',
                fontSize: '0.9rem'
              }}
              aria-label="Copy Venue Address"
            >
              {copied ? (
                <>
                  <CheckIcon className="w-4 h-4" color="#2E6B34" />
                  Address Copied to Clipboard!
                </>
              ) : (
                <>
                  <MapPinIcon className="w-4 h-4" color="var(--color-gold-800)" />
                  Copy Venue Address
                </>
              )}
            </button>
          </div>

          {/* Interactive Google Maps Frame */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '2px solid var(--color-gold-500)',
              boxShadow: 'var(--shadow-md)',
              height: '250px',
              position: 'relative',
              background: '#EAE6DF'
            }}
          >
            <iframe
              title="Sri Rama Gardens Venue Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(config.venue.embedQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Venue Highlights & Amenities */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginTop: '26px'
            }}
          >
            {config.venue.facilities.map((fac, idx) => (
              <div
                key={idx}
                className={`reveal-up delay-${(idx + 1) * 100} ${venueCardRevealed ? 'is-revealed' : ''}`}
                style={{
                  background: 'rgba(255, 253, 249, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>
                  {fac.icon === 'car' ? '🚗' : fac.icon === 'utensils' ? '🍽️' : fac.icon === 'shield-check' ? '❄️' : '📍'}
                </span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-royal)',
                    color: 'var(--color-maroon-900)',
                    fontWeight: 700
                  }}
                >
                  {fac.label}
                </span>
              </div>
            ))}
          </div>

          <p
            style={{
              fontSize: '0.84rem',
              color: 'var(--color-text-muted)',
              textAlign: 'center',
              marginTop: '18px',
              lineHeight: 1.45
            }}
          >
            💡 {config.venue.landmarks}
          </p>
        </div>
      </div>
    </section>
  );
};
