import styled from 'styled-components';

export const Container = styled.button`
  margin: 2rem 0;
  max-width: 15rem;
  padding: .875rem 3rem;
  background: ${({theme}) => theme.colors.backgroundComponents};
  border: none;
  border-radius: .5rem;
  transition: .2s;
  cursor: pointer;
  font-size: 14px;
  color: ${({theme}) => theme.colors.text};

  &:hover {
    background: ${({theme}) => theme.colors.backgroundHover};
  }
`;
