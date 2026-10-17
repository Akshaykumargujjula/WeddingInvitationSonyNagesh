import React, { useState } from 'react';
import { useReveal } from '../utils/useScrollReveal';

export function VenueSection({ config }) {
  const { name, teluguName, address, shortAddress, googleMapsUrl, embedQuery, facilities, landmarks } = config.venue;
  const { date, muhurtham, lagna } = config.timing;
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(`${name}, ${address}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const [hRef, hVis] = useReveal();
  const [cardRef, cardVis] = useReveal();

  return (
    <section id="venue">
      <div className="wrap">

        {/* Header */}
        <div ref={hRef} className={`section-header reveal ${hVis ? 'revealed' : ''}`}>
          <p className="section-tag">📍 కళ్యాణ వేదిక</p>
          <h2 className="section-title">Wedding Venue</h2>
          <p className="section-sub">Join us in the sacred celebration at Nizamabad, Telangana</p>
          <div className="divider"><div className="divider-diamond" /></div>
        </div>

        {/* Venue Card — slides in from left */}
        <div ref={cardRef} className={`card reveal-left ${cardVis ? 'revealed' : ''}`}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <p className="telugu" style={{ fontSize: '1rem', color: '#A07830', fontWeight: 700, marginBottom: '4px' }}>
              {teluguName}
            </p>
            <h3 className="royal" style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', color: '#200105', fontWeight: 700 }}>
              {name}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#5C3840', marginTop: '4px' }}>{address}</p>
          </div>

          {/* Quick date/time strip */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center',
            background: 'rgba(245,228,176,0.3)', border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '14px', padding: '14px', marginBottom: '22px'
          }}>
            <span className="royal" style={{ fontSize: '0.88rem', color: '#3D0209', fontWeight: 700 }}>
              📅 {date}
            </span>
            <span style={{ color: '#C9A84C' }}>·</span>
            <span className="royal" style={{ fontSize: '0.88rem', color: '#3D0209', fontWeight: 700 }}>
              ⏰ {muhurtham} ({lagna})
            </span>
          </div>

          {/* Primary action: Get Directions (links to exact Google Maps URL) */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ marginBottom: '12px', display: 'flex' }}
          >
            🗺️&nbsp; Get Directions on Google Maps
          </a>

          {/* Secondary: Copy Address */}
          <button
            className="btn-secondary"
            onClick={copyAddress}
            style={{ marginBottom: '20px' }}
          >
            {copied ? '✅ Address Copied!' : '📋 Copy Venue Address'}
          </button>

          {/* Embedded Map */}
          <div className="map-frame">
            <iframe
              title="Sri Rama Gardens location on Google Maps"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(embedQuery)}&z=14&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Facility highlights */}
          <div className="facility-grid">
            {facilities.map((f, i) => (
              <div key={i} className="facility-item">
                <span style={{ fontSize: '1.3rem' }}>
                  {f.icon === 'car' ? '🚗' : f.icon === 'utensils' ? '🍽️' : f.icon === 'shield-check' ? '❄️' : '📍'}
                </span>
                <span className="royal" style={{ fontSize: '0.82rem', color: '#3D0209', fontWeight: 700 }}>
                  {f.label}
                </span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '0.82rem', color: '#8B6B70', textAlign: 'center', marginTop: '16px', lineHeight: 1.5 }}>
            💡 {landmarks}
          </p>
        </div>

      </div>
    </section>
  );
}
