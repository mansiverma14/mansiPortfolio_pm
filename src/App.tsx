import React, { useState } from 'react';
import { PageRoute, Project } from './types';
import { ProjectProvider } from './context/ProjectContext';
import { SidebarNav } from './components/SidebarNav';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';
import { ContactSection } from './components/ContactSection';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { SkillsPage } from './pages/SkillsPage';
import { AboutPage } from './pages/AboutPage';
import { ResumePage } from './pages/ResumePage';
import { PrivateVaultPage } from './pages/PrivateVaultPage';
import { MonetizationPage } from './pages/MonetizationPage';
import { HDVideoDownloaderPage } from './pages/HDVideoDownloaderPage';
import { ProductPage } from './pages/ProductPage';
import { ReviewPilotPage } from './pages/ReviewPilotPage';
import { MP3ConverterPage } from './pages/MP3ConverterPage';
import { LiteVideoPlayerPage } from './pages/LiteVideoPlayerPage';
import { RapidoCommuterPassPage } from './pages/RapidoCommuterPassPage';
import { SwiggyInstamartPage } from './pages/SwiggyInstamartPage';
import { InstagramFeedPage } from './pages/InstagramFeedPage';
import { FitLifeProPage } from './pages/FitLifeProPage';
import { ZeroToProductionPage } from './pages/ZeroToProductionPage';
import { AIImplementationsPage } from './pages/AIImplementationsPage';
import { VpnCaseStudyPage } from './pages/VpnCaseStudyPage';
import { AdminPage } from './pages/AdminPage';
import { ProjectQuickModal } from './components/ProjectQuickModal';
import { motion, AnimatePresence } from 'motion/react';

export function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Scroll to top on page route change
  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuickView = (project: Project) => {
    setActiveModalProject(project);
  };

  const handleCloseQuickView = () => {
    setActiveModalProject(null);
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col font-sans selection:bg-white selection:text-[#121212] relative overflow-x-hidden">
      
      {/* Floating Left Navigation Dock matching Screenshots */}
      <SidebarNav currentRoute={currentRoute} onRouteChange={handleRouteChange} />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-1 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentRoute === 'home' && (
              <HomePage
                onNavigate={handleRouteChange}
                onOpenQuickView={handleOpenQuickView}
              />
            )}

            {currentRoute === 'about' && (
              <AboutPage onNavigate={handleRouteChange} />
            )}

            {currentRoute === 'resume' && (
              <ResumePage onNavigate={handleRouteChange} />
            )}

            {currentRoute === 'work' && (
              <WorkPage
                onNavigate={handleRouteChange}
                onOpenQuickView={handleOpenQuickView}
              />
            )}

            {currentRoute === 'skills' && (
              <SkillsPage onNavigate={handleRouteChange} />
            )}

            {currentRoute === 'contact' && (
              <ContactSection onNavigate={handleRouteChange} />
            )}

            {currentRoute === 'private-vault' && (
              <div className="lg:pl-56">
                <PrivateVaultPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'monetization' && (
              <div className="lg:pl-56">
                <MonetizationPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'hd-video-downloader' && (
              <div className="lg:pl-56">
                <HDVideoDownloaderPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'product' && (
              <div className="lg:pl-56">
                <ProductPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'review-pilot' && (
              <div className="lg:pl-56">
                <ReviewPilotPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'mp3-converter' && (
              <div className="lg:pl-56">
                <MP3ConverterPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'lite-video-player' && (
              <div className="lg:pl-56">
                <LiteVideoPlayerPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'rapido-commuter-pass' && (
              <div className="lg:pl-56">
                <RapidoCommuterPassPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'swiggy-instamart' && (
              <div className="lg:pl-56">
                <SwiggyInstamartPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'instagram-feed' && (
              <div className="lg:pl-56">
                <InstagramFeedPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'fitlife-pro' && (
              <div className="lg:pl-56">
                <FitLifeProPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'zero-to-production' && (
              <div className="lg:pl-56">
                <ZeroToProductionPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'ai-implementations' && (
              <div className="lg:pl-56">
                <AIImplementationsPage onNavigate={handleRouteChange} />
              </div>
            )}

            {(currentRoute === 'vpn-transformation' || currentRoute === 'vpn-analytics') && (
              <div className="lg:pl-56">
                <VpnCaseStudyPage onNavigate={handleRouteChange} />
              </div>
            )}

            {currentRoute === 'admin' && (
              <AdminPage onNavigate={handleRouteChange} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleRouteChange} />

      {/* Floating Back To Top Button matching Screenshots */}
      <BackToTop />

      {/* Quick View Project Modal with Full Screenshot Carousel */}
      <ProjectQuickModal
        project={activeModalProject}
        onClose={handleCloseQuickView}
        onNavigate={handleRouteChange}
      />

    </div>
  );
}

export function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}

export default App;
