import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks, personalInfo } from '../../utils/constants';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: ${props => props.scrolled ? '70px' : '100px'};
  background-color: ${props => props.scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent'};
  backdrop-filter: blur(10px);
  transition: ${props => props.theme.transition};
  box-shadow: ${props => props.scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none'};

  @media (max-width: 1080px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 25px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: ${props => props.theme.colors.green};
    width: 42px;
    height: 42px;
    position: relative;

    &:hover {
      svg {
        fill: ${props => props.theme.colors.greenTint};
      }
    }

    svg {
      fill: none;
      transition: ${props => props.theme.transition};
      user-select: none;
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const OrderedList = styled.ol`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const ListItem = styled(motion.li)`
  margin: 0 5px;
  position: relative;
  counter-increment: item 1;
  font-size: 13px;
  font-family: ${props => props.theme.fonts.mono};

  a {
    padding: 10px;
    color: ${props => props.theme.colors.lightestSlate};

    &:before {
      content: '0' counter(item) '.';
      margin-right: 5px;
      color: ${props => props.theme.colors.green};
      font-size: 12px;
      text-align: right;
    }

    &:hover {
      color: ${props => props.theme.colors.green};
    }
  }
`;

const ResumeButton = styled(motion.a)`
  color: ${props => props.theme.colors.green};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.green};
  border-radius: 4px;
  padding: 0.75rem 1rem;
  font-size: 13px;
  font-family: ${props => props.theme.fonts.mono};
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${props => props.theme.transition};
  margin-left: 15px;

  &:hover {
    background-color: ${props => props.theme.colors.greenTint};
    transform: translateY(-3px);
  }
`;

const HamburgerButton = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  padding: 15px;
  background-color: transparent;
  color: ${props => props.theme.colors.green};
  font-size: 28px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileMenu = styled.aside`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: ${props => props.theme.colors.lightNavy};
    box-shadow: -10px 0px 30px -15px ${props => props.theme.colors.darkNavy};
    z-index: 9;
    transform: translateX(${props => props.menuOpen ? '0' : '100vw'});
    visibility: ${props => props.menuOpen ? 'visible' : 'hidden'};
    transition: ${props => props.theme.transition};
  }
`;

const MobileMenuNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: column;
  color: ${props => props.theme.colors.lightestSlate};
  font-family: ${props => props.theme.fonts.mono};
  text-align: center;

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(14px, 4vw, 18px);

      &:before {
        content: '0' counter(item) '.';
        display: block;
        margin-bottom: 5px;
        color: ${props => props.theme.colors.green};
        font-size: 14px;
      }

      a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: ${props => props.theme.transition};
        cursor: pointer;
        width: 100%;
        padding: 3px 20px 20px;

        &:hover {
          color: ${props => props.theme.colors.green};
        }
      }
    }
  }

  .resume-link {
    color: ${props => props.theme.colors.green};
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <Nav scrolled={scrolled}>
        <Logo
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="/" aria-label="home">
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <g>
                <path
                  stroke="currentColor"
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
                />
              </g>
              <text
                x="50"
                y="67"
                fill="currentColor"
                fontSize="50"
                textAnchor="middle"
              >
                Y
              </text>
            </svg>
          </a>
        </Logo>

        <Links>
          <OrderedList>
            {navLinks.map(({ url, name }, i) => (
              <ListItem
                key={i}
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <a href={url}>{name}</a>
              </ListItem>
            ))}
          </OrderedList>
          <ResumeButton
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Resume
          </ResumeButton>
        </Links>

        <HamburgerButton onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </HamburgerButton>
      </Nav>

      <MobileMenu menuOpen={menuOpen}>
        <MobileMenuNav>
          <ol>
            {navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url} onClick={toggleMenu}>{name}</a>
              </li>
            ))}
          </ol>
          <a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Resume
          </a>
        </MobileMenuNav>
      </MobileMenu>
    </>
  );
};

export default Navbar;
