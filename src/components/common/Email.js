import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../../utils/constants';

const StyledEmailList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 40px;
  left: auto;
  z-index: 10;
  color: ${props => props.theme.colors.lightSlate};

  @media (max-width: 1080px) {
    right: 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.lightSlate};
  }
`;

const EmailLink = styled(motion.a)`
  margin: 20px auto;
  padding: 10px;
  font-family: ${props => props.theme.fonts.mono};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  text-decoration: none;
  color: inherit;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-3px);
    color: ${props => props.theme.colors.green};
  }
`;

const Email = () => {
  return (
    <StyledEmailList
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <EmailLink
        href={`mailto:${personalInfo.email}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        {personalInfo.email}
      </EmailLink>
    </StyledEmailList>
  );
};

export default Email;
