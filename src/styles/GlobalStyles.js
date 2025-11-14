// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${props => props.theme.colors.darkNavy};
    color: ${props => props.theme.colors.slate};
    font-family: ${props => props.theme.fonts.sans};
    font-size: 18px;
    line-height: 1.3;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${props => props.theme.colors.lightNavy};
    color: ${props => props.theme.colors.lightestSlate};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.lightestSlate};
    font-weight: 600;
    line-height: 1.1;
  }

  a {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
    transition: ${props => props.theme.transition};

    &:hover {
      color: ${props => props.theme.colors.green};
      outline: 0;
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
    font-family: inherit;
  }

  .section {
    padding: 100px 0;
    margin: 0 auto;
    max-width: 1000px;

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      padding: 80px 0;
    }
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(26px, 5vw, 32px);
    white-space: nowrap;

    &:before {
      position: relative;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: ${props => props.theme.colors.green};
      font-family: ${props => props.theme.fonts.mono};
      font-size: clamp(16px, 3vw, 20px);
      font-weight: 400;
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: ${props => props.theme.colors.lightestNavy};
    }
  }
`;

export default GlobalStyles;