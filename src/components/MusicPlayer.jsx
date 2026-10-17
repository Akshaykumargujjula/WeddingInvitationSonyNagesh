import React, { useState, useEffect, useRef } from 'react';

export function MusicPlayer({ trackUrl }) {
  const [playing, setPlaying] = useState(false);
  const [hint, setHint] = useState(true);
  const audioRef = useRef(null);

  // Show hint for first 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setHint(false), 5000);
    return () => clearTimeout(t);
  }, []);

  const toggle = async () => {
    setHint(false);

    if (!audioRef.current) {
      // Create audio element on first click (respects mobile autoplay policy)
      const audio = new Audio(trackUrl);
      audio.loop = true;
      audio.volume = 0.7;
      audioRef.current = audio;
      audio.addEventListener('pause', () => setPlaying(false));
      audio.addEventListener('play', () => setPlaying(true));
    }

    const audio = audioRef.current;
    if (playing) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (err) {
        console.warn('Audio play failed:', err);
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '18px', zIndex: 80, display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Hint tooltip */}
      {hint && !playing && (
        <div
          onClick={toggle}
          style={{
            background: '#3D0209', color: '#F5E4B0',
            padding: '7px 14px', borderRadius: '100px',
            border: '1px solid #C9A84C',
            fontSize: '0.8rem', fontFamily: 'var(--font-royal)',
            cursor: 'pointer', whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(43,8,14,0.4)',
            animation: 'fadeInDown 0.6s ease both'
          }}
        >
          🎵 Tap for Music
        </div>
      )}

      {/* Music FAB button */}
      <button
        onClick={toggle}
        className={`music-btn ${playing ? 'playing' : ''}`}
        aria-label={playing ? 'Pause music' : 'Play wedding music'}
        title={playing ? 'Pause Music' : 'Play Wedding Music'}
      >
        {playing ? (
          // Animated equalizer bars
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '20px' }}>
            {[14, 20, 11, 17].map((h, i) => (
              <span key={i} style={{
                width: '3px', borderRadius: '2px',
                background: '#E8CB7A',
                animation: `eqBar${i % 3 + 1} ${0.5 + i * 0.1}s ease-in-out infinite alternate`,
                height: `${h}px`
              }} />
            ))}
          </div>
        ) : (
          <span style={{ fontSize: '1.35rem' }}>🎵</span>
        )}

        {/* Play/Pause badge */}
        <span style={{
          position: 'absolute', bottom: '-2px', right: '-2px',
          width: '20px', height: '20px', borderRadius: '50%',
          background: '#200105', border: '1px solid #C9A84C',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.6rem', color: '#E8CB7A'
        }}>
          {playing ? '⏸' : '▶'}
        </span>
      </button>

      <style>{`
        @keyframes eqBar1 { 0%{height:6px} 100%{height:18px} }
        @keyframes eqBar2 { 0%{height:20px} 100%{height:8px} }
        @keyframes eqBar3 { 0%{height:10px} 100%{height:16px} }
      `}</style>
    </div>
  );
}
