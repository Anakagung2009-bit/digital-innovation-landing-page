import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { FaCode, FaRocket, FaLightbulb } from 'react-icons/fa';

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 900px;
  z-index: 2;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  color: white;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #00ffff, #4f8fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: rgba(255,255,255,0.8);
  margin-bottom: 30px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: #00ffff;
  margin-bottom: 20px;
`;

const CallToActionButton = styled.a`
  display: inline-block;
  padding: 12px 30px;
  background-color: #00ffff;
  color: black;
  border-radius: 50px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  margin-top: 30px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,255,255,0.4);
  }
`;

const BackgroundShapes = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
`;

const Shape = styled.div`
  position: absolute;
  background: rgba(0,255,255,0.1);
  border-radius: 50%;
`;

function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const featuresRef = useRef([]);
  const shapesRef = useRef([]);

  useEffect(() => {
    // Animasi judul
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animasi subjudul
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
    );

    // Animasi fitur
    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          delay: 0.7 + index * 0.2, 
          ease: 'power3.out' 
        }
      );
    });

    // Animasi background shapes
    shapesRef.current.forEach((shape, index) => {
      gsap.to(shape, {
        x: index % 2 === 0 ? '+=100' : '-=100',
        y: index % 2 === 0 ? '+=50' : '-=50',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    });
  }, []);

  const backgroundShapes = [
    { top: '10%', left: '5%', width: 200, height: 200 },
    { top: '60%', right: '10%', width: 150, height: 150 },
    { bottom: '20%', left: '50%', width: 100, height: 100 }
  ];

  const features = [
    {
      icon: <FaCode />,
      title: 'Custom Web Solutions',
      description: 'Kami merancang website profesional yang disesuaikan dengan kebutuhan bisnis Anda.'
    },
    {
      icon: <FaRocket />,
      title: 'Strategi Digital',
      description: 'Kembangkan bisnis Anda dengan strategi digital inovatif dan efektif.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Solusi Kreatif',
      description: 'Kami menghadirkan ide-ide kreatif untuk memecahkan tantangan bisnis Anda.'
    }
  ];

  return (
    <HeroContainer>
      <BackgroundShapes>
        {backgroundShapes.map((shape, index) => (
          <Shape 
            key={index} 
            ref={el => shapesRef.current[index] = el}
            style={shape}
          />
        ))}
      </BackgroundShapes>

      <HeroContent>
        <HeroTitle ref={titleRef}>
          Transformasi Digital Untuk Kesuksesan Bisnis Anda
        </HeroTitle>
        <HeroSubtitle ref={subtitleRef}>
          Kami adalah mitra teknologi yang membantu Anda mengubah ide menjadi solusi digital yang powerful dan inovatif.
        </HeroSubtitle>

        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              ref={el => featuresRef.current[index] = el}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureGrid>

        <CallToActionButton href="/contact">
          Mulai Sekarang
        </CallToActionButton>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;