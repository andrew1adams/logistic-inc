import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 1rem;
  background: ${({theme}) => theme.colors.backgroundComponents};
  align-items: center;
  border-radius: .5rem;
  padding: .5rem;
  transition: .2s;
  
  input {
    padding: .5rem;
    font-size: 1rem;
    border: none;
    border-radius: .5rem;
    background: transparent;
    width: 100%;

    &:hover, &:focus {
      outline: none;
    }
  }

  &:hover {
    outline: none;
    background: ${({theme}) => theme.colors.backgroundHover};
  }

  svg {
    margin: 0 .5rem;
    height: 1.5rem;
    width: 1.5rem;
  }
`;
