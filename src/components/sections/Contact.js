import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }
`;

const Overline = styled.p`
  display: block;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 16px;
  font-weight: 400;

  &:before {
    content: '03.';
    margin-right: 5px;
    font-size: 14px;
  }
`;

const Title = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  color: ${props => props.theme.colors.lightestSlate};
`;

const Description = styled.p`
  margin: 25px 0;
  font-size: 18px;
  line-height: 1.5;

  a {
    color: ${props => props.theme.colors.green};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const EmailButton = styled(motion.a)`
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
  display: inline-block;
  margin-top: 50px;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.greenTint};
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <ContactSection id="contact">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Overline>What's Next?</Overline>
        <Title>Get In Touch</Title>
        <Description>
          Although I'm currently looking for any new opportunities, my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </Description>
        <EmailButton
          href="mailto:your.email@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Say Hello
        </EmailButton>
      </motion.div>
    </ContactSection>
  );
};

export default Contact;
