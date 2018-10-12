import styled from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  & > button {
    min-width: 60px;
    min-height: 30px;
    background-color: blue;
    border-radius: 3px;
    position: absolute;
    top: 10px;
    right: 30px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    justify-content: center;
    align-items: center;
  }

  & > p {
    position: relative;
    top: 0;
    left: 0;
  }
`;
