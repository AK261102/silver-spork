import React from 'react';
import { motion } from 'framer-motion';

const PersonalLogo = ({
  size = 100,
  color = '#64ffda',
  animated = true,
  variant = 'full', // 'full' for loader, 'simple' for favicon/navbar
  ...props
}) => {
  if (variant === 'simple') {
    // Simple AK logo for navbar/favicon
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g fill="none">
          {/* Hexagon background */}
          <path
            stroke={color}
            strokeWidth="2"
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28
               z"
          />
          {/* AK monogram */}
          <g fill={color} fontFamily="SF Mono, Fira Code, monospace">
            <text
              x="35"
              y="60"
              fontSize="32"
              fontWeight="bold"
            >
              A
            </text>
            <text
              x="55"
              y="60"
              fontSize="32"
              fontWeight="bold"
            >
              K
            </text>
          </g>
        </g>
      </svg>
    );
  }

  // Full animated logo for loader
  const MotionPath = animated ? motion.path : 'path';
  const MotionG = animated ? motion.g : 'g';
  const MotionText = animated ? motion.text : 'text';
  const MotionCircle = animated ? motion.circle : 'circle';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Outer hexagon */}
      <MotionPath
        stroke={color}
        strokeWidth="3"
        fill="none"
        d="M 100, 20
           L 30, 60
           L 30, 140
           L 100, 180
           L 170, 140
           L 170, 60
           z"
        {...(animated && {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.5, ease: 'easeInOut' }
        })}
      />

      {/* Inner decorative hexagon */}
      <MotionPath
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.3"
        d="M 100, 40
           L 50, 70
           L 50, 130
           L 100, 160
           L 150, 130
           L 150, 70
           z"
        {...(animated && {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 0.3 },
          transition: { duration: 1.5, delay: 0.3, ease: 'easeInOut' }
        })}
      />

      {/* Corner dots */}
      <MotionG
        {...(animated && {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.5, delay: 1 }
        })}
      >
        <circle cx="100" cy="20" r="3" fill={color} />
        <circle cx="30" cy="60" r="3" fill={color} />
        <circle cx="30" cy="140" r="3" fill={color} />
        <circle cx="100" cy="180" r="3" fill={color} />
        <circle cx="170" cy="140" r="3" fill={color} />
        <circle cx="170" cy="60" r="3" fill={color} />
      </MotionG>

      {/* A letter */}
      <MotionG
        {...(animated && {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 0.8 }
        })}
      >
        <path
          d="M 75 120 L 85 80 L 90 65 L 95 80 L 105 120"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 80 105 L 100 105"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </MotionG>

      {/* K letter */}
      <MotionG
        {...(animated && {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5, delay: 1 }
        })}
      >
        <path
          d="M 110 65 L 110 120"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 130 80 L 110 95 L 130 120"
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </MotionG>

      {/* Animated pulse circle */}
      {animated && (
        <MotionCircle
          cx="100"
          cy="100"
          r="90"
          stroke={color}
          strokeWidth="1"
          fill="none"
          opacity="0"
          animate={{
            r: [90, 100, 90],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 1.5,
          }}
        />
      )}
    </svg>
  );
};

export default PersonalLogo;