import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills, personalInfo } from '../../utils/constants';

const AboutSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 50px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TextContent = styled.div`
  p {
    margin: 0 0 15px 0;
    font-size: 17px;
    line-height: 1.5;

    &:last-of-type {
      margin: 0;
    }
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  grid-gap: 0 10px;
  padding: 0;
  margin: 20px 0 0 0;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-family: ${props => props.theme.fonts.mono};
    font-size: 13px;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.green};
      font-size: 14px;
      line-height: 12px;
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
`;

const ImageContainer = styled.div`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.green};

  &:hover,
  &:focus {
    background: transparent;
    outline: 0;

    &:after {
      top: 15px;
      left: 15px;
    }

    .img {
      filter: none;
      mix-blend-mode: normal;
    }
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: ${props => props.theme.transition};
    top: 0;
    left: 0;
    background-color: ${props => props.theme.colors.darkNavy};
    mix-blend-mode: screen;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    transition: ${props => props.theme.transition};
    border: 2px solid ${props => props.theme.colors.green};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const StyledImage = styled.div`
  position: relative;
  border-radius: 4px;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  transition: ${props => props.theme.transition};
  width: 100%;
  height: 300px;
  background-color: ${props => props.theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Placeholder - replace with actual image */
  &:before {
    content: 'Your Photo';
    color: ${props => props.theme.colors.lightestSlate};
    font-family: ${props => props.theme.fonts.mono};
  }
`;

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Combine all skills into a single list for display
  const allSkills = [
    ...skills.languages.slice(0, 3),
    ...skills.frameworks.slice(0, 3),
    ...skills.databases.slice(0, 2)
  ];

  return (
    <>
      <AboutSection id="about">
        <motion.h2 
          className="numbered-heading"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <SectionContent>
          <TextContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p>
                Hello! My name is {personalInfo.name} and I enjoy creating things that live on the internet. 
                My interest in web development started back in college when I decided to build 
                my first web application — turns out hacking together a custom blog taught me 
                a lot about HTML & CSS!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at{' '}
                <a href={personalInfo.companyUrl} style={{ color: '#64ffda' }}>{personalInfo.company}</a>,
                building high-throughput systems and developing healthcare solutions.
                My main focus these days is building accessible, inclusive products and digital 
                experiences for a variety of clients.
              </p>
              <p>
                I'm currently working on microservices handling 100K+ requests per hour with 99.95% 
                uptime. I also recently developed a multi-agent AI chatbot system for healthcare 
                applications using cutting-edge LLM technology.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SkillsList>
                {allSkills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </SkillsList>
            </motion.div>
          </TextContent>
          <ImageWrapper>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ImageContainer>
                <StyledImage className="img" />
              </ImageContainer>
            </motion.div>
          </ImageWrapper>
        </SectionContent>
      </AboutSection>
    </>
  );
};

export default About;
