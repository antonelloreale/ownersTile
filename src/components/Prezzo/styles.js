import styled from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  color: white;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 500;
  z-index: 1;

  & > p {
    min-height: 100%;
    position: relative;
    right: 0;
    font-size: 11px;
    font-weight: 500;
  }
`;
