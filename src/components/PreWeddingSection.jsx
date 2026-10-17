import React from 'react';
import { VideoIcon, OrnamentalDivider, HeartIcon } from './Icons';
import { useScrollReveal } from '../utils/useScrollReveal';

export const PreWeddingSection = ({ config }) => {
  const videoUrl = config?.preWeddingVideo?.videoUrl?.trim();
  const [videoRef, videoRevealed] = useScrollReveal({ threshold: 0.15 });

  // If videoUrl is initially empty, keep this section completely hidden!
  if (!videoUrl) return null;

  const getEmbedSource = (url) => {
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
      return { type: 'iframe', src: `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&modestbranding=1` };
    }
    const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
      return { type: 'iframe', src: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
    }
    return { type: 'video', src: url };
  };

  const embedInfo = getEmbedSource(videoUrl);

  return (
    <section
      id="pre-wedding"
      style={{
        padding: '50px 0',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <HeartIcon className="w-5 h-5" color="var(--color-maroon-700)" fill="var(--color-maroon-700)" />
            <span
              className="font-royal"
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-gold-900)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Love & Togetherness
            </span>
            <HeartIcon className="w-5 h-5" color="var(--color-maroon-700)" fill="var(--color-maroon-700)" />
          </div>

          <h2
            className="font-royal"
            style={{
              fontSize: 'clamp(1.7rem, 5.5vw, 2.3rem)',
              color: 'var(--color-maroon-800)',
              fontWeight: 700
            }}
          >
            {config.preWeddingVideo.title || "Our Pre-Wedding Moments"}
          </h2>

          <p
            className="font-body"
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-muted)',
              marginTop: '4px'
            }}
          >
            {config.preWeddingVideo.subtitle || "A glimpse into our journey of love & celebration"}
          </p>

          <div style={{ margin: '12px 0' }}>
            <OrnamentalDivider className="w-40 h-5" color="var(--color-gold-600)" />
          </div>
        </div>

        {/* Video Card - Slides in from the LEFT */}
        <div
          ref={videoRef}
          className={`royal-card gold-shimmer-border reveal-left ${videoRevealed ? 'is-revealed' : ''}`}
          style={{
            padding: '16px',
            border: '2px solid var(--color-gold-600)',
            borderRadius: '24px',
            maxWidth: '680px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-lg), var(--shadow-gold)'
          }}
        >
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: 'var(--radius-md)',
              background: '#000'
            }}
          >
            {embedInfo.type === 'iframe' ? (
              <iframe
                src={embedInfo.src}
                title="Pre Wedding Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
              />
            ) : (
              <video
                controls
                src={embedInfo.src}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%'
                }}
              >
                Your browser does not support playing this video.
              </video>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
