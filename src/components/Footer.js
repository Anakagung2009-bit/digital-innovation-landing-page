import React, { useState } from 'react';
import styled from '@emotion/styled';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaPaperPlane
} from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #121212, #1e1e1e);
  color: white;
  padding: 80px 50px;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #00ffff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const FooterTitle = styled.h3`
  color: #00ffff;
  margin-bottom: 20px;
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: #00ffff;
  }
`;

const FooterLink = styled.a`
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;

  &:hover {
    color: #00ffff;
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: rgba(255,255,255,0.7);
  font-size: 24px;
  transition: all 0.3s ease;

  &:hover {
    color: #00ffff;
    transform: scale(1.2) rotate(360deg);
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  background: rgba(255,255,255,0.1);
  border-radius: 30px;
  overflow: hidden;
  margin-top: 20px;
  max-width: 400px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;

const NewsletterInput = styled.input`
  flex-grow: 1;
  padding: 12px 20px;
  background: transparent;
  border: none;
  color: white;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;

const NewsletterButton = styled.button`
  background: #00ffff;
  color: #121212;
  border: none;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 10px 15px;
  }

  &:hover {
    background: white;
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  padding: 20px;
  background: rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
  color: rgba(255,255,255,0.6);
  margin-top: 40px;
  width: 100%;
  bottom: 0;
  left: 0;

  @media (max-width: 768px) {
    padding: 15px 10px;
    font-size: 0.9rem;
  }
`;

function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika submit newsletter
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>Digital Innovation</FooterLogo>
          <p>
            Kami adalah ekosistem inovasi digital yang mentransformasi 
            ide bisnis menjadi solusi teknologi canggih.
          </p>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook"><FaFacebook /></SocialIcon>
            <SocialIcon href="#" aria-label="Twitter"><FaTwitter /></SocialIcon>
            <SocialIcon href="#" aria-label="Instagram"><FaInstagram /></SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Layanan</FooterTitle>
          <FooterLink href="#">Web Development</FooterLink>
          <FooterLink href="#">Mobile App Design</FooterLink>
          <FooterLink href="#">Digital Marketing</FooterLink>
          <FooterLink href="#">Cloud Solutions</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Hubungi Kami</FooterTitle>
          <FooterLink href="tel:+6281234567890">
            <FaPhone /> +62 812 3456 7890
          </FooterLink>
          <FooterLink href="mailto:info@digitalinnovation.com">
            <FaEnvelope /> info@digitalinnovation.com
          </FooterLink>
          <FooterLink href="#">
            <FaMapMarkerAlt /> Jakarta, Indonesia
          </FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Newsletter</FooterTitle>
          <p>Dapatkan update terbaru dari kami</p>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput 
              type="email" 
              placeholder="Masukkan email Anda" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <NewsletterButton type="submit">
              <FaPaperPlane /> Kirim
            </NewsletterButton>
          </NewsletterForm>
        </FooterSection>
      </FooterContent>

      <CopyrightSection>
        © {new Date().getFullYear()} Digital Innovation Studio. All Rights Reserved.
      </CopyrightSection>
    </FooterContainer>
  );
}

export default Footer;