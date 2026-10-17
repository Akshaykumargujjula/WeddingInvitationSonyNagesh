import React, { useState } from 'react';
import { useReveal } from '../utils/useScrollReveal';
import { generateCalendarLinks } from '../utils/calendarHelper';

export function MuhurthamSection({ config }) {
  const { date, muhurtham, lagna, teluguDate, teluguLagna, timeline } = config.timing;
  const [calOpen, setCalOpen] = useState(false);
  const links = generateCalendarLinks(config);

  const [hRef, hVis] = useReveal();
  const [cardRef, cardVis] = useReveal();
  const [tlRef, tlVis] = useReveal();

  return (
    <section id="muhurtham" style={{ background: '#FAF5EB' }}>
      <div className="wrap">

        {/* Header */}
        <div ref={hRef} className={`section-header reveal ${hVis ? 'revealed' : ''}`}>
          <p className="section-tag">📿 శుభ ముహూర్తం</p>
          <h2 className="section-title">Auspicious Muhurtham</h2>
          <p className="section-sub">A sacred time consecrated for eternal harmony & blessings</p>
          <div className="divider"><div className="divider-diamond" /></div>
        </div>

        {/* Main Muhurtham Card — slides in from left */}
        <div
          ref={cardRef}
          className={`card reveal-left ${cardVis ? 'revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '28px', background: 'linear-gradient(145deg, #FDF8F0, #FAF1DC)' }}
        >
          <p className="telugu" style={{ fontSize: '1rem', color: '#7A1224', fontWeight: 700, marginBottom: '4px' }}>
            {teluguDate}
          </p>
          <h3 className="royal" style={{ fontSize: 'clamp(1.4rem, 5vw, 1.9rem)', color: '#200105', fontWeight: 700 }}>
            {date}
          </h3>

          {/* Big Muhurtham badge */}
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #6B0F1A, #3D0209)',
            color: '#FDF8F0', padding: '13px 30px',
            borderRadius: '100px', border: '1.5px solid #C9A84C',
            margin: '18px 0',
            boxShadow: '0 4px 20px rgba(107,15,26,0.4), 0 0 20px rgba(201,168,76,0.35)'
          }}>
            <span className="royal" style={{ fontSize: 'clamp(1.1rem, 4vw, 1.4rem)', fontWeight: 700, letterSpacing: '0.04em' }}>
              ⏰ Muhurtham: {muhurtham}
            </span>
          </div>

          <p className="telugu" style={{ fontSize: '1.1rem', color: '#A07830', fontWeight: 700 }}>
            {teluguLagna} ({lagna})
          </p>

          <p className="body-serif" style={{ fontSize: '1.05rem', color: '#5C2830', lineHeight: 1.55, margin: '14px auto', maxWidth: '480px' }}>
            Jeelakarra-Bellam Dharana, Mangalasutra Dharana, and sacred Talambralu
            solemnized in the auspicious Dhanur Lagnam.
          </p>

          {/* Add to Calendar */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              className="btn-secondary"
              style={{ width: 'auto', padding: '11px 22px' }}
              onClick={() => setCalOpen(o => !o)}
            >
              📅 Add to Calendar
            </button>

            {calOpen && (
              <div style={{
                position: 'absolute', top: '110%', left: '50%', transform: 'translateX(-50%)',
                background: '#FDF8F0', border: '1.5px solid #C9A84C',
                borderRadius: '14px', boxShadow: '0 12px 40px rgba(43,8,14,0.25)',
                padding: '8px', minWidth: '210px', zIndex: 50,
                display: 'flex', flexDirection: 'column', gap: '6px'
              }}>
                <a
                  href={links.googleCalendarUrl}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setCalOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 14px', borderRadius: '10px',
                    color: '#3D0209', textDecoration: 'none',
                    fontFamily: 'var(--font-royal)', fontSize: '0.85rem',
                    fontWeight: 700, background: 'rgba(245,228,176,0.3)'
                  }}
                >
                  🗓 Google Calendar
                </a>
                <button
                  onClick={() => { links.downloadIcs(); setCalOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    padding: '10px 14px', borderRadius: '10px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    fontFamily: 'var(--font-royal)', fontSize: '0.85rem',
                    fontWeight: 700, color: '#3D0209', textAlign: 'left'
                  }}
                >
                  📥 Apple / Outlook (.ics)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Timeline — slides in from right */}
        <div ref={tlRef} className={`card reveal-right ${tlVis ? 'revealed' : ''}`}>
          <h3 className="royal" style={{ fontSize: '1.2rem', color: '#3D0209', fontWeight: 700, textAlign: 'center', marginBottom: '24px' }}>
            Sacred Rituals & Events Timeline
          </h3>

          <div className="timeline">
            {config.timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                {/* Time */}
                <div className="timeline-left">
                  <span className="royal" style={{ fontSize: '0.85rem', fontWeight: 700, color: item.highlight ? '#6B0F1A' : '#A07830', display: 'block' }}>
                    {item.time}
                  </span>
                  <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                </div>

                {/* Dot + line */}
                <div className="timeline-center">
                  <div className={`timeline-dot ${item.highlight ? 'highlight' : ''}`} />
                  {i < config.timeline.length - 1 && <div className="timeline-line" />}
                </div>

                {/* Content */}
                <div className={item.highlight ? 'timeline-right highlight-box' : 'timeline-right'}>
                  <h4 className="royal" style={{ fontSize: '0.98rem', color: '#200105', fontWeight: 700 }}>
                    {item.title}
                  </h4>
                  {item.teluguTitle && (
                    <p className="telugu" style={{ fontSize: '0.84rem', color: '#A07830', fontWeight: 600, margin: '2px 0' }}>
                      {item.teluguTitle}
                    </p>
                  )}
                  <p className="body-serif" style={{ fontSize: '0.98rem', color: '#5C3840', lineHeight: 1.5, marginTop: '4px' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
