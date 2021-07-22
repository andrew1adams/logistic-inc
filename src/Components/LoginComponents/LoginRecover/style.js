import styled from 'styled-components';

export const Container = styled.section`
  max-width: 100%;
  width: 70%;
  margin: 2rem auto;
  padding: .5rem 1rem;
  height: 70vh;

  h1 {
    margin: 1rem 0;
  }

  .subscription {
    width: 25rem;
    display: block;
    font-size: .7rem;
    text-align: center;
    gap: 1rem;
    letter-spacing: .1rem;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  max-width: 25rem;
  margin: 1rem auto;
  text-align: center; 
  border: 1px solid ${({theme}) => theme.colors.borderColor};
  border-radius: .5rem;
  padding: 2rem;
  box-sizing: border-box;
  word-break: break-word;
  background: ${({theme}) => theme.colors.background};
  font-family: var(--type-text-first);
  
  .titleForm {
    margin-bottom: 3rem;
  }

  .auxContainer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;

    hr {
      height: 1.5rem;
      border: 1px solid ${({theme}) => theme.colors.borderColor};
    }

    .forgotPassword {
      text-align: right;
    }

    .forgotPassword:hover {
      text-decoration: underline;
    }

    .register {
      text-align: left;
    }

    .register:hover {
      text-decoration: underline;
    }
  }
`;