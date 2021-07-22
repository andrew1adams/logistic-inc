import styled from 'styled-components';

export const Container = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.colors.text};

  ul li {
    font-family: var(--type-text-first);
    text-align: right;
  }

  .gear {
    grid-column: 2 / 3;
    font-family: var(--type-text-first);
    margin: 0 auto;
    height: 50px;
    width: 50px;
    cursor: pointer;
  }

  svg {
    fill: ${({theme}) => theme.colors.text};
  }

  .login {
    text-align: right;
  }
`;
