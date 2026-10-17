import React, { useState, useEffect } from 'react';
import { useReveal } from '../utils/useScrollReveal';

export function HeroSection({ config, onOpenInvitation, onExploreVenue }) {
  const { bride, groom } = config.couple;
  const { date, muhurtham, lagna, targetDateTime } = config.timing;
  const { name: venueName, shortAddress } = config.venue;
  const hasPdf = config.invitation?.pdfPath && config.invitation.pdfPath !== '';

  // Countdown
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0, past: false });

  useEffect(() => {
    const target = new Date(targetDateTime).getTime();
    const tick = () => {
      const diff = target - Date.now();
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, mins: 0, secs: 0, past: true });
        return;
      }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
        past: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDateTime]);

  // Scroll reveals
  const [headerRef, headerVis] = useReveal();
  const [namesRef, namesVis] = useReveal();
  const [infoRef, infoVis] = useReveal();
  const [actionsRef, actionsVis] = useReveal();
  const [countdownRef, countdownVis] = useReveal();

  return (
    <section style={{ paddingTop: '80px', paddingBottom: '56px' }}>
      <div className="wrap">

        {/* ── Header Tag ── */}
        <div
          ref={headerRef}
          className={`reveal ${headerVis ? 'revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '28px' }}
        >
          <p className="telugu" style={{ color: '#A07830', fontWeight: 700, fontSize: '0.92rem', marginBottom: '6px' }}>
            || శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు ||
          </p>
          <p className="royal" style={{
            fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#8B6B70', marginTop: '4px'
          }}>
            Together with our families, we joyfully invite you to celebrate the wedding of
          </p>
        </div>

        {/* ── Main Card ── */}
        <div
          ref={namesRef}
          className={`card reveal ${namesVis ? 'revealed' : ''}`}
          style={{ textAlign: 'center', marginBottom: '24px', padding: '36px 24px' }}
        >
          {/* Bride */}
          <p className={`telugu delay-1 reveal ${namesVis ? 'revealed' : ''}`}
            style={{ fontSize: '0.9rem', color: '#7A1224', fontWeight: 600, marginBottom: '2px' }}>
            {bride.teluguName}
          </p>
          <h2 className={`royal delay-1 reveal ${namesVis ? 'revealed' : ''}`}
            style={{ fontSize: 'clamp(2rem, 7vw, 2.8rem)', color: '#3D0209', fontWeight: 700, lineHeight: 1.1 }}>
            {bride.firstName}
            <span className="script" style={{ fontSize: 'clamp(1.3rem, 4.5vw, 1.8rem)', color: '#A07830', marginLeft: '8px' }}>
              ({bride.nickname})
            </span>
          </h2>

          {/* weds */}
          <div className={`delay-2 reveal ${namesVis ? 'revealed' : ''}`}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', margin: '14px 0' }}>
            <span style={{ flex: 1, height: '1.5px', background: 'linear-gradient(90deg, transparent, #C9A84C)' }} />
            <span className="script" style={{ fontSize: '2.4rem', color: '#A07830' }}>weds</span>
            <span style={{ flex: 1, height: '1.5px', background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
          </div>

          {/* Groom */}
          <p className={`telugu delay-3 reveal ${namesVis ? 'revealed' : ''}`}
            style={{ fontSize: '0.9rem', color: '#7A1224', fontWeight: 600, marginBottom: '2px' }}>
            {groom.teluguName}
          </p>
          <h2 className={`royal delay-3 reveal ${namesVis ? 'revealed' : ''}`}
            style={{ fontSize: 'clamp(2rem, 7vw, 2.8rem)', color: '#3D0209', fontWeight: 700, lineHeight: 1.1 }}>
            {groom.firstName}
          </h2>
        </div>

        {/* ── Date & Venue Info Strip ── */}
        <div
          ref={infoRef}
          className={`reveal-left ${infoVis ? 'revealed' : ''}`}
          style={{
            background: 'linear-gradient(135deg, rgba(245,228,176,0.35), rgba(255,255,255,0.9))',
            border: '1.5px solid #C9A84C',
            borderRadius: '16px',
            padding: '18px 20px',
            marginBottom: '24px',
            textAlign: 'center'
          }}
        >
          <p className="royal" style={{ fontSize: '1.05rem', color: '#3D0209', fontWeight: 700 }}>
            📅 {date}
          </p>
          <p className="body-serif" style={{ fontSize: '1.12rem', color: '#6B0F1A', fontWeight: 600, marginTop: '4px' }}>
            ⏰ Muhurtham: {muhurtham} &nbsp;·&nbsp; {lagna}
          </p>
          <p style={{ fontSize: '0.9rem', color: '#7A7266', marginTop: '6px' }}>
            📍 {venueName}, {shortAddress}
          </p>
        </div>

        {/* ── Two Prominent Action Buttons ── */}
        <div
          ref={actionsRef}
          style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}
        >
          <button
            className={`btn-primary reveal-left ${actionsVis ? 'revealed' : ''}`}
            onClick={onExploreVenue}
          >
            📍&nbsp; Explore Wedding Venue
          </button>
          {hasPdf && (
            <button
              className={`btn-secondary reveal-right delay-1 ${actionsVis ? 'revealed' : ''}`}
              onClick={onOpenInvitation}
            >
              📜&nbsp; View Wedding Invitation
            </button>
          )}
        </div>

        {/* ── Countdown Timer ── */}
        <div ref={countdownRef} className={`reveal ${countdownVis ? 'revealed' : ''}`} style={{ textAlign: 'center' }}>
          <p className="royal" style={{
            fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#A07830', marginBottom: '14px'
          }}>
            {time.past ? '✨ Celebrating the Sacred Union ✨' : '⏳ Auspicious Muhurtham Countdown'}
          </p>
          <div className="countdown-grid">
            {[
              { label: 'Days',  val: time.days },
              { label: 'Hours', val: time.hours },
              { label: 'Mins',  val: time.mins },
              { label: 'Secs',  val: time.secs },
            ].map(({ label, val }) => (
              <div key={label} className="countdown-unit">
                <span className="countdown-num">{String(val).padStart(2, '0')}</span>
                <span className="countdown-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
