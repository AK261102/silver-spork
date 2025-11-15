import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experience } from '../../utils/constants';

const ExperienceSection = styled.section`
  max-width: 700px;
  margin: 0 auto;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;

  @media (max-width: 600px) {
    display: block;
  }
`;

const TabList = styled.div`
  position: relative;
  z-index: 3;
  width: max-content;
  padding: 0;
  margin: 0;
  list-style: none;

  @media (max-width: 600px) {
    display: flex;
    overflow-x: auto;
    width: calc(100% + 100px);
    margin-left: -50px;
    margin-bottom: 30px;
    padding: 0 50px;
  }

  @media (max-width: 480px) {
    width: calc(100% + 50px);
    margin-left: -25px;
    padding: 0 25px;
  }
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  padding: 0 20px 2px;
  border-left: 2px solid ${props => props.theme.colors.lightestNavy};
  background-color: transparent;
  color: ${props => props.isActive ? props.theme.colors.green : props.theme.colors.slate};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 13px;
  text-align: left;
  white-space: nowrap;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.lightNavy};
    color: ${props => props.theme.colors.green};
    outline: 0;
  }

  @media (max-width: 600px) {
    padding: 0 15px;
    border-left: 0;
    border-bottom: 2px solid ${props => props.theme.colors.lightestNavy};
    text-align: center;
  }
`;

const Highlighter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: 4px;
  background: ${props => props.theme.colors.green};
  transform: translateY(calc(${props => props.activeTabId} * 42px));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 120px;
    height: 2px;
    transform: translateX(calc(${props => props.activeTabId} * 120px));
  }
`;

const TabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const TabPanel = styled(motion.div)`
  width: 100%;
  height: auto;
  padding: 10px 5px;

  h3 {
    margin-bottom: 2px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    color: ${props => props.theme.colors.lightestSlate};

    .company {
      color: ${props => props.theme.colors.green};
    }
  }

  .range {
    margin-bottom: 25px;
    color: ${props => props.theme.colors.lightSlate};
    font-family: ${props => props.theme.fonts.mono};
    font-size: 13px;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 17px;

  li {
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
    line-height: 1.5;

    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.green};
      line-height: 1.5;
    }
  }
`;

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Map the experience data from constants.js to match the component's expected format
  const experienceData = experience.map(exp => ({
    company: exp.company,
    title: exp.title,
    url: exp.companyUrl,
    range: exp.duration,
    points: exp.points,
  }));

  return (
    <ExperienceSection id="experience">
      <motion.h2
        className="numbered-heading"
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Where I've Worked
      </motion.h2>
      <TabContainer>
        <TabList role="tablist">
          <Highlighter activeTabId={activeTabId} />
          {experienceData.map((exp, i) => (
            <TabButton
              key={i}
              isActive={activeTabId === i}
              onClick={() => setActiveTabId(i)}
              role="tab"
              aria-selected={activeTabId === i}
              aria-controls={`panel-${i}`}
            >
              {exp.company}
            </TabButton>
          ))}
        </TabList>
        <TabPanels>
          {experienceData.map((exp, i) => (
            <TabPanel
              key={i}
              id={`panel-${i}`}
              role="tabpanel"
              aria-hidden={activeTabId !== i}
              hidden={activeTabId !== i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: activeTabId === i ? 1 : 0, y: activeTabId === i ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3>
                <span>{exp.title}</span>
                <span className="company">
                  {' @ '}
                  <a href={exp.url} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                </span>
              </h3>
              <p className="range">{exp.range}</p>
              <StyledList>
                {exp.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </StyledList>
            </TabPanel>
          ))}
        </TabPanels>
      </TabContainer>
    </ExperienceSection>
  );
};

export default Experience;
