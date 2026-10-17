import React, { useState, useEffect } from 'react';
import { audioManager } from '../utils/audioHelper';
import { PlayIcon, PauseIcon, MusicNoteIcon } from './Icons';

export const MusicPlayer = ({ trackUrl, trackTitle = "Auspicious Nadaswaram Melody" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Listen to global audio state
    const unsubscribe = audioManager.subscribe((playing) => {
      setIsPlaying(playing);
    });

    // Show initial subtle hint to encourage music play
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(hideTimer);
    }, 2000);

    return () => {
      unsubscribe();
      clearTimeout(timer);
    };
  }, []);

  const handleToggle = () => {
    audioManager.toggle(trackUrl);
    setShowTooltip(false);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {/* Interactive Tooltip Hint */}
      {showTooltip && !isPlaying && (
        <div
          onClick={handleToggle}
          style={{
            background: 'var(--color-maroon-800)',
            color: 'var(--color-gold-200)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--color-gold-600)',
            fontSize: '0.8rem',
            fontFamily: 'var(--font-serif-royal)',
            boxShadow: 'var(--shadow-md)',
            whiteSpace: 'nowrap',
            cursor: 'pointer',
            animation: 'gentleFloat 3s ease-in-out infinite'
          }}
        >
          🎵 Tap for Wedding Music
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? "Pause Wedding Music" : "Play Wedding Music"}
        title={isPlaying ? `Pause ${trackTitle}` : `Play ${trackTitle}`}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: isPlaying ? 'var(--gradient-maroon)' : 'var(--gradient-card)',
          border: '1.5px solid var(--color-gold-600)',
          boxShadow: isPlaying ? '0 0 20px rgba(212, 175, 55, 0.55), var(--shadow-royal)' : 'var(--shadow-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: isPlaying ? 'var(--color-gold-400)' : 'var(--color-maroon-700)',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          outline: 'none',
          padding: 0
        }}
      >
        {/* Equalizer animation when playing */}
        {isPlaying ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '18px' }}>
            <span
              style={{
                width: '3px',
                height: '14px',
                background: 'var(--color-gold-400)',
                borderRadius: '2px',
                animation: 'eqBar1 0.8s ease-in-out infinite alternate'
              }}
            />
            <span
              style={{
                width: '3px',
                height: '18px',
                background: 'var(--color-gold-400)',
                borderRadius: '2px',
                animation: 'eqBar2 0.6s ease-in-out infinite alternate'
              }}
            />
            <span
              style={{
                width: '3px',
                height: '10px',
                background: 'var(--color-gold-400)',
                borderRadius: '2px',
                animation: 'eqBar3 0.7s ease-in-out infinite alternate'
              }}
            />
          </div>
        ) : (
          <MusicNoteIcon className="w-6 h-6" color="var(--color-maroon-700)" />
        )}

        {/* Small play/pause badge icon in bottom right */}
        <span
          style={{
            position: 'absolute',
            bottom: '-2px',
            right: '-2px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'var(--color-maroon-900)',
            border: '1px solid var(--color-gold-500)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-gold-400)'
          }}
        >
          {isPlaying ? (
            <PauseIcon className="w-2.5 h-2.5" color="var(--color-gold-400)" />
          ) : (
            <PlayIcon className="w-2.5 h-2.5" color="var(--color-gold-400)" />
          )}
        </span>
      </button>

      {/* Mini Equalizer Keyframe Styles */}
      <style>{`
        @keyframes eqBar1 {
          0% { height: 6px; }
          100% { height: 16px; }
        }
        @keyframes eqBar2 {
          0% { height: 18px; }
          100% { height: 8px; }
        }
        @keyframes eqBar3 {
          0% { height: 8px; }
          100% { height: 15px; }
        }
      `}</style>
    </div>
  );
};
