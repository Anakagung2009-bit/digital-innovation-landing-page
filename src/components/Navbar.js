import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfo, 
  FaCube, 
  FaImage, 
  FaEnvelope 
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 1024px) {
    padding: 15px 30px;
  }

  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  color: #00ffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #00ffff;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #00ffff;
    
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: rgba(0,255,255,0.2);
  border: none;
  color: #00ffff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: rgba(0,255,255,0.3);
    transform: rotate(90deg);
  }
`;

const MobileSidebar = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.8));
  backdrop-filter: blur(15px);
  z-index: 1100;
  padding: 80px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 375px) {
    max-width: 100%;
    padding: 80px 20px;
  }
`;

const MobileNavLink = styled(Link)`
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  transition: all 0.3s ease;

  @media (max-width: 375px) {
    font-size: 16px;
    gap: 10px;
  }

  &:hover {
    color: #00ffff;
    transform: translateX(10px);
  }
`;

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const sidebarVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'tween',
        duration: 0.3
      }
    }
  };

  return (
    <>
      <Nav 
        variants={navVariants}
        initial="initial"
        animate="animate"
        style={{ 
          background: isScrolled 
            ? 'rgba(0, 0, 0, 0.8)' 
            : 'rgba(0, 0, 0, 0.4)' 
        }}
      >
        <Logo to="/">Digital Innovation</Logo>
        <NavLinks>
          <NavLink to="/"><FaHome /> Home</NavLink>
          <NavLink to="/about"><FaInfo /> About</NavLink>
          <NavLink to="/services"><FaCube /> Services</NavLink>
          <NavLink to="/portfolio"><FaImage /> Portfolio</NavLink>
          <NavLink to="/contact"><FaEnvelope /> Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={toggleMobileMenu}>
          <FaBars />
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileSidebar
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <MobileMenuButton 
              onClick={toggleMobileMenu} 
              style={{ position: 'absolute', top: 20, right: 20 }}
            >
              <FaTimes />
            </MobileMenuButton>
            <MobileNavLink to="/" onClick={toggleMobileMenu}>
              <FaHome /> Home
            </MobileNavLink>
            <MobileNavLink to="/about" onClick={toggleMobileMenu}>
              <FaInfo /> About
            </MobileNavLink>
            <MobileNavLink to="/services" onClick={toggleMobileMenu}>
              <FaCube /> Services
            </MobileNavLink>
            <MobileNavLink to="/portfolio" onClick={toggleMobileMenu}>
              <FaImage /> Portfolio
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={toggleMobileMenu}>
              <FaEnvelope /> Contact
            </MobileNavLink>
          </MobileSidebar>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;