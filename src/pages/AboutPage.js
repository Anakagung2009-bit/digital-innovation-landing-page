import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import AboutSection from '../components/sections/AboutSection';

const AboutPageContainer = styled.div`
  color: white;
  background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7));
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 150px 20px 50px;
  background: rgba(0,0,0,0.2);
  opacity: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0,255,255,0.1), transparent);
    z-index: 1;
  }
`;

const HeaderTitle = styled.h1`
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: #00ffff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeaderSubtitle = styled.p`
  position: relative;
  z-index: 2;
  color: rgba(255,255,255,0.8);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function AboutPage() {
  const headerRef = useRef(null);

  useEffect(() => {
    // Animasi header
    const headerElements = headerRef.current.children;
    
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }
    );

    // Animasi elemen header
    gsap.fromTo(
      headerElements,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: 'power3.out' 
      }
    );

    // Scroll ke top
    gsap.to(window, { 
      duration: 0.5, 
      scrollTo: 0 
    });
  }, []);

  return (
    <AboutPageContainer>
      <PageHeader ref={headerRef} id="about-header">
        <HeaderTitle>Tentang Digital Innovation Studio</HeaderTitle>
        <HeaderSubtitle>
          Mitra teknologi yang mendedikasikan diri untuk mentransformasi 
          ide bisnis menjadi solusi digital inovatif dan bermakna.
        </HeaderSubtitle>
      </PageHeader>
      <AboutSection />
    </AboutPageContainer>
  );
}

export default AboutPage;