import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.isOpen ? '0' : '-300px'};
  width: 300px;
  height: 100vh;
  background: linear-gradient(135deg, #000428, #004e92);
  transition: right 0.3s ease;
  z-index: 1000;
  display: none;
  box-shadow: -5px 0 15px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 30px;
`;

const SidebarLink = styled(Link)`
  color: white;
  margin: 15px 0;
  text-decoration: none;
  font-size: 18px;
  position: relative;
  transition: color 0.3s ease;

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

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseButton onClick={closeSidebar}>
        <FaTimes />
      </CloseButton>
      <SidebarContent>
        <SidebarLink to="/" onClick={closeSidebar}>Home</SidebarLink>
        <SidebarLink to="/about" onClick={closeSidebar}>About</SidebarLink>
        <SidebarLink to="/services" onClick={closeSidebar}>Services</SidebarLink>
        <SidebarLink to="/portfolio" onClick={closeSidebar}>Portfolio</SidebarLink>
        <SidebarLink to="/contact" onClick={closeSidebar}>Contact</SidebarLink>
      </SidebarContent>
    </SidebarContainer>
  );
}

export default Sidebar;