import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiInstagram,
  FiCodepen,
  FiStar,
  FiGitBranch
} from 'react-icons/fi';
import { socialMedia, personalInfo } from '../../utils/constants';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100px;
  padding: 30px 20px;
  text-align: center;
  background-color: ${props => props.theme.colors.darkNavy};
`;

const SocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    max-width: 270px;
    margin: 0 auto 20px;
    color: ${props => props.theme.colors.lightSlate};
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    li {
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
    }
  }
`;

const GitHubInfo = styled.div`
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

const GitHubButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.green};
  border-radius: 4px;
  font-size: 13px;
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.slate};
  transition: ${props => props.theme.transition};

  &:hover {
    background-color: ${props => props.theme.colors.greenTint};
    color: ${props => props.theme.colors.green};
    transform: translateY(-2px);
  }

  svg {
    width: 16px;
    height: 16px;
  }

  .count {
    background-color: ${props => props.theme.colors.lightNavy};
    padding: 2px 6px;
    border-radius: 3px;
    margin-left: 5px;
    color: ${props => props.theme.colors.green};
  }
`;

const Credit = styled.div`
  margin-top: 20px;
  color: ${props => props.theme.colors.slate};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 12px;
  line-height: 1.8;

  a {
    color: ${props => props.theme.colors.green};
    display: inline-block;
    text-decoration: none;
    position: relative;
    transition: ${props => props.theme.transition};

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 1px;
      position: absolute;
      bottom: -2px;
      background-color: ${props => props.theme.colors.green};
      transition: ${props => props.theme.transition};
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const Footer = () => {
  const [githubStars, setGithubStars] = useState(0);
  const [githubForks, setGithubForks] = useState(0);

  const getIcon = (name) => {
    switch(name.toLowerCase()) {
      case 'github': return <FiGithub />;
      case 'linkedin': return <FiLinkedin />;
      case 'twitter': return <FiTwitter />;
      case 'instagram': return <FiInstagram />;
      case 'codepen': return <FiCodepen />;
      default: return <FiGithub />;
    }
  };

  useEffect(() => {
    // Fetch GitHub repo stats from API
    fetch(`https://api.github.com/repos/AK261102/silver-spork`)
      .then(response => response.json())
      .then(data => {
        if (data.stargazers_count) setGithubStars(data.stargazers_count);
        if (data.forks_count) setGithubForks(data.forks_count);
      })
      .catch(error => console.log('GitHub API error:', error));
  }, []);

  return (
    <FooterContainer>
      <SocialLinks>
        <ul>
          {socialMedia.map(({ name, url }, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                {getIcon(name)}
              </a>
            </motion.li>
          ))}
        </ul>
      </SocialLinks>
      
      <GitHubInfo>
        <GitHubButton
          href="https://github.com/AK261102/silver-spork"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub />
          <span>View Source</span>
        </GitHubButton>

        <GitHubButton
          href="https://github.com/AK261102/silver-spork/fork"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGitBranch />
          <span>Fork</span>
          {githubForks > 0 && <span className="count">{githubForks}</span>}
        </GitHubButton>

        <GitHubButton
          href="https://github.com/AK261102/silver-spork/stargazers"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiStar />
          <span>Star</span>
          {githubStars > 0 && <span className="count">{githubStars}</span>}
        </GitHubButton>
      </GitHubInfo>
      
      <Credit>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div>
            Designed &amp; Built by{' '}
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {personalInfo.name}
            </a>
          </div>
          <div style={{ marginTop: '8px' }}>
            Inspired by{' '}
            <a 
              href="https://brittanychiang.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Brittany Chiang
            </a>
          </div>
        </motion.div>
      </Credit>
    </FooterContainer>
  );
};

export default Footer;
