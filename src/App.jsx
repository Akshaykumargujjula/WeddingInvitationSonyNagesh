import React, { useState } from 'react';
import { weddingConfig } from './weddingConfig';
import { PetalsAnimation } from './components/PetalsAnimation';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MuhurthamSection } from './components/MuhurthamSection';
import { VenueSection } from './components/VenueSection';
import { BlessingsSection } from './components/BlessingsSection';
import { Footer } from './components/Footer';
import { InvitationModal } from './components/InvitationModal';
import { MusicPlayer } from './components/MusicPlayer';
import { WelcomeScreen } from './components/WelcomeScreen';

export function App() {
  // Start with welcome screen showing. Once user clicks "Open", show main site.
  const [showWelcome, setShowWelcome] = useState(true);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  const handleEnterSite = () => {
    setShowWelcome(false);
  };

  const handleExploreVenue = () => {
    setTimeout(() => {
      const el = document.getElementById('venue');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Welcome / Splash Screen shown on top until dismissed */}
      {showWelcome && (
        <WelcomeScreen
          config={weddingConfig}
          onEnter={handleEnterSite}
        />
      )}

      {/* Main site (always in DOM but hidden under welcome screen) */}
      <div style={{ visibility: showWelcome ? 'hidden' : 'visible' }}>
        <PetalsAnimation enabled={petalsEnabled && !showWelcome} />

        <Navbar
          config={weddingConfig}
          onOpenInvitation={() => setIsInvitationOpen(true)}
          petalsEnabled={petalsEnabled}
          onTogglePetals={() => setPetalsEnabled(p => !p)}
        />

        <main>
          <HeroSection
            config={weddingConfig}
            onOpenInvitation={() => setIsInvitationOpen(true)}
            onExploreVenue={handleExploreVenue}
          />
          <MuhurthamSection config={weddingConfig} />
          <VenueSection config={weddingConfig} />
          <BlessingsSection
            config={weddingConfig}
            onReplayWelcome={() => setShowWelcome(true)}
          />
        </main>

        <Footer config={weddingConfig} />

        <InvitationModal
          isOpen={isInvitationOpen}
          onClose={() => setIsInvitationOpen(false)}
          config={weddingConfig}
        />

        <MusicPlayer
          trackUrl={weddingConfig.audio.trackUrl}
          trackTitle={weddingConfig.audio.trackTitle}
        />
      </div>
    </div>
  );
}

export default App;
