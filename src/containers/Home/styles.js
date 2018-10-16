import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: 340px;
  grid-gap: 10px;
  align-items: flex-start;
  & > div {
    display: flex;
  }
  & > button {
    min-width: 60px;
    min-height: 30px;
    background-color: blue;
    border-radius: 3px;
    position: fixed;
    top: 10px;
    right: 30px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
`;
