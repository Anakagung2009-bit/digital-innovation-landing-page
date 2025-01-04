import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled/macro';
import { gsap } from 'gsap';
import { 
  FaCode, 
  FaMobileAlt, 
  FaChartLine, 
  FaCloud 
} from 'react-icons/fa';

const ServiceContainer = styled.section`
  padding: 100px 50px;
  background: rgba(0, 0, 0, 0.1);
  color: white;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  opacity: 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #00ffff;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: rgba(255,255,255,0.8);
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  opacity: 0;
  transform: translateY(50px);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,255,255,0.2);
  }
`;

const ServiceImageWrapper = styled.div`
  height: 250px;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 10px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1);
  }
`;

const ServiceIcon = styled.div`
  font-size: 50px;
  color: #00ffff;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: rotate(360deg);
  }
`;

const ServiceTitle = styled.h3`
  margin-bottom: 15px;
  color: #00ffff;
`;

const ServiceDescription = styled.p`
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  margin-bottom: 15px;
`;

const ServiceDetails = styled.div`
  margin-top: auto;
`;

const ServiceLink = styled.a`
  display: inline-block;
  margin-top: 15px;
  color: #00ffff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: white;
  }
`;

function ServiceSection() {
  const servicesRef = useRef([]);
  const headerRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    // Animasi header
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

    // Animasi services
    servicesRef.current.forEach((service, index) => {
      gsap.fromTo(
        service,
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
          delay: 0.5 + index * 0.2, 
          ease: 'back.out(1.7)' 
        }
      );
    });

    gsap.fromTo(
      portfolioRef.current,
      {
        opacity: 0,
        scale: 0.9
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Kami merancang solusi web kustom yang responsif dan modern, menggunakan teknologi terkini untuk memaksimalkan performa dan pengalaman pengguna.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
      link: '/services/web-development'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App Design',
      description: 'Aplikasi mobile inovatif yang dirancang untuk memberikan pengalaman pengguna yang mulus dan intuitif di platform iOS dan Android.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      link: '/services/mobile-app'
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      description: 'Strategi pemasaran digital komprehensif yang disesuaikan untuk meningkatkan visibilitas online dan mengkonversi prospek menjadi pelanggan.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/services/digital-marketing'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Layanan cloud yang aman, scalable, dan terintegrasi untuk mendukung infrastruktur digital bisnis Anda dengan fleksibilitas maksimal.',
      image: 'https://images.unsplash.com/photo-1614064548237-096f735f344f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/services/cloud-solutions'
    }
  ];

  return (
    <ServiceContainer>
      <SectionHeader ref={headerRef}>
        <SectionTitle>Our Comprehensive Services</SectionTitle>
        <SectionSubtitle>
          Kami menyediakan solusi digital end-to-end yang dirancang untuk mengakselerasi pertumbuhan bisnis Anda di era digital.
        </SectionSubtitle>
      </SectionHeader>
      <ServiceGrid>
        {services.map((service, index) => (
          <ServiceCard key={index} ref={el => servicesRef.current[index] = el}>
            <ServiceImageWrapper>
              <ServiceImage src={service.image} alt={service.title} />
            </ServiceImageWrapper>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <ServiceDetails>
              <ServiceLink href={service.link}>Learn More</ServiceLink>
            </ServiceDetails>
          </ServiceCard>
        ))}
      </ServiceGrid>
    </ServiceContainer>
  );
}

export default ServiceSection;