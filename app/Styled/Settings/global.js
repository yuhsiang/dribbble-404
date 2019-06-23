import { createGlobalStyle } from 'styled-components';

export const FEATURE_TITLE_HEIGHT = 45;
export const FEATURE_TITLE_TEXT_HEIGHT = 25;

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-size: 16px;
  }
  a{
    color: inherit;
    transition: all 0.1s ease-in;
    &:hover{
      color: rgba(0,0,0,0.9);
      opacity: 0.9;
    }
  }

  body {
    font-family: 'Microsoft JhengHei', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Microsoft JhengHei', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  #app {
    height: 100%;
    width: 100%;
    background-color: white;
    position:relative;
    white-space: nowrap;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }`;
