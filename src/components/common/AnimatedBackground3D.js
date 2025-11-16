import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: ${props => props.theme.colors.darkNavy};
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.darkNavy} 0%,
    ${props => props.theme.colors.navy} 50%,
    ${props => props.theme.colors.darkNavy} 100%
  );
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
`;

const GradientOrb = styled(motion.div)`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(
    circle at center,
    ${props => props.theme.colors.greenTint} 0%,
    transparent 70%
  );
  filter: blur(40px);
  opacity: 0.4;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const GeometricShape = styled(motion.div)`
  position: absolute;
  pointer-events: none;

  &.hexagon {
    width: 100px;
    height: 100px;
    background: ${props => props.theme.colors.green};
    opacity: 0.03;
    clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);

    @media (max-width: 768px) {
      width: 60px;
      height: 60px;
    }
  }

  &.diamond {
    width: 80px;
    height: 80px;
    background: transparent;
    border: 1px solid ${props => props.theme.colors.green};
    opacity: 0.1;
    transform: rotate(45deg);

    @media (max-width: 768px) {
      width: 50px;
      height: 50px;
    }
  }

  &.circle-outline {
    width: 120px;
    height: 120px;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 50%;
    opacity: 0.08;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }

  &.triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 86px solid ${props => props.theme.colors.green};
    opacity: 0.04;

    @media (max-width: 768px) {
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-bottom: 52px solid ${props => props.theme.colors.green};
    }
  }
`;

const AnimatedBackground3D = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };

    setCanvasSize();

    // Particle class with 3D properties
    class Particle {
      constructor() {
        this.reset();
        this.originalY = this.y;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2000;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.vz = (Math.random() - 0.5) * 2;
        this.radius = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        // Basic movement
        this.x += this.vx;
        this.y += this.vy - scrollRef.current * 0.1; // React to scroll
        this.z += this.vz;

        // 3D boundaries
        if (this.x < -50) this.x = width + 50;
        if (this.x > width + 50) this.x = -50;
        if (this.y < -50) this.y = height + 50;
        if (this.y > height + 50) this.y = -50;
        if (this.z < 0 || this.z > 2000) this.vz *= -1;

        // Mouse interaction with 3D depth consideration
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const depthFactor = (2000 - this.z) / 2000;

        if (distance < 150 * depthFactor) {
          const force = (150 - distance) / 150;
          this.vx += (dx / distance) * force * 0.02 * depthFactor;
          this.vy += (dy / distance) * force * 0.02 * depthFactor;
        }

        // Damping
        this.vx *= 0.99;
        this.vy *= 0.99;

        // Limit velocity
        this.vx = Math.max(-1, Math.min(1, this.vx));
        this.vy = Math.max(-1, Math.min(1, this.vy));
      }

      draw() {
        const perspective = 2000 / (2000 - this.z);
        const projectedX = (this.x - width / 2) * perspective + width / 2;
        const projectedY = (this.y - height / 2) * perspective + height / 2;
        const projectedRadius = Math.max(0.1, this.radius * perspective); // Ensure radius is never negative or zero
        const opacity = this.opacity * ((2000 - this.z) / 2000);

        // Skip drawing if particle is outside viewport
        if (projectedX < -50 || projectedX > width + 50 ||
            projectedY < -50 || projectedY > height + 50) {
          return;
        }

        // Glow effect with safe radius
        const glowRadius = Math.max(1, projectedRadius * 3);
        const gradient = ctx.createRadialGradient(
          projectedX, projectedY, 0,
          projectedX, projectedY, glowRadius
        );
        gradient.addColorStop(0, `rgba(100, 255, 218, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(100, 255, 218, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(projectedX, projectedY, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, projectedRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 255, 218, ${opacity * 0.8})`;
        ctx.fill();
      }
    }

    // Create particles
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Draw connections with 3D depth
    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const distance = Math.sqrt(
            Math.pow(p1.x - p2.x, 2) +
            Math.pow(p1.y - p2.y, 2) +
            Math.pow((p1.z - p2.z) * 0.1, 2)
          );

          if (distance < 120) {
            const opacity = (1 - distance / 120) * 0.2;
            const perspective1 = 2000 / (2000 - p1.z);
            const perspective2 = 2000 / (2000 - p2.z);

            const x1 = (p1.x - width / 2) * perspective1 + width / 2;
            const y1 = (p1.y - height / 2) * perspective1 + height / 2;
            const x2 = (p2.x - width / 2) * perspective2 + width / 2;
            const y2 = (p2.y - height / 2) * perspective2 + height / 2;

            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Draw midpoint glow
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            const glowRadius = 2;

            const glowGradient = ctx.createRadialGradient(
              midX, midY, 0,
              midX, midY, glowRadius
            );
            glowGradient.addColorStop(0, `rgba(100, 255, 218, ${opacity * 0.5})`);
            glowGradient.addColorStop(1, 'transparent');

            ctx.beginPath();
            ctx.arc(midX, midY, glowRadius, 0, Math.PI * 2);
            ctx.fillStyle = glowGradient;
            ctx.fill();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Sort particles by z-index for proper depth rendering
      particlesRef.current.sort((a, b) => b.z - a.z);

      // Draw connections first (behind particles)
      drawConnections();

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Event handlers
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY * 0.001;
    };

    const handleResize = () => {
      setCanvasSize();
      // Reinitialize particles on resize
      particlesRef.current.forEach(particle => particle.reset());
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <BackgroundWrapper>
      <Canvas ref={canvasRef} />

      {/* Animated gradient orbs */}
      <GradientOrb
        style={{ top: '-20%', left: '-10%' }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GradientOrb
        style={{ bottom: '-20%', right: '-10%' }}
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating geometric shapes */}
      <GeometricShape
        className="hexagon"
        style={{ top: '15%', left: '10%' }}
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <GeometricShape
        className="diamond"
        style={{ top: '60%', right: '15%' }}
        animate={{
          rotate: -360,
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        className="circle-outline"
        style={{ bottom: '25%', left: '20%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        className="triangle"
        style={{ top: '40%', right: '30%' }}
        animate={{
          rotate: [0, 360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        className="hexagon"
        style={{ bottom: '15%', right: '40%' }}
        animate={{
          rotate: -360,
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <GeometricShape
        className="diamond"
        style={{ top: '80%', left: '50%' }}
        animate={{
          rotate: 360,
          x: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </BackgroundWrapper>
  );
};

export default AnimatedBackground3D;