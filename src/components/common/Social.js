import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram
} from 'react-icons/fi';
import { socialMedia } from '../../utils/constants';

const StyledSocialList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;
  color: ${props => props.theme.colors.lightSlate};

  @media (max-width: 1080px) {
    left: 20px;
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

const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.lightSlate};
  }
`;

const SocialItem = styled(motion.li)`
  &:last-of-type {
    margin-bottom: 20px;
  }

  a {
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: ${props => props.theme.transition};

    &:hover {
      transform: translateY(-3px);
      color: ${props => props.theme.colors.green};
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const Social = () => {
  const getIcon = (name) => {
    switch(name.toLowerCase()) {
      case 'github': return <FiGithub />;
      case 'linkedin': return <FiLinkedin />;
      case 'twitter': return <FiTwitter />;
      case 'instagram': return <FiInstagram />;
      default: return <FiGithub />;
    }
  };

  return (
    <StyledSocialList
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <SocialList>
        {socialMedia.map(({ name, url }, i) => (
          <SocialItem
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
          >
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              {getIcon(name)}
            </a>
          </SocialItem>
        ))}
      </SocialList>
    </StyledSocialList>
  );
};

export default Social;
