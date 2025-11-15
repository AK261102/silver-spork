import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledLoader = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.darkNavy};
  z-index: 99;
`;

const LogoWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  width: 100%;
  height: 100%;
  fill: none;
`;

const Loader = () => {
  return (
    <StyledLoader
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <LogoWrapper>
        <Logo viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <motion.path
              stroke="#64ffda"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M 50, 5
                 L 11, 27
                 L 11, 72
                 L 50, 95
                 L 89, 73
                 L 89, 28
                 z"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            />
          </motion.g>
          <motion.text
            x="50"
            y="67"
            fill="#64ffda"
            fontSize="50"
            textAnchor="middle"
            fontFamily="SF Mono, Fira Code, monospace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Y
          </motion.text>
        </Logo>
      </LogoWrapper>
    </StyledLoader>
  );
};

export default Loader;
