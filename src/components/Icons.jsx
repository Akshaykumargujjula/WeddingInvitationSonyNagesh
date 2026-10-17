import React from 'react';

export const GaneshaMotif = ({ className = "w-12 h-12", color = "currentColor" }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Lord Ganesha Motif">
    {/* Stylized Lord Ganesha line art */}
    <path d="M50 12 C44 12 40 18 40 24 C40 32 45 36 50 42 C55 36 60 32 60 24 C60 18 56 12 50 12 Z" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Tilak / Crown */}
    <path d="M47 16 H53 M50 13 V19" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="50" cy="22" r="1.5" fill={color} />
    {/* Large Ears */}
    <path d="M40 24 C32 20 22 26 24 38 C26 46 34 48 41 43" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    <path d="M60 24 C68 20 78 26 76 38 C74 46 66 48 59 43" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Trunk curving right (Valampuri / auspicious curve) */}
    <path d="M49 39 C48 50 46 62 52 70 C56 75 64 74 65 67 C66 61 58 60 56 64" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    {/* Tusk */}
    <path d="M44 45 L38 47" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Modak */}
    <ellipse cx="64" cy="62" rx="3.5" ry="4.5" fill={color} />
    {/* Aura / Halo */}
    <path d="M30 18 C35 12 65 12 70 18" stroke={color} strokeWidth="1.5" strokeDasharray="2 3" strokeLinecap="round" />
    <circle cx="50" cy="86" r="2" fill={color} />
    <path d="M35 86 H65" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const KalashMotif = ({ className = "w-10 h-10", color = "currentColor" }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Kalasham Motif">
    {/* Coconut */}
    <path d="M40 10 C34 18 34 26 40 32 C46 26 46 18 40 10 Z" fill={color} opacity="0.9" />
    {/* Mango Leaves */}
    <path d="M40 28 C28 22 22 14 20 8 C26 18 32 24 38 28" fill={color} opacity="0.75" />
    <path d="M40 28 C52 22 58 14 60 8 C54 18 48 24 42 28" fill={color} opacity="0.75" />
    {/* Pot rim */}
    <path d="M26 32 C26 30 54 30 54 32 C54 34 26 34 26 32 Z" fill={color} />
    {/* Pot body */}
    <path d="M26 34 C20 40 16 52 24 64 C30 72 50 72 56 64 C64 52 60 40 54 34 Z" stroke={color} strokeWidth="2.5" fill="none" />
    {/* Swastik / Auspicious mark in center of Kalash */}
    <path d="M36 48 H44 M40 44 V52 M44 48 V52 M40 44 H44 M36 48 V44 M36 52 H40" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    {/* Pedestal */}
    <path d="M28 68 H52 M32 72 H48" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const MandalaCorner = ({ className = "w-12 h-12", color = "currentColor", rotate = 0 }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={{ transform: `rotate(${rotate}deg)` }}>
    <path d="M10 10 H80 C70 20 60 40 60 60 C40 60 20 70 10 80 V10 Z" stroke={color} strokeWidth="1.5" opacity="0.4" fill="none" />
    <path d="M14 14 H55 C50 25 40 40 40 50 C30 45 20 45 14 55 V14 Z" stroke={color} strokeWidth="1.5" opacity="0.7" fill="none" />
    <circle cx="24" cy="24" r="5" stroke={color} strokeWidth="1.5" fill="none" />
    <circle cx="24" cy="24" r="2" fill={color} />
    <path d="M10 10 L45 45" stroke={color} strokeWidth="1" strokeDasharray="2 2" />
    <path d="M10 35 C20 30 30 20 35 10" stroke={color} strokeWidth="1.5" fill="none" />
    <path d="M10 60 C35 50 50 35 60 10" stroke={color} strokeWidth="1.5" fill="none" />
    <circle cx="65" cy="10" r="2" fill={color} />
    <circle cx="10" cy="65" r="2" fill={color} />
  </svg>
);

export const ToranamGarland = ({ className = "w-full h-8", color = "#D4AF37" }) => (
  <svg viewBox="0 0 600 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
    {/* Rope line */}
    <path d="M0 6 Q150 18 300 6 Q450 18 600 6" stroke={color} strokeWidth="2" fill="none" opacity="0.8" />
    {/* Hanging mango leaves and marigolds repeated */}
    {[30, 90, 150, 210, 270, 330, 390, 450, 510, 570].map((x, i) => (
      <g key={i}>
        {/* Mango Leaf */}
        <path d={`M${x} 10 C${x - 8} 18 ${x - 6} 28 ${x} 34 C${x + 6} 28 ${x + 8} 18 ${x} 10 Z`} fill="#2E6B34" opacity="0.85" />
        {/* Golden Marigold Flower */}
        <circle cx={x} cy="10" r="4.5" fill="#E5A93C" />
        <circle cx={x} cy="10" r="2.5" fill="#B33927" />
      </g>
    ))}
  </svg>
);

export const OrnamentalDivider = ({ className = "w-48 h-6", color = "#D4AF37" }) => (
  <svg viewBox="0 0 240 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <line x1="10" y1="12" x2="90" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="95" cy="12" r="2" fill={color} />
    <circle cx="105" cy="12" r="3.5" stroke={color} strokeWidth="1.2" fill="none" />
    {/* Center diamond/flower */}
    <g transform="translate(120, 12)">
      <path d="M0 -6 L6 0 L0 6 L-6 0 Z" fill={color} />
      <circle cx="0" cy="0" r="2" fill="#FAF6F0" />
    </g>
    <circle cx="135" cy="12" r="3.5" stroke={color} strokeWidth="1.2" fill="none" />
    <circle cx="145" cy="12" r="2" fill={color} />
    <line x1="150" y1="12" x2="230" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const MapPinIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const DirectionIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
);

export const CalendarIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const ClockIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const MusicNoteIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const PlayIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const PauseIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill={color} stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export const VolumeUpIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

export const VolumeMuteIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1="23" y1="9" x2="17" y2="15" />
    <line x1="17" y1="9" x2="23" y2="15" />
  </svg>
);

export const DownloadIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export const ExternalLinkIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export const ShareIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

export const CloseIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const HeartIcon = ({ className = "w-5 h-5", color = "currentColor", fill = "none" }) => (
  <svg viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export const ArrowLeftIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

export const VideoIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="23 7 16 12 23 17 23 7" />
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
  </svg>
);

export const CheckIcon = ({ className = "w-5 h-5", color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
