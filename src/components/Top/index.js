import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';
import Prezzo from '../../components/Prezzo';

export const Top = props => {
  function Banner(banner) {
    if (banner === true) {
      return <p> New</p>;
    } else {
      return null;
    }
  }
  return (
    <Wrap foto={props.foto}>
      <Prezzo price={props.price} num={props.num} />
      {Banner(props.banner)}
    </Wrap>
  );
};
Top.propTypes = {
  foto: PropTypes.string,
  price: PropTypes.number,
  num: PropTypes.arrayOf(PropTypes.string),
  banner: PropTypes.bool,
};

Top.defaultProps = {};

export default Top;
