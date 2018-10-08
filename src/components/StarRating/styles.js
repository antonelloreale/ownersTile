import styled from "styled-components";

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 10px;
  & > div {
    min-width: 10px;
    min-height: 6px;
    position: relative;
    border: 1px solid #ffde59;
    border-radius: 3px 1px;
    margin: 6px 0 6px 5px;
  }
`;
