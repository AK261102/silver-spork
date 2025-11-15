import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { personalInfo } from '../../utils/constants';

const StyledHeroSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 768px) {
    padding-top: 80px;
    min-height: auto;
    padding-bottom: 10vh;
  }
`;

const Title = styled(motion.h1)`
  margin: 0 0 30px 4px;
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.mono};
  font-size: clamp(14px, 5vw, 16px);
  font-weight: 400;

  @media (max-width: 480px) {
    margin: 0 0 20px 2px;
  }
`;

const BigTitle = styled(motion.h2)`
  margin: 0;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: ${props => props.theme.colors.lightestSlate};
  line-height: 0.9;
`;

const Subtitle = styled(motion.h3)`
  margin-top: 10px;
  color: ${props => props.theme.colors.slate};
  line-height: 0.9;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
`;

const Description = styled(motion.p)`
  margin: 20px 0 0;
  max-width: 540px;
  font-size: 18px;
  line-height: 1.5;

  a {
    color: ${props => props.theme.colors.green};
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const CTAButton = styled(motion.a)`
  color: ${props => props.theme.colors.green};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.green};
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 14px;
  font-family: ${props => props.theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  margin-top: 50px;
  display: inline-block;

  &:hover {
    background-color: ${props => props.theme.colors.greenTint};
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.25rem;
  }
`;

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <StyledHeroSection>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>Hi, my name is</Title>
        <BigTitle variants={itemVariants}>{personalInfo.name}.</BigTitle>
        <Subtitle variants={itemVariants}>I build things for the web.</Subtitle>
        <Description variants={itemVariants}>
          I'm a software engineer specializing in building (and occasionally 
          designing) exceptional digital experiences. Currently, I'm focused on 
          building accessible, human-centered products at{' '}
          <a 
            href={personalInfo.companyUrl}
            target="_blank" 
            rel="noopener noreferrer"
          >
            {personalInfo.company}
          </a>
          .
        </Description>
        <CTAButton
          href={`mailto:${personalInfo.email}`}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch!
        </CTAButton>
      </motion.div>
    </StyledHeroSection>
  );
};

export default Hero;
