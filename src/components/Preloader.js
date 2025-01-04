import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { gsap } from 'gsap';

const PreloaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f2027, #203a43);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

const LoadingWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #4facfe, #00f2ff);
  border-radius: 50%;
  position: relative;
`;

const LoadingText = styled.h2`
  color: #4facfe;
  font-size: 2rem;
  margin-top: 20px;
  opacity: 0;
`;

const LoadingDescription = styled.p`
  color: rgba(255,255,255,0.7);
  margin-top: 10px;
`;

const ProgressContainer = styled.div`
  width: 300px;
  height: 10px;
  background: rgba(79, 172, 254, 0.2);
  border-radius: 5px;
  margin-top: 20px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  width: 0;
  height: 100%;
  background: linear-gradient(to right, #4facfe, #00f2ff);
  border-radius: 5px;
`;

function Preloader({ onComplete }) {
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const descriptionRef = useRef(null);
  
  const [loadingStage, setLoadingStage] = useState('Mempersiapkan Halaman');

  useEffect(() => {
    // Simulasi loading tahapan
    const loadingStages = [
      'Memuat Komponen Utama',
      'Memproses Aset Digital',
      'Menyiapkan Animasi',
      'Mengoptimasi Performa',
      'Hampir Selesai...'
    ];

    const stageInterval = setInterval(() => {
      const randomStage = loadingStages[Math.floor(Math.random() * loadingStages.length)];
      setLoadingStage(randomStage);
    }, 1000);

    const tl = gsap.timeline({
      onComplete: () => {
        clearInterval(stageInterval);
        onComplete();
      }
    });

    // Animasi logo
    tl.fromTo(
      logoRef.current,
      { 
        scale: 0, 
        rotation: -180 
      },
      { 
        scale: 1, 
        rotation: 0, 
        duration: 1, 
        ease: 'back.out(1.7)' 
      }
    );

    // Animasi teks
    tl.fromTo(
      textRef.current,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: 'power3.out' 
      }
    );

    // Animasi deskripsi
    tl.fromTo(
      descriptionRef.current,
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6,
        ease: 'power3.out' 
      }
    );

    // Animasi progress bar dengan variasi durasi
    tl.fromTo(
      progressRef.current,
      { 
        width: '0%' 
      },
      { 
        width: '100%', 
        duration: 3 + Math.random(), // Variasi durasi
        ease: 'power2.inOut' 
      }
    );

    // Animasi bergelombang pada logo
    gsap.to(logoRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power1.inOut'
    });

    return () => {
      tl.kill();
      clearInterval(stageInterval);
    };
  }, [onComplete]);

  return (
    <PreloaderContainer>
      <LoadingWrapper>
        <LogoContainer>
          <Logo ref={logoRef} />
        </LogoContainer>
        
        <LoadingText ref={textRef}>
          Memuat Konten Digital
        </LoadingText>
        
        <LoadingDescription ref={descriptionRef}>
          {loadingStage}
        </LoadingDescription>
        
        <ProgressContainer>
          <ProgressBar ref={progressRef} />
        </ProgressContainer>
      </LoadingWrapper>
    </PreloaderContainer>
  );
}

export default Preloader;