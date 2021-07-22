import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 2rem auto;
  border: 5px dashed ${({theme}) => theme.colors.backgroundComponents};
  height: 70vh;
  border-radius: .5rem;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
`;
