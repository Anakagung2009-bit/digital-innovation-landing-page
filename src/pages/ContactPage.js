import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';
import { 
  FaUser, 
  FaEnvelope, 
  FaComment, 
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaAt
} from 'react-icons/fa';

const ContactContainer = styled.div`
  background: linear-gradient(135deg, #0f2027, #203a43); // Warna biru gelap
  color: white;
  min-height: 100vh;
  padding: 100px 50px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,105,255,0.05); // Sedikit ubah warna background
    transform: skewY(-5deg);
    z-index: 1;
  }
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1300px;
  margin: 0 auto;
  gap: 50px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const ContactTitle = styled.h1`
  color: #4facfe; // Warna biru muda
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 0 0 20px rgba(79,172,254,0.3);
`;

const ContactSubtitle = styled.p`
  color: rgba(255,255,255,0.7);
  margin-bottom: 30px;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: rgba(79,172,254,0.05); // Warna biru transparan
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(79,172,254,0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(79,172,254,0.1);
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(79,172,254,0.2);
  }
`;

const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: rgba(79,172,254,0.1);
  border-radius: 15px;
  color: #4facfe;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 50px;
  background: rgba(79,172,254,0.05);
  border: 1px solid rgba(79,172,254,0.2);
  border-radius: 10px;
  color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 15px rgba(79,172,254,0.3);
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 50px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(0,255,255,0.2);
    border-color: rgba(79,172,254,0.2);
  border-radius: 10px;
  color: white;
  min-height: 200px;
  resize: vertical;
  transition: all 0.3s ease;

 &:focus {
    outline: none;
    border-color: #4facfe;
    box-shadow: 0 0 15px rgba(79,172,254,0.3);
  }

`;

const InputIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0,255,255,0.7);
`;

const SubmitButton = styled.button`
  background-color: #00ffff;
  color: #121212;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s ease;
  font-weight: bold;

  &:hover {
    background-color: white;
    transform: scale(1.05);
  }
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const infoRefs = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const form = formRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
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

    // Animasi form
    tl.fromTo(form,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'back.out(1.5)'
      },
      '-=0.5'
    );

    // Animasi info kontak
    infoRefs.current.forEach((info, index) => {
      tl.fromTo(
        info,
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Tambahkan logika submit form
  };

  return (
    <ContactContainer ref={containerRef}>
      <ContactWrapper>
        <ContactInfo>
          <div ref={titleRef}>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactSubtitle>
              Kami senang mendengar dari Anda. Silakan isi formulir di bawah ini.
            </ContactSubtitle>
          </div>

          {[
            {
              icon: <FaMapMarkerAlt size={35} />,
              title: ' Lokasi',
              detail: '1234 Street Name, City, Country'
            },
            {
              icon: <FaPhone size={35} />,
              title: 'Telepon',
              detail: '+1 234 567 890'
            },
            {
              icon: <FaAt size={35} />,
              title: 'Email',
              detail: 'info@example.com'
            }
          ].map((info, index) => (
            <ContactDetail key={index} ref={el => infoRefs.current[index] = el}>
              <ContactIcon>{info.icon}</ContactIcon>
              <div>
                <h3>{info.title}</h3>
                <p>{info.detail}</p>
              </div>
            </ContactDetail>
          ))}
        </ContactInfo>

        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <FormGroup>
            <InputIcon><FaUser  /></InputIcon>
            <Input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <InputIcon><FaEnvelope /></InputIcon>
            <Input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <FormGroup>
            <InputIcon><FaComment /></InputIcon>
            <TextArea 
              name="message" 
              placeholder="Your Message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          <SubmitButton type="submit">
            <FaPaperPlane /> Send Message
          </SubmitButton>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
}

export default ContactPage;