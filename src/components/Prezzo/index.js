import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

export const Prezzo = props => {
  return (
    <Wrap>
      € {props.price.toLocaleString('it-IT')}
      <p>{props.num.length}</p>
    </Wrap>
  );
};

Prezzo.propTypes = {
  price: PropTypes.number,
  num: PropTypes.arrayOf(PropTypes.string),
};

Prezzo.defaultProps = {};

export default Prezzo;
