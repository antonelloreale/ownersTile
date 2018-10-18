import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 250px);
  grid-template-rows: 340px;
  grid-gap: 10px;
  align-items: flex-start;
  padding: 50px 20px 20px 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 250px);
  }
  @media (max-width: 550px) {
    grid-template-columns: 250px;
  }
  & > p {
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    padding: 10px;
    background-color: white;
    justify-content: center;
    align-items: center;

    & > button {
      position: relative;
      min-height: 20px;
      font-size: 10px;
      margin: 0 5px;
    }
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
  & > input {
    position: absolute;
    top: 10px;
    left: 30px;
    height: 30px;
    border-radius: 3px;
    font-size: 15px;
  }
`;
