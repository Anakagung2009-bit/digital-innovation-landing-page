import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaMobileAlt, 
  FaPalette, 
  FaCode, 
  FaUserFriends, 
  FaRocket 
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetailContainer = styled.div`
  background: linear-gradient(135deg, #0f2027, #203a43);
  color: white;
  min-height: 100vh;
  padding: 100px 50px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(79,172,254,0.05);
    transform: skewY(-5deg);
    z-index: 1;
  }
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
`;

const ServiceTitle = styled.h1`
  color: #4facfe;
  font-size: 3.5rem;
  margin-bottom: 15px;
  text-shadow: 0 0 20px rgba(79,172,254,0.3);
`;

const ServiceSubtitle = styled.p`
  color: rgba(255,255,255,0.7);
  font-size: 1.2rem;
`;

const ServiceContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceImage = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;


const ServiceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const ServiceFeature = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(79,172,254,0.05);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(79,172,254,0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateX(-50px);

  &:hover {
    background: rgba(79,172,254,0.1);
    transform: translateX(0) scale(1.05);
    box-shadow: 0 10px 20px rgba(79,172,254,0.2);
  }
`;

const FeatureIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: rgba(79,172,254,0.1);
  border-radius: 15px;
  color: #4facfe;
`;


const FeatureContent = styled.div`
  flex-grow: 1;

  h3 {
    margin: 0 0 10px 0;
    color: #4facfe;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: rgba(255,255,255,0.7);
    font-size: 0.9rem;
  }
`;

function MobileAppDesignPage() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const featureRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const image = imageRef.current;

    // Timeline animasi utama
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animasi title
    tl.fromTo(title, 
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }
    );

    // Animasi gambar
    tl.fromTo(image, 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        ease: 'back.out(1.5)' 
      },
      '-=0.5'
    );

    // Animasi fitur
    featureRefs.current.forEach((feature, index) => {
      tl.fromTo(
        feature,
        { 
          opacity: 0, 
          x: -50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          x: 0,
          scale: 1,
          duration: 0.8, 
          ease: 'back.out(1.7)'
        },
        `-=${index * 0.2}`
      );
    });
  }, []);

  return (
    <ServiceDetailContainer ref={sectionRef}>
      <ServiceHeader ref={titleRef}>
        <ServiceTitle>Mobile App Design</ServiceTitle>
        <ServiceSubtitle>
          Transformasi Ide Menjadi Aplikasi Mobile Inovatif
        </ServiceSubtitle>
      </ServiceHeader>
      
      <ServiceContent>
        <ServiceImage ref={imageRef}>
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
            alt="Mobile App Design" 
          />
        </ServiceImage>
        
        <ServiceDetails>
          {[
            {
              icon: <FaMobileAlt size={35} />,
              title: 'Desain Multi-Platform',
              description: 'Aplikasi responsif yang berfungsi sempurna di berbagai perangkat dan sistem operasi.'
            },
            {
              icon: <FaPalette size={35} />,
              title: 'UI/UX Mutakhir',
              description: 'Antarmuka pengguna yang intuitif dan estetis, dirancang untuk pengalaman pengguna optimal.'
            },
            {
              icon: <FaCode size={35} />,
              title: 'Pengembangan Fleksibel',
              description: 'Solusi pengembangan native dan cross-platform yang disesuaikan dengan kebutuhan spesifik Anda.'
            },
            {
              icon: <FaUserFriends size={35} />,
              title: 'Pengalaman Pengguna yang Luar Biasa',
              description: 'Fokus pada interaksi pengguna yang menyenangkan dan efisien untuk meningkatkan retensi.'
            },
            {
              icon: <FaRocket size={35} />,
              title: 'Optimasi Performa',
              description: 'Meningkatkan kecepatan dan efisiensi aplikasi untuk pengalaman pengguna yang lebih baik.'
            }
          ].map((feature, index) => (
            <ServiceFeature key={index} ref={el => featureRefs.current[index] = el}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureContent>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureContent>
            </ServiceFeature>
          ))}
        </ServiceDetails>
      </ServiceContent>
    </ServiceDetailContainer>
  );
}

export default MobileAppDesignPage;