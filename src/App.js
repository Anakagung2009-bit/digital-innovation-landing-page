import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from '@emotion/styled';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HeroSection from './components/sections/HeroSection';
import ServiceSection from './components/sections/ServiceSection';
import AnimatedBackground from './components/AnimatedBackground';

// Import halaman-halaman lainnya
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';

import TestimonialSection from './components/sections/TestimonialSection';
import ProcessSection from './components/sections/ProcessSection';
import Footer from './components/Footer';

import WebDevelopmentPage from './pages/Services/WebDevelopmentPage';
import MobileAppDesignPage from './pages/Services/MobileAppDesign';
import DigitalMarketingPage from './pages/Services/DigitalMarketingPage';
import CloudSolutionsPage from './pages/Services/CloudSolutionPage';

const AppContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const PageContainer = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Preloader onComplete={handleLoadingComplete} />
      ) : (
        <Router>
          <AppContainer>
            <AnimatedBackground />
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
            <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
            
            <PageContainer>
              <Routes>
                <Route 
                  path="/" 
                  element={
                    <>
                      <HeroSection />
                      <ServiceSection />
                      <ProcessSection />
                      <TestimonialSection />
                    </>
                  } 
                />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route path="/services/web-development" element={<WebDevelopmentPage />} />
                <Route path="/services/mobile-app" element={<MobileAppDesignPage />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
                <Route path="/services/cloud-solutions" element={<CloudSolutionsPage />} />
              </Routes>
              <Footer />

            </PageContainer>
          </AppContainer>
        </Router>
      )}
    </>
  );
}

export default App;