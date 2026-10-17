import React, { useState, useEffect } from 'react';

export const Navbar = ({ config, onOpenInvitation, petalsEnabled, onTogglePetals }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const hasPreWedding = Boolean(config.preWeddingVideo?.videoUrl?.trim());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'muhurtham', 'venue'];
      if (hasPreWedding) sections.push('pre-wedding');

      const scrollPos = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasPreWedding]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255, 253, 249, 0.94)' : 'rgba(255, 253, 249, 0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(74, 14, 23, 0.08)' : 'none'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '62px'
        }}
      >
        {/* Monogram Brand */}
        <button
          onClick={() => scrollTo('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--gradient-maroon)',
              border: '1.5px solid var(--color-gold-500)',
              color: 'var(--color-gold-300)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-serif-royal)',
              fontWeight: 700,
              fontSize: '0.85rem'
            }}
          >
            {config.couple.monogram}
          </div>
          <span
            className="font-royal"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-maroon-800)',
              letterSpacing: '0.04em'
            }}
          >
            Sri Laxmi <span style={{ color: 'var(--color-gold-700)' }}>&</span> Nagesh
          </span>
        </button>

        {/* Quick Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => scrollTo('venue')}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-serif-royal)',
              fontWeight: 600,
              color: activeSection === 'venue' ? 'var(--color-maroon-700)' : 'var(--color-text-secondary)',
              cursor: 'pointer',
              padding: '6px 10px',
              borderRadius: 'var(--radius-pill)',
              transition: 'color 0.2s'
            }}
          >
            Venue
          </button>

          {hasPreWedding && (
            <button
              onClick={() => scrollTo('pre-wedding')}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-serif-royal)',
                fontWeight: 600,
                color: activeSection === 'pre-wedding' ? 'var(--color-maroon-700)' : 'var(--color-text-secondary)',
                cursor: 'pointer',
                padding: '6px 10px',
                borderRadius: 'var(--radius-pill)'
              }}
            >
              Moments
            </button>
          )}

          {/* Invitation Action Pill */}
          <button
            onClick={onOpenInvitation}
            className="btn-royal-primary"
            style={{
              padding: '7px 14px',
              fontSize: '0.78rem',
              minHeight: '34px',
              gap: '6px'
            }}
          >
            Invitation PDF
          </button>

          {/* Petals Toggle */}
          <button
            onClick={onTogglePetals}
            aria-label={petalsEnabled ? "Pause floating petals" : "Resume floating petals"}
            title={petalsEnabled ? "Pause Petal Shower" : "Enable Petal Shower"}
            style={{
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.35)',
              borderRadius: '50%',
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '0.9rem',
              transition: 'transform 0.2s',
              color: 'var(--color-maroon-700)'
            }}
          >
            {petalsEnabled ? '🌸' : '🍂'}
          </button>
        </nav>
      </div>
    </header>
  );
};
