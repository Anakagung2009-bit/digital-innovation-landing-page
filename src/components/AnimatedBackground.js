import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #000428, #004e92);
  background-size: 400% 400%;
  z-index: -1;
  overflow: hidden;
`;

function AnimatedBackground() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(backgroundRef.current, { 
      backgroundPosition: '200% 0%', 
      duration: 5,
      ease: 'power1.inOut'
    });
  }, []);

  return <BackgroundContainer ref={backgroundRef} />;
}

export default AnimatedBackground;