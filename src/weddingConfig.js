/**
 * Central Wedding Configuration File
 * -----------------------------------
 * Update wedding details, venue links, media paths, or the pre-wedding video URL here.
 * When preWeddingVideoUrl is empty (""), the Pre-Wedding section and navigation link
 * are automatically hidden across the entire application.
 */

export const weddingConfig = {
  // Couple Information
  couple: {
    bride: {
      firstName: "Sri Laxmi",
      nickname: "Sony",
      displayName: "Sri Laxmi (Sony)",
      title: "Chi. La. Sow.",
      teluguName: "చి.ల.సౌ. శ్రీలక్ష్మి (సోని)",
      role: "The Bride"
    },
    groom: {
      firstName: "Nagesh",
      nickname: "Nagesh",
      displayName: "Nagesh",
      title: "Chi.",
      teluguName: "చి. నగేష్",
      role: "The Groom"
    },
    monogram: "S & N"
  },

  // Auspicious Wedding Timing
  timing: {
    targetDateTime: "2026-12-03T09:31:00+05:30",
    date: "Thursday, 3 December 2026",
    teluguDate: "గురువారం, 3 డిసెంబర్ 2026",
    muhurtham: "9:31 AM",
    teluguMuhurtham: "ఉదయం 9 గంటల 31 నిమిషములకు",
    lagna: "Dhanur Lagnam",
    teluguLagna: "ధనుర్ లగ్న సుముహూర్తమున",
    reception: {
      title: "Wedding Reception & Dinner",
      time: "Evening 7:00 PM onwards",
      date: "Thursday, 3 December 2026"
    }
  },

  // Venue Information
  venue: {
    name: "Sri Rama Gardens",
    teluguName: "శ్రీ రామ గార్డెన్స్",
    address: "Armoor Road, Nizamabad, Telangana 503003",
    shortAddress: "Armoor Road, Nizamabad",
    googleMapsUrl: "https://maps.app.goo.gl/mKQgTzXkruFhgTsm9",
    embedQuery: "Sri Rama Gardens, Armoor Road, Nizamabad, Telangana",
    landmarks: "Easily accessible from Nizamabad bypass and Armoor main road with ample valet parking.",
    facilities: [
      { icon: "car", label: "Spacious Parking" },
      { icon: "utensils", label: "Traditional Kalyana Bhojanam" },
      { icon: "shield-check", label: "Air-Conditioned Mandapam" },
      { icon: "map-pin", label: "Central Location" }
    ]
  },

  // Document Assets
  // Set pdfPath to "/invitation.pdf" once you have the real wedding card PDF
  // When empty, the Invitation button is hidden automatically
  invitation: {
    pdfPath: "",
    fileName: "Sri-Laxmi-Sony-weds-Nagesh-Wedding-Invitation.pdf",
    title: "Official Wedding Patrika",
    subtitle: "Sacred Telugu Marriage Invitation"
  },

  // Background Audio Configuration
  // Set trackUrl to your audio file path when ready (e.g. "/audio/my-song.mp3")
  // Leave empty ("") to hide the music button entirely
  audio: {
    trackUrl: "",
    trackTitle: "Wedding Music",
    trackSubtitle: "Traditional Kalyana Vaibhogam",
    autoPrompt: false
  },

  // Pre-Wedding Video Configuration
  preWeddingVideo: {
    videoUrl: "", // Hidden when empty. When ready, paste URL: e.g. "https://www.youtube.com/watch?v=..."
    title: "Our Pre-Wedding Moments",
    subtitle: "A glimpse of love, laughter, and forever",
    thumbnail: ""
  },

  // Key Event Schedule / Highlights
  timeline: [
    {
      time: "8:00 AM",
      title: "Edurukolu & Naandi Rituals",
      teluguTitle: "ఎదురుకోలు • నాందీ వేడుక",
      description: "Welcoming the groom's family with Mangala Harathi and traditional nadaswaram melodies. Naandi pooja seeking blessings of ancestors for the auspicious occasion.",
      icon: "🪔"
    },
    {
      time: "9:31 AM",
      title: "Subha Muhurtham & Talambralu",
      teluguTitle: "ధనుర్ లగ్న సుముహూర్తము • జీలకర్ర-బెల్లం",
      description: "Jeelakarra Bellam Dharana, Mangalasutra Dharana, and joyous Talambralu in auspicious Dhanur Lagnam.",
      highlight: true,
      icon: "💍"
    },
    {
      time: "12:00 PM",
      title: "Kalyana Bhojanam",
      teluguTitle: "కళ్యాణ విందు భోజనం",
      description: "Delectable traditional Telugu wedding feast served on auspicious banana leaves with family and friends.",
      icon: "🍽️"
    }
  ],

  // Warm Blessings Message
  blessingMessage: {
    shloka: "మంగళం భగవాన్ విష్ణుః మంగళం గరుడధ్వజః | మంగళం పుండరీకాక్షో మంగళాయ తనో హరిః ||",
    transliteration: "Mangalam Bhagavan Vishnuh Mangalam Garudadhvajah | Mangalam Pundarikaksho Mangalaya Tano Harih ||",
    quote: "With the loving blessings of our parents, elders, and families, we warmly invite you to celebrate this sacred union of two hearts and souls.",
    familyNames: "Families of Sri Laxmi (Sony) & Nagesh"
  }
};
