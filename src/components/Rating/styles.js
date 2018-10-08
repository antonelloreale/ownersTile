import styled from "styled-components";

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  /* & > div {
    position: relative;
    width: 10px;
    height: 6px;
    background: #ffde59;
    border-radius: 3px 1px;
    margin: 6px 0 6px 5px;
  } */
  width: 155px;
  height: 18px;
  background-color: #00bb6f;
  border-radius: 2px;
  position: absolute;
  top: -10px;
  color: white;
  font-size: 11px;
  font-weight: 600;
  text-align: right;
  line-height: 16px;
  padding: 2px 4px 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;

  & > p {
    width: 100%;
    position: relative;
    padding: 2px 5px;
  }
`;
