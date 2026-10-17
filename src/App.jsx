import React, { useState } from 'react';
import { weddingConfig } from './weddingConfig';
import { PetalsAnimation } from './components/PetalsAnimation';
import { OpeningCurtain } from './components/OpeningCurtain';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MuhurthamSection } from './components/MuhurthamSection';
import { VenueSection } from './components/VenueSection';
import { PreWeddingSection } from './components/PreWeddingSection';
import { BlessingsSection } from './components/BlessingsSection';
import { Footer } from './components/Footer';
import { InvitationModal } from './components/InvitationModal';
import { MusicPlayer } from './components/MusicPlayer';

export function App() {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [isInvitationModalOpen, setIsInvitationModalOpen] = useState(false);
  const [petalsEnabled, setPetalsEnabled] = useState(true);

  const handleOpenCurtain = () => {
    setIsCurtainOpen(true);
  };

  const handleReopenCurtain = () => {
    setIsCurtainOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInvitation = () => {
    setIsInvitationModalOpen(true);
  };

  const handleCloseInvitation = () => {
    setIsInvitationModalOpen(false);
  };

  const handleExploreVenue = () => {
    const el = document.getElementById('venue');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTogglePetals = () => {
    setPetalsEnabled((prev) => !prev);
  };

  return (
    <div className="wedding-app" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Floating Petals Canvas */}
      <PetalsAnimation enabled={petalsEnabled} />

      {/* Opening Royal Envelope Welcome Curtain */}
      <OpeningCurtain
        config={weddingConfig}
        isOpen={isCurtainOpen}
        onOpen={handleOpenCurtain}
      />

      {/* Sticky Top Navbar */}
      <Navbar
        config={weddingConfig}
        onOpenInvitation={handleOpenInvitation}
        petalsEnabled={petalsEnabled}
        onTogglePetals={handleTogglePetals}
      />

      {/* Main Wedding Content */}
      <main id="main-content">
        {/* Landing Hero Screen with Names, Date, Muhurtham, and Prominent Actions */}
        <HeroSection
          config={weddingConfig}
          onOpenInvitation={handleOpenInvitation}
          onExploreVenue={handleExploreVenue}
        />

        {/* Sacred Muhurtham & Rituals Timeline Section */}
        <MuhurthamSection config={weddingConfig} />

        {/* Venue Section with Sri Rama Gardens & Direct Directions Link */}
        <VenueSection config={weddingConfig} />

        {/* Configurable Pre-Wedding Moments Section (Hidden until videoUrl is set) */}
        <PreWeddingSection config={weddingConfig} />

        {/* Sacred Blessings & Share Invitation Section */}
        <BlessingsSection
          config={weddingConfig}
          onReopenCurtain={handleReopenCurtain}
        />
      </main>

      {/* Wedding Footer */}
      <Footer config={weddingConfig} />

      {/* Dedicated Invitation Modal / Viewer for public/invitation.pdf */}
      <InvitationModal
        isOpen={isInvitationModalOpen}
        onClose={handleCloseInvitation}
        config={weddingConfig}
      />

      {/* Floating Music Controller with Play/Pause and Visualizer */}
      <MusicPlayer
        trackUrl={weddingConfig.audio.trackUrl}
        trackTitle={weddingConfig.audio.trackTitle}
      />
    </div>
  );
}

export default App;
