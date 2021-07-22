import styled from 'styled-components';

export const Container = styled.footer`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding: 1rem 3rem;
  border-top: 1px solid ${({theme}) => theme.colors.text};
  align-items: center;
  justify-content: center;
  gap: .5rem;

  h2 {
    font-size: 1rem;
    margin-bottom: .875rem;
  }

  p {
    font-size: .775rem;
  }

  .copy {
    text-align: center;
    border-left: 1px solid ${({theme}) => theme.colors.backgroundComponents};
    padding: 0 1rem;
  }
`;
