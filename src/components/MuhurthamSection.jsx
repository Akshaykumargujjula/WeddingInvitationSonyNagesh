import React, { useState } from 'react';
import {
  KalashMotif,
  OrnamentalDivider,
  CalendarIcon,
  DownloadIcon,
  ExternalLinkIcon
} from './Icons';
import { generateCalendarLinks } from '../utils/calendarHelper';
import { useScrollReveal } from '../utils/useScrollReveal';

export const MuhurthamSection = ({ config }) => {
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);
  const calendarLinks = generateCalendarLinks(config);

  // Scroll reveal hooks for sideways entrance
  const [headerRef, headerRevealed] = useScrollReveal({ threshold: 0.1 });
  const [cardRef, cardRevealed] = useScrollReveal({ threshold: 0.15 });
  const [timelineRef, timelineRevealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="muhurtham"
      style={{
        padding: '50px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header with Fade In */}
        <div
          ref={headerRef}
          className={`reveal-up ${headerRevealed ? 'is-revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '32px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <KalashMotif className="w-6 h-6" color="var(--color-gold-700)" />
            <span
              className="font-telugu"
              style={{
                fontSize: '0.95rem',
                color: 'var(--color-gold-900)',
                fontWeight: 700
              }}
            >
              శుభ ముహూర్తం
            </span>
            <KalashMotif className="w-6 h-6" color="var(--color-gold-700)" />
          </div>

          <h2
            className="font-royal"
            style={{
              fontSize: 'clamp(1.7rem, 5.5vw, 2.3rem)',
              color: 'var(--color-maroon-800)',
              fontWeight: 700
            }}
          >
            Auspicious Muhurtham
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              marginTop: '4px'
            }}
          >
            A sacred time consecrated for eternal harmony, love, and divine blessings
          </p>

          <div style={{ margin: '12px 0' }}>
            <OrnamentalDivider className="w-40 h-5" color="var(--color-gold-600)" />
          </div>
        </div>

        {/* Highlighted Muhurtham Card - Slides in from the LEFT */}
        <div
          ref={cardRef}
          className={`royal-card gold-shimmer-border reveal-left ${cardRevealed ? 'is-revealed' : ''}`}
          style={{
            background: 'linear-gradient(145deg, #FFFDF9 0%, #FAF0DF 100%)',
            border: '2px solid var(--color-gold-600)',
            textAlign: 'center',
            padding: '36px 22px',
            marginBottom: '36px',
            boxShadow: 'var(--shadow-lg), var(--shadow-gold)'
          }}
        >
          <p
            className="font-telugu"
            style={{
              fontSize: '1.05rem',
              color: 'var(--color-maroon-700)',
              fontWeight: 700,
              marginBottom: '4px'
            }}
          >
            {config.timing.teluguDate}
          </p>

          <h3
            className="font-royal"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 1.95rem)',
              color: 'var(--color-maroon-900)',
              fontWeight: 700
            }}
          >
            {config.timing.date}
          </h3>

          <div
            style={{
              display: 'inline-block',
              background: 'var(--gradient-maroon)',
              color: '#FFFDF9',
              padding: '12px 28px',
              borderRadius: 'var(--radius-pill)',
              border: '1.5px solid var(--color-gold-400)',
              margin: '18px 0',
              boxShadow: '0 6px 20px rgba(94, 12, 26, 0.4), var(--shadow-gold)'
            }}
          >
            <span
              className="font-royal"
              style={{
                fontSize: 'clamp(1.15rem, 4vw, 1.45rem)',
                fontWeight: 700,
                letterSpacing: '0.04em'
              }}
            >
              Muhurtham: {config.timing.muhurtham}
            </span>
          </div>

          <p
            className="font-telugu"
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-gold-900)',
              fontWeight: 700
            }}
          >
            {config.timing.teluguLagna} ({config.timing.lagna})
          </p>

          <p
            className="font-body"
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-main)',
              maxWidth: '520px',
              margin: '12px auto 22px',
              lineHeight: 1.55
            }}
          >
            Jeelakarra-Bellam Dharana, Mangalasutra Dharana, and sacred Talambralu solemnized in the auspicious Dhanur Lagnam.
          </p>

          {/* Add To Calendar Button */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <button
              onClick={() => setShowCalendarMenu(!showCalendarMenu)}
              className="btn-royal-secondary"
              style={{
                padding: '12px 24px',
                fontSize: '0.9rem',
                minHeight: '44px'
              }}
              aria-label="Add wedding to calendar"
            >
              <CalendarIcon className="w-4 h-4" color="var(--color-gold-800)" />
              Add To Calendar
            </button>

            {showCalendarMenu && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '10px',
                  background: '#FFFDF9',
                  border: '1.5px solid var(--color-gold-500)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-royal)',
                  padding: '8px',
                  minWidth: '220px',
                  zIndex: 25,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <a
                  href={calendarLinks.googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowCalendarMenu(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-maroon-800)',
                    textDecoration: 'none',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-royal)',
                    fontWeight: 700,
                    background: 'var(--color-gold-50)'
                  }}
                >
                  <ExternalLinkIcon className="w-4 h-4" color="var(--color-gold-800)" />
                  Google Calendar
                </a>

                <button
                  onClick={() => {
                    calendarLinks.downloadIcs();
                    setShowCalendarMenu(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 12px',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-maroon-800)',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-royal)',
                    fontWeight: 700,
                    textAlign: 'left'
                  }}
                >
                  <DownloadIcon className="w-4 h-4" color="var(--color-gold-800)" />
                  Apple / Outlook (.ics)
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Wedding Timeline - Slides in from the RIGHT with Alternating Item Staggers */}
        <div
          ref={timelineRef}
          className={`royal-card reveal-right ${timelineRevealed ? 'is-revealed' : ''}`}
          style={{ padding: '32px 22px' }}
        >
          <h3
            className="font-royal"
            style={{
              fontSize: '1.25rem',
              color: 'var(--color-maroon-800)',
              textAlign: 'center',
              marginBottom: '26px',
              fontWeight: 700
            }}
          >
            Sacred Rituals & Events Timeline
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            {config.timeline.map((item, idx) => {
              // Alternating sideways reveal for each timeline item
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`reveal-${isEven ? 'left' : 'right'} delay-${(idx + 1) * 100} ${timelineRevealed ? 'is-revealed' : ''}`}
                  style={{
                    display: 'flex',
                    gap: '16px',
                    position: 'relative'
                  }}
                >
                  {/* Time Badge */}
                  <div style={{ minWidth: '85px', textAlign: 'right' }}>
                    <span
                      className="font-royal"
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: item.highlight ? 'var(--color-maroon-700)' : 'var(--color-gold-800)',
                        display: 'block'
                      }}
                    >
                      {item.time}
                    </span>
                    <span style={{ fontSize: '1rem', marginTop: '2px', display: 'block' }}>
                      {item.icon || '🌸'}
                    </span>
                  </div>

                  {/* Vertical Line & Dot */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '50%',
                        background: item.highlight ? 'var(--color-maroon-700)' : 'var(--color-gold-500)',
                        border: '2.5px solid #FFFDF9',
                        boxShadow: item.highlight ? '0 0 12px rgba(122, 18, 36, 0.6)' : 'none',
                        zIndex: 2
                      }}
                    />
                    {idx < config.timeline.length - 1 && (
                      <div
                        style={{
                          width: '2px',
                          flex: 1,
                          background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.6), rgba(122, 18, 36, 0.3))',
                          marginTop: '4px',
                          marginBottom: '4px'
                        }}
                      />
                    )}
                  </div>

                  {/* Event Details */}
                  <div
                    style={{
                      flex: 1,
                      background: item.highlight
                        ? 'linear-gradient(135deg, rgba(253, 245, 222, 0.9), rgba(247, 229, 232, 0.4))'
                        : 'rgba(255, 253, 249, 0.6)',
                      padding: item.highlight ? '14px 18px' : '0 0 14px',
                      borderRadius: item.highlight ? 'var(--radius-md)' : 0,
                      border: item.highlight ? '1.5px solid var(--color-gold-500)' : 'none',
                      boxShadow: item.highlight ? 'var(--shadow-sm)' : 'none'
                    }}
                  >
                    <h4
                      className="font-royal"
                      style={{
                        fontSize: '1.02rem',
                        color: 'var(--color-maroon-800)',
                        fontWeight: 700
                      }}
                    >
                      {item.title}
                    </h4>
                    {item.teluguTitle && (
                      <p
                        className="font-telugu"
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--color-gold-900)',
                          fontWeight: 700,
                          margin: '2px 0'
                        }}
                      >
                        {item.teluguTitle}
                      </p>
                    )}
                    <p
                      className="font-body"
                      style={{
                        fontSize: '1rem',
                        color: 'var(--color-text-muted)',
                        lineHeight: 1.5,
                        marginTop: '4px'
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
