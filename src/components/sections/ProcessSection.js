import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled/macro';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaSearch, 
  FaLightbulb, 
  FaCode, 
  FaClipboardList, 
  FaRocket, 
  FaChartLine, 
  FaUsers, 
  FaDesktop, 
  FaCheck, 
  FaGlobe 
} from 'react-icons/fa';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ProcessContainer = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7));
  color: white;
  overflow: hidden;
  position: relative;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #00ffff;
  font-size: 2.5rem;
  margin-bottom: 50px;
  opacity: 0;
`;

const SliderContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  will-change: transform;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const ProcessCard = styled.div`
  flex: 0 0 33.33%;
  box-sizing: border-box;
  padding: 20px;
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0,255,255,0.2);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    margin-bottom: 20px;
  }
`;

const ProcessIcon = styled.div`
  font-size: 50px;
  color: #00ffff;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
`;

const ProcessStep = styled.h3`
  color: #00ffff;
  margin-bottom: 15px;
  font-size: 1.2rem;
`;

const ProcessDescription = styled.p`
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: #00ffff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.left {
    left: 20px;
  }

  &.right {
    right: 20px;
  }
`;

function ProcessSection() {
  const titleRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(8); // Default untuk desktop


  const processSteps = [
    { icon: <FaSearch />, 
        step: 'Analisis Kebutuhan', 
        description: 'Melakukan riset mendalam untuk memahami kebutuhan spesifik dan tantangan bisnis Anda.' },
    { icon: <FaLightbulb />, 
        step: 'Konsep & Ideasi', 
        description: 'Mengembangkan konsep kreatif dan solusi inovatif yang sesuai dengan tujuan bisnis.' },
    { icon: <FaClipboardList />, 
        step: 'Perencanaan Strategis', 
        description: 'Merancang roadmap komprehensif dengan milestone yang jelas dan terukur.' },
    { icon: <FaCode />,
         step: 'Desain & Pengembangan',
          description: 'Implementasi solusi digital menggunakan teknologi terkini dan praktik terbaik.' },
    { icon: <FaRocket />,
         step: 'Prototyping', 
         description: 'Membuat prototipe cepat untuk memvalidasi konsep dan mendapatkan umpan balik.' },
    { icon: <FaChartLine />, 
        step: 'Optimasi & Pengujian', 
        description: 'Melakukan pengujian menyeluruh dan optimasi berkelanjutan.' },
    { icon: <FaUsers />, 
        step: 'Kolaborasi Tim', 
        description: 'Koordinasi erat antara tim profesional untuk hasil maksimal.' },
    { icon: <FaDesktop />, 
        step: 'Implementasi', 
        description: 'Deployment solusi digital dengan dukungan penuh dan pelatihan.' },
    { icon: <FaCheck />,
         step: 'Quality Assurance', 
         description: 'Pemeriksaan kualitas komprehensif untuk memastikan standar tertinggi.' },
    { icon: <FaGlobe />, 
        step: 'Dukungan Berkelanjutan', 
        description: 'Layanan purna jual dan dukungan teknis berkelanjutan.' },
  ];

  const totalSlides = Math.ceil(processSteps.length / cardsPerSlide);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
  };

    const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsPerSlide(1); // Mobile: 1 card per slide
      } else if (window.innerWidth <= 1024) {
        setCardsPerSlide(2); // Tablet: 2 cards per slide
      } else {
        setCardsPerSlide(3); // Desktop: 3 cards per slide
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

  
  return (
    <ProcessContainer>
      <SectionTitle ref={titleRef}>Our Comprehensive Process</SectionTitle>
      <SliderWrapper>
        <SliderContainer
          style={{ transform: `translateX(-${currentIndex * (100 / cardsPerSlide)}%)` }}
        >
          {processSteps.map((step, index) => (
            <ProcessCard key={index} style={{ flex: `0 0 ${100 / cardsPerSlide}%` }}>
              <ProcessIcon>{step.icon}</ProcessIcon>
              <ProcessStep>{step.step}</ProcessStep>
              <ProcessDescription>{step.description}</ProcessDescription>
            </ProcessCard>
          ))}
        </SliderContainer>
        <NavButton className="left" onClick={handlePrev}>
          &#8249;
        </NavButton>
        <NavButton className="right" onClick={handleNext}>
          &#8250;
        </NavButton>
      </SliderWrapper>
    </ProcessContainer>
  );
}

export default ProcessSection;
