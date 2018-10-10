import styled from 'styled-components';

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
  min-width: 155px;
  min-height: 18px;
  background-color: #00bb6f;
  border-radius: 2px;
  position: absolute;
  top: -10px;
  color: white;
  font-size: 11px;
  font-weight: 600;
  text-align: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: right;
  & > p {
    position: relative;
    width: 100%;
    margin: 0;
    padding: 0 6px 0 0;
    z-index: 1;
  }
  & > div {
    min-width: 10px;
    min-height: 6px;
    position: relative;
    border: 1px solid #ffde59;
    border-radius: 3px 1px;
    margin: 6px 0 6px 5px;
  }
`;
