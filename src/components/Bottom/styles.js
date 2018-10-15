import styled from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  width: 100%;
  height: 35%;
  background-color: ${props => (props.bgColor ? 'pink' : 'white')};
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 5px 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;

  & > p {
    position: relative;
    margin: 0;
    padding: 10px 0 0 0;
    font-size: 12px;
    font-weight: 500;
    color: #303030;
  }
`;
