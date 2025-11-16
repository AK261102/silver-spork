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
    font-size: 20px;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: ${props => props.theme.colors.lightNavy};
    color: ${props => props.theme.colors.lightestSlate};
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.darkNavy};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.slate};
    border: 3px solid ${props => props.theme.colors.darkNavy};
    border-radius: 10px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.lightestSlate};
    font-weight: 600;
    line-height: 1.1;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(50px, 8vw, 90px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(45px, 8vw, 70px);
  }

  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 40px;
    width: 100%;
    font-size: clamp(32px, 5vw, 40px);
    white-space: nowrap;

    &:before {
      position: relative;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: ${props => props.theme.colors.green};
      font-family: ${props => props.theme.fonts.mono};
      font-size: clamp(20px, 3vw, 24px);
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

      @media (max-width: 1080px) {
        width: 200px;
      }

      @media (max-width: 768px) {
        width: 100%;
      }

      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
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

  section {
    padding: 100px 0;

    @media (max-width: 768px) {
      padding: 80px 0;
    }

    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }

  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: 20px;

      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;

        &:before {
          content: '▹';
          position: absolute;
          left: 0;
          color: ${props => props.theme.colors.green};
          font-size: 20px;
          line-height: 1;
        }
      }
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  .btn {
    color: ${props => props.theme.colors.green};
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.green};
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: 16px;
    font-family: ${props => props.theme.fonts.mono};
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: ${props => props.theme.transition};

    &:hover,
    &:focus {
      background-color: ${props => props.theme.colors.greenTint};
      outline: none;
    }

    &:after {
      display: none !important;
    }
  }

  .btn-big {
    font-size: 18px;
    padding: 1.25rem 1.75rem;
  }
`;

export default GlobalStyles;
