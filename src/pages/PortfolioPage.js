import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import PortfolioSection from '../components/sections/PortfolioSection';
import { FaCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';

const PortfolioContainer = styled.div`
  color: white;
`;

const PageHeader = styled.div`
  text-align: center;
  padding: 100px 50px 50px;
  background: rgba(0,0,0,0.2);
`;

const PortfolioTypes = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 50px 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PortfolioTypeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.1);
  padding: 30px;
  border-radius: 15px;
  width: 250px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function PortfolioPage() {
  useEffect(() => {
    // Animasi untuk header
    gsap.fromTo(
      "#page-header", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animasi untuk tipe portfolio
    gsap.fromTo(
      ".portfolio-type",
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'back.out(1.7)' 
      }
    );
  }, []);

  const portfolioTypes = [
    {
      icon: <FaCode size={50} color="#00ffff" />,
      title: 'Web Development',
      description: 'Solusi website profesional dan responsif'
    },
    {
      icon: <FaMobileAlt size={50} color="#00ffff" />,
      title: 'Mobile Apps',
      description: 'Aplikasi mobile inovatif untuk berbagai platform'
    },
    {
      icon: <FaChartLine size={50} color="#00ffff" />,
      title: 'Digital Strategy',
      description: 'Strategi digital yang tepat untuk bisnis Anda'
    }
  ];

  return (
    <PortfolioContainer>
      <PageHeader id="page-header">
        <h1>Our Portfolio</h1>
        <p>Explore our innovative projects that transform digital experiences</p>
      </PageHeader>

      <PortfolioTypes>
        {portfolioTypes.map((type, index) => (
          <PortfolioTypeCard 
            key={index} 
            className="portfolio-type"
          >
            {type.icon}
            <h3>{type.title}</h3>
            <p>{type.description}</p>
          </PortfolioTypeCard>
        ))}
      </PortfolioTypes>

      <PortfolioSection />
    </PortfolioContainer>
  );
}

export default PortfolioPage;