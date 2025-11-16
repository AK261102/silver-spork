import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import { featuredProjects, personalProjects } from '../../utils/constants';

const ProjectsSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
`;

const FeaturedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 50px 0 0 0;
`;

const FeaturedProject = styled(motion.li)`
  position: relative;
  margin-bottom: 80px;
  background-color: ${props => props.theme.colors.lightNavy};
  border-radius: 8px;
  padding: 40px;
  transition: ${props => props.theme.transition};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 30px 25px;
  }
`;

const ProjectOverline = styled.p`
  margin: 0 0 10px;
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 13px;
  font-weight: 400;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 20px;
  color: ${props => props.theme.colors.lightestSlate};
  font-size: clamp(24px, 5vw, 28px);
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  margin: 0 0 25px;
  color: ${props => props.theme.colors.lightSlate};
  font-size: 17px;
  line-height: 1.6;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;

  li {
    margin: 0 20px 10px 0;
    color: ${props => props.theme.colors.slate};
    font-family: ${props => props.theme.fonts.mono};
    font-size: 13px;
    white-space: nowrap;

    &:before {
      content: '▹';
      color: ${props => props.theme.colors.green};
      margin-right: 5px;
    }
  }
`;

const SectionDivider = styled.div`
  margin: 100px 0 50px;
  text-align: center;
`;

const SectionHeading = styled.h3`
  color: ${props => props.theme.colors.lightestSlate};
  font-size: 28px;
  font-weight: 600;
  margin: 0;
`;

const PersonalProjectsGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PersonalProjectCard = styled(motion.li)`
  position: relative;
  transition: ${props => props.theme.transition};

  &:hover {
    .project-inner {
      transform: translateY(-7px);
    }
  }
`;

const ProjectInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  height: 100%;
  min-height: 280px;
  padding: 30px 25px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.lightNavy};
  transition: ${props => props.theme.transition};

  &:hover {
    background-color: ${props => props.theme.colors.navy};

    h3 {
      color: ${props => props.theme.colors.green};
    }
  }
`;

const ProjectTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProjectLink = styled.a`
  color: ${props => props.theme.colors.lightSlate};
  transition: ${props => props.theme.transition};

  &:hover {
    color: ${props => props.theme.colors.green};
    transform: translateY(-3px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FolderIcon = styled(FiFolder)`
  color: ${props => props.theme.colors.green};
  width: 40px;
  height: 40px;
`;

const PersonalProjectTitle = styled.h3`
  margin: 0 0 15px;
  color: ${props => props.theme.colors.lightestSlate};
  font-size: 22px;
  font-weight: 600;
  transition: ${props => props.theme.transition};
`;

const PersonalProjectDescription = styled.p`
  color: ${props => props.theme.colors.lightSlate};
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 auto;
  flex-grow: 1;
`;

const PersonalTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 20px 0 0 0;
  list-style: none;

  li {
    font-family: ${props => props.theme.fonts.mono};
    font-size: 12px;
    line-height: 1.75;
    margin-right: 15px;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.slate};
  }
`;

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ProjectsSection id="projects">
      <motion.h2
        className="numbered-heading"
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Things I've Built
      </motion.h2>

      {/* Featured Projects */}
      <FeaturedList>
        {featuredProjects.map((project, i) => (
          <FeaturedProject
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ProjectOverline>Featured Project</ProjectOverline>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.tech.map((tech, j) => (
                <li key={j}>{tech}</li>
              ))}
            </TechList>
          </FeaturedProject>
        ))}
      </FeaturedList>

      {/* Personal Projects */}
      <SectionDivider>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SectionHeading>Personal Projects</SectionHeading>
        </motion.div>
      </SectionDivider>

      <PersonalProjectsGrid>
        {personalProjects.map((project, i) => (
          <PersonalProjectCard
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
          >
            <ProjectInner className="project-inner">
              <ProjectTop>
                <FolderIcon />
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Link"
                    >
                      <FiGithub />
                    </ProjectLink>
                  )}
                  {project.external && (
                    <ProjectLink
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="External Link"
                    >
                      <FiExternalLink />
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectTop>
              <PersonalProjectTitle>{project.title}</PersonalProjectTitle>
              <PersonalProjectDescription>{project.description}</PersonalProjectDescription>
              <PersonalTechList>
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </PersonalTechList>
            </ProjectInner>
          </PersonalProjectCard>
        ))}
      </PersonalProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
