import styled from 'styled-components';

// import colors from '../../constants/colors'
// import breakpoints from '../../constants/breakpoints'
// import fonts from '../../constants/fonts'

export const Wrap = styled.div`
  width: 100%;
  height: 65%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  background-image: url(${props => props.foto});
  border-radius: 5px 5px 0 0;
  padding: 20px;
  border: 1px solid black;
  border-bottom: none;

  &::after {
    display: block;
    padding: 0;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      -180deg,
      rgba(238, 238, 238, 0) 0%,
      #000000 100%
    );
  }
  & > p {
    width: 38px;
    height: 18px;
    background: #4bd385;
    border-radius: 2px;
    font-size: 11px;
    font-weight: 600;
    color: white;
    display: flex;
    position: relative;
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
`;
