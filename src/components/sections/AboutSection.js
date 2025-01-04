import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { gsap } from 'gsap';
import { 
  FaCode, 
  FaRocket, 
  FaUsers, 
  FaTrophy 
} from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6));
  color: white;
  overflow: hidden;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
    text-align: center;
  }
`;

const AboutText = styled.div`
  flex: 1;
  opacity: 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #00ffff;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AboutDescription = styled.p`
  color: rgba(255,255,255,0.8);
  line-height: 1.6;
  margin-bottom: 30px;
`;

const AboutImage = styled.div`
  flex: 1;
  position: relative;
  opacity: 0;
  perspective: 1000px;

  @media (max-width: 992px) {
    max-width: 500px;
    width: 100%;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  border-radius: 15px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4);
  transition: transform 0.5s ease;

  &:hover {
    transform: rotateY(-5deg) scale(1.05);
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 25px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);

  &:hover {
    transform: translateY(-10px);
    background: rgba(255,255,255,0.2);
    box-shadow: 0 15px 30px rgba(0,255,255,0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 40px;
  color: #00ffff;
  margin-right: 20px;
  transition: transform 0.3s ease;

  ${FeatureCard}:hover & {
    transform: rotate(15deg);
  }
`;

const FeatureContent = styled.div`
  flex-grow: 1;

  h4 {
    color: #00ffff;
    margin-bottom: 10px;
  }

  p {
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
  }
`;

function AboutSection() {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef([]);

  useEffect(() => {
    const animateElements = () => {
      // Animasi teks
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: 'power3.out' 
        }
      );

      // Animasi gambar
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 1, 
          ease: 'back.out(1.7)' 
        }
      );

      // Animasi fitur
      featuresRef.current.forEach((feature, index) => {
        gsap.fromTo(
          feature,
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            delay: index * 0.2,
            ease: 'back.out(1.7)' 
          }
        );
      });
    };

    animateElements();
    
    // Responsive re-animation
    const handleResize = () => {
      animateElements();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      icon: <FaCode />,
      title: 'Inovasi Teknologi',
      description: 'Mengadopsi teknologi terkini untuk solusi cutting-edge'
    },
    {
      icon: <FaRocket />,
      title: 'Pertumbuhan Cepat',
      description: 'Strategi yang mendorong akselerasi bisnis digital'
    },
    {
      icon: <FaUsers />,
      title: 'Tim Profesional',
      description: 'Ahli berpengalaman di bidang teknologi digital'
    },
    {
      icon: <FaTrophy />,
      title: 'Kualitas Unggul',
      description: 'Komitmen pada standar dan kepuasan tertinggi'
    }
  ];

  return (
    <AboutContainer>
      <AboutContent>
        <AboutText ref={textRef}>
          <SectionTitle>Tentang Digital Innovation Studio</SectionTitle>
          <AboutDescription>
            Kami adalah ekosistem inovasi digital yang berdedikasi mentransformasi 
            ide bisnis menjadi solusi teknologi canggih. Dengan pendekatan holistik 
            dan keahlian mendalam, kami membantu klien mencapai keunggulan kompetitif 
            di era digital.
          </AboutDescription>
          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                ref={el => featuresRef.current[index] = el}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureContent>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </FeatureContent>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </AboutText>
        <AboutImage ref={imageRef}>
          <TeamImage 
            src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Tim Digital Innovation Studio" 
          />
        </AboutImage>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutSection;