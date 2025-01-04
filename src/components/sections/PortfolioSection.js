import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { gsap } from 'gsap';
import { FaEye } from 'react-icons/fa';

const PortfolioContainer = styled.section`
  padding: 100px 50px;
  background: rgba(0,0,0,0.2);
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: white;
  margin-bottom: 50px;
  opacity: 0;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PortfolioItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  height: 300px;
  opacity: 0;
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
  transition: transform 0.3s ease;
`;

const PortfolioOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  transform: translateY(50px);

  ${PortfolioItem}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

function PortfolioSection() {
  const portfolioRef = useRef([]);
  const titleRef = useRef(null);
  const gridRef = useRef(null);

  const portfolioItems = [
    { 
      title: 'Web App Dashboard', 
      image: 'https://via.placeholder.com/600x400?text=Project+1' 
    },
    { 
      title: 'Mobile Design', 
      image: 'https://via.placeholder.com/600x400?text=Project+1' 
    },
    { 
      title: 'E-commerce Platform', 
      image: 'https://via.placeholder.com/600x400?text=Project+1' 
    }
  ];

  useEffect(() => {
    // Animasi title
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power3.out' 
      }
    );

    // Animasi grid
    gsap.fromTo(
      gridRef.current,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1, 
        delay: 0.5,
        ease: 'power3.out' 
      }
    );

    // Animasi portfolio items
    portfolioRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9 
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1, 
          delay: 0.7 + index * 0.2,
          ease: 'back.out(1.7)'
        }
      );

      // Animasi gambar
      const image = item.querySelector('img');
      gsap.fromTo(
        image,
        { 
          scale: 1.1,
          opacity: 0.7
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          delay: 0.7 + index * 0.2,
          ease: 'power3.out'
        }
      );
    });

    
  }, []);

  return (
    <PortfolioContainer>
      <SectionTitle ref={titleRef}>Our Recent Projects</SectionTitle>
      <PortfolioGrid ref={gridRef}>
        {portfolioItems.map((item, index) => (
          <PortfolioItem 
            key={index} 
            ref={el => portfolioRef.current[index] = el}
          >
            <PortfolioImage src={item.image} alt={item.title} />
            <PortfolioOverlay>
              <FaEye 
                size={50} 
                color="#00ffff" 
                style={{ 
                  transform: 'translateY(20px)', 
                  opacity: 0,
                  transition: 'all 0.3s ease' 
                }}
              />
              <h3 
                style={{ 
                  color: 'white', 
                  marginTop: 20,
                  transform: 'translateY(20px)',
                  opacity: 0,
                  transition: 'all 0.3s ease' 
                }}
              >
                {item.title}
              </h3>
            </PortfolioOverlay>
          </PortfolioItem>
        ))}
      </PortfolioGrid>
    </PortfolioContainer>
  );
}

export default PortfolioSection;