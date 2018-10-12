import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  & > div {
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-gap: 10px;
  }
`;
