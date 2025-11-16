// src/App.js
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

// Import components
import Loader from './components/common/Loader';
import Navbar from './components/common/Navbar';
import Social from './components/common/Social';
import Email from './components/common/Email';
import AnimatedBackground3D from './components/common/AnimatedBackground3D';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 0 150px;
  counter-reset: section;
  margin: 0 auto;
  max-width: 1600px;
  min-height: 100vh;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <StyledContent>
        <AnimatePresence>
          {isLoading ? (
            <Loader key="loader" />
          ) : (
            <>
              <AnimatedBackground3D />
              <Navbar />
              <Social />
              <Email />
              <Main id="content">
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
              </Main>
              <Footer />
            </>
          )}
        </AnimatePresence>
      </StyledContent>
    </ThemeProvider>
  );
}

export default App;