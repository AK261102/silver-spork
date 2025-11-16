import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PersonalLogo from './PersonalLogo';

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

const LogoWrapper = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const LoadingText = styled(motion.div)`
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Loader = () => {
  return (
    <StyledLoader
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <LogoWrapper
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <PersonalLogo size={150} animated={true} variant="full" />
        <LoadingText
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 1.5
          }}
        >
          Loading...
        </LoadingText>
      </LogoWrapper>
    </StyledLoader>
  );
};

export default Loader;
