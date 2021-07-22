import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  transition: .5s;

  body {
    font-size: 14px;
    max-width: 50rem;
    padding: 0px 1rem;
    margin: 0px auto;
    background: ${({theme}) => theme.colors.background};
    color: ${({theme}) => theme.colors.text};

    --type-text-first: 'Roboto', sans-serif;
    --type-text-second: 'Encode Sans SC', sans-serif;
    font-family: var(--type-text-first);
  }

  h1, h2, h3, h4, p {
    margin: 0px;
  }

  ul, li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.text};
  }

  input {
    font-family: var(--type-text-first);
    color: ${({theme}) => theme.colors.text};
  }

  button, a {
    font-family: var(--type-text-first);
  }

  .title {
    font-size: 2rem;
    letter-spacing: .1rem;
    font-weight: normal;
    font-family: var(--type-text-second);
  }

  // WEBKITS

  ::-webkit-input-placeholder {
    color: ${({theme}) => theme.colors.text};
    font-family: var( --type-text-first);
    font-size: 14px;
  }

  :-moz-placeholder {
    color: orange;
    font-family: var( --type-text-first);
    font-size: 14px;
  }

  ::-moz-placeholder {
    color: orange;  
    font-family: var( --type-text-first);
    font-size: 14px;
  }

  :-ms-input-placeholder {  
    color: orange;  
    font-family: var( --type-text-first);
    font-size: 14px;
  }

  // ANIMATIONS

  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .4s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: initial;
      transform: initial;
    }
  }

  .infiniteSpin {
    animation: ${({theme}) => theme.animation}
  }

  @keyframes spin {
    from {
      transform:rotate(0deg);
    }
    to {
      transform:rotate(360deg);
    }
  }

  .reverseSpin {
    animation: reverseSpin 10s linear infinite;
  }

  @keyframes reverseSpin {
    from {
      transform:rotate(360deg);
    }
    to {
      transform:rotate(0deg);
    }
  }
`
