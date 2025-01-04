import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled/macro';
import { gsap } from 'gsap';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialContainer = styled.section`
  padding: 100px 20px;
  background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.7));
  color: white;
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #00ffff;
  font-size: 2.5rem;
  margin-bottom: 50px;
  opacity: 0;
`;

const TestimonialWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.div`
  background: rgba(255,255,255,0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(50px);

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 15px 30px rgba(0,255,255,0.2);
  }
`;

const NavigationContainer = styled.div`
  position: absolute;
  top: 50%;
  left: -60px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
    left: 0;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    display: none; // Sembunyikan di mobile
  }
`;

const NavigationRight = styled.div`
  position: absolute;
  top: 50%;
  right: -60px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1024px) {
    right: 0;
    flex-direction: row;
  }

  @media (max-width: 768px) {
    display: none; // Sembunyikan di mobile
  }
`;

const NavigationButton = styled.button`
  background: rgba(0,255,255,0.2);
  color: #00ffff;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0,255,255,0.4);
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const contactRef = useRef(null);

  const testimonials = [
    {
      text: "Kerja sama dengan tim ini luar biasa! Mereka benar-benar memahami kebutuhan bisnis kami.",
      name: "John Doe",
      position: "CEO, Tech Company",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      text: "Solusi digital yang mereka tawarkan sangat inovatif dan efektif.",
      name: "Jane Smith",
      position: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      text: "Profesional, kreatif, dan selalu tepat waktu. Sangat direkomendasikan!",
      name: "Mike Johnson",
      position: "Startup Founder",
      image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      text: "Transformasi digital kami tidak akan mungkin terjadi tanpa bantuan mereka.",
      name: "Sarah Williams",
      position: "CTO, E-commerce Platform",
      image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      text: "Kualitas layanan di atas rata-rata. Mereka benar-benar ahli di bidangnya.",
      name: "David Brown",
      position: "Business Consultant",
      image: "https://randomuser.me/api/portraits/men/5.jpg"
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

    gsap.fromTo(
      contactRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animasi cards
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
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
          delay: index * 0.2,
          ease: 'back.out(1.7)' 
        }
      );
    });
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => 
      prev < Math.floor(testimonials.length / 3) ? prev + 1 : prev
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const getVisibleTestimonials = () => {
    const start = currentSlide * 3;
    const end = start + 3;
    return testimonials.slice(start, end);
  };

  return (
    <TestimonialContainer>
      <SectionTitle ref={titleRef}>What Our Clients Say</SectionTitle>
      <TestimonialWrapper>
      {testimonials.length > 3 && (
  <>
    <NavigationContainer>
      <NavigationButton 
        onClick={handlePrev} 
        disabled={currentSlide === 0}
      >
        <FaChevronLeft />
      </NavigationButton>
    </NavigationContainer>

    <NavigationRight>
      <NavigationButton 
        onClick={handleNext} 
        disabled={currentSlide >= Math.floor(testimonials.length / 3)}
      >
        <FaChevronRight />
      </NavigationButton>
    </NavigationRight>
  </>
)}

        <TestimonialGrid>
          {getVisibleTestimonials().map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              ref={el => cardsRef.current[index] = el}
            >
              <FaQuoteLeft color="#00ffff" size={40} />
              <p style={{color: 'white', fontStyle: 'italic', marginBottom: '20px'}}>
                "{testimonial.text}"
              </p>
              <div>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  style={{
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    marginBottom: '10px'
                  }} 
                />
                <h4 style={{color: 'white', margin: 0}}>{testimonial.name}</h4>
                <p style={{color: '#00ffff', margin: 0}}>{testimonial.position}</p> </div>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </TestimonialWrapper>
    </TestimonialContainer>
  );
}

export default TestimonialSection;