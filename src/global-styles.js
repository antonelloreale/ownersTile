import {injectGlobal} from 'styled-components';
import colors from './utils/colors';
import fonts from './utils/fonts';

injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    letter-spacing: 0.5px;
  }

  *::-webkit-scrollbar {
    width: 0px;  /* remove scrollbar space */
    background: transparent;  /* optional: just make scrollbar invisible */
  } 

  ::selection {
    /* background: ${colors.purpleLightissimo} !important;
    color: ${colors.gray} */
  }
  

  * { 
    box-sizing: border-box;
  }
  
  body {
    font-family: ${fonts.primary}
  }
`;
