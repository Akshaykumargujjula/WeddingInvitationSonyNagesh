import React, { useEffect } from 'react';
import {
  CloseIcon,
  DownloadIcon,
  ExternalLinkIcon,
  GaneshaMotif,
  KalashMotif,
  OrnamentalDivider,
  ArrowLeftIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon
} from './Icons';

export const InvitationModal = ({ isOpen, onClose, config }) => {
  // Prevent body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Wedding Invitation Modal"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 90,
        background: 'rgba(30, 4, 8, 0.88)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflowY: 'auto',
        padding: '16px 12px 32px'
      }}
    >
      {/* Sticky Top Header Bar with Back-to-Home Action */}
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 16px',
          background: 'rgba(255, 253, 249, 0.96)',
          borderRadius: 'var(--radius-pill)',
          border: '1.5px solid var(--color-gold-500)',
          boxShadow: 'var(--shadow-royal)',
          marginBottom: '16px',
          position: 'sticky',
          top: '12px',
          zIndex: 10
        }}
      >
        {/* Back to Home Button */}
        <button
          onClick={onClose}
          className="btn-royal-secondary"
          style={{
            padding: '8px 16px',
            fontSize: '0.82rem',
            minHeight: '36px',
            gap: '6px'
          }}
          aria-label="Back to Wedding Home"
        >
          <ArrowLeftIcon className="w-4 h-4" color="var(--color-maroon-700)" />
          Back to Home
        </button>

        <span
          className="font-royal"
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            color: 'var(--color-maroon-800)',
            letterSpacing: '0.04em'
          }}
        >
          Official Patrika
        </span>

        {/* Close Icon Button */}
        <button
          onClick={onClose}
          aria-label="Close Invitation Modal"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--color-maroon-800)',
            cursor: 'pointer',
            padding: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <CloseIcon className="w-6 h-6" color="var(--color-maroon-800)" />
        </button>
      </div>

      {/* Main Invitation Document Container */}
      <div
        className="royal-card"
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#FFFDF9',
          border: '2px solid var(--color-gold-600)',
          borderRadius: '24px',
          padding: '36px 20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        {/* Sacred Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <GaneshaMotif className="w-14 h-14" color="var(--color-maroon-700)" />
          <p
            className="font-telugu"
            style={{
              fontSize: '0.95rem',
              color: 'var(--color-gold-900)',
              fontWeight: 600,
              marginTop: '8px',
              letterSpacing: '0.04em'
            }}
          >
            శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు
          </p>
        </div>

        <div style={{ margin: '14px 0 18px' }}>
          <OrnamentalDivider className="w-48 h-6" color="var(--color-gold-500)" />
        </div>

        <p
          className="font-royal"
          style={{
            fontSize: '0.82rem',
            color: 'var(--color-maroon-600)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontWeight: 700
          }}
        >
          Kalyana Mahotsava Patrika
        </p>

        {/* Couple Names */}
        <div style={{ margin: '20px 0' }}>
          <p
            className="font-telugu"
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-gold-900)',
              fontWeight: 600,
              marginBottom: '4px'
            }}
          >
            {config.couple.bride.teluguName}
          </p>
          <h2
            className="font-royal"
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
              color: 'var(--color-maroon-800)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            {config.couple.bride.firstName}
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              margin: '10px 0'
            }}
          >
            <span style={{ width: '40px', height: '1px', background: 'var(--color-gold-500)' }} />
            <span className="font-script" style={{ fontSize: '2rem', color: 'var(--color-gold-700)' }}>
              weds
            </span>
            <span style={{ width: '40px', height: '1px', background: 'var(--color-gold-500)' }} />
          </div>

          <p
            className="font-telugu"
            style={{
              fontSize: '0.9rem',
              color: 'var(--color-gold-900)',
              fontWeight: 600,
              marginBottom: '4px'
            }}
          >
            {config.couple.groom.teluguName}
          </p>
          <h2
            className="font-royal"
            style={{
              fontSize: 'clamp(1.8rem, 6vw, 2.4rem)',
              color: 'var(--color-maroon-800)',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            {config.couple.groom.firstName}
          </h2>
        </div>

        {/* Auspicious Muhurtham & Venue Details Box */}
        <div
          style={{
            background: 'var(--color-gold-50)',
            border: '1.5px solid var(--color-gold-400)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 16px',
            margin: '24px 0',
            textAlign: 'center'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '8px' }}>
            <KalashMotif className="w-8 h-8" color="var(--color-gold-700)" />
          </div>

          <h3
            className="font-royal"
            style={{
              fontSize: '1.2rem',
              color: 'var(--color-maroon-800)',
              fontWeight: 700,
              marginBottom: '6px'
            }}
          >
            {config.timing.date}
          </h3>

          <p
            className="font-body"
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-maroon-700)',
              fontWeight: 700
            }}
          >
            Subha Muhurtham: {config.timing.muhurtham}
          </p>

          <p
            className="font-telugu"
            style={{
              fontSize: '1rem',
              color: 'var(--color-gold-900)',
              fontWeight: 600,
              marginTop: '4px'
            }}
          >
            {config.timing.teluguLagna} ({config.timing.lagna})
          </p>

          <div
            style={{
              width: '80%',
              height: '1px',
              background: 'rgba(212, 175, 55, 0.35)',
              margin: '14px auto'
            }}
          />

          <h4
            className="font-royal"
            style={{
              fontSize: '1.1rem',
              color: 'var(--color-maroon-800)',
              fontWeight: 700
            }}
          >
            {config.venue.name}
          </h4>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '2px' }}>
            {config.venue.address}
          </p>
        </div>

        {/* Dedicated PDF Actions (Required: Open Full Invitation without login) */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '420px',
            margin: '0 auto 24px'
          }}
        >
          {/* Prominent Open Full Invitation Button */}
          <a
            href={config.invitation.pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-royal-primary"
            style={{
              padding: '14px 24px',
              fontSize: '0.95rem'
            }}
            aria-label="Open Full Invitation PDF in a new tab"
          >
            <ExternalLinkIcon className="w-5 h-5" color="var(--color-gold-300)" />
            Open Full Invitation (PDF)
          </a>

          {/* Download PDF Button */}
          <a
            href={config.invitation.pdfPath}
            download={config.invitation.fileName}
            className="btn-royal-secondary"
            style={{
              padding: '12px 20px',
              fontSize: '0.9rem'
            }}
            aria-label="Download Wedding Invitation PDF"
          >
            <DownloadIcon className="w-5 h-5" color="var(--color-gold-800)" />
            Download Invitation PDF
          </a>
        </div>

        {/* Embedded PDF Viewer on larger screens / Fallback on mobile */}
        <div
          style={{
            marginTop: '20px',
            borderRadius: 'var(--radius-md)',
            border: '1.5px solid var(--color-gold-400)',
            overflow: 'hidden',
            background: '#F0ECE1',
            minHeight: '260px'
          }}
        >
          <object
            data={`${config.invitation.pdfPath}#toolbar=0&navpanes=0`}
            type="application/pdf"
            width="100%"
            height="380px"
            style={{ display: 'block', border: 'none' }}
          >
            <div
              style={{
                padding: '40px 20px',
                textAlign: 'center',
                color: 'var(--color-text-secondary)'
              }}
            >
              <KalashMotif className="w-10 h-10" color="var(--color-gold-700)" />
              <p
                className="font-royal"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginTop: '12px',
                  color: 'var(--color-maroon-800)'
                }}
              >
                Wedding Patrika Document Ready
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '6px' }}>
                Tap above to view or download the high-resolution invitation PDF directly.
              </p>
            </div>
          </object>
        </div>

        {/* Bottom Back To Home Action */}
        <div style={{ marginTop: '28px' }}>
          <button
            onClick={onClose}
            className="btn-royal-secondary"
            style={{
              padding: '10px 24px',
              fontSize: '0.88rem'
            }}
          >
            <ArrowLeftIcon className="w-4 h-4" color="var(--color-maroon-700)" />
            Return to Wedding Page
          </button>
        </div>
      </div>
    </div>
  );
};
