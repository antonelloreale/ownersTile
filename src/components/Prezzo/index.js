import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

function Prezzo({price, num}) {
  return (
    <Wrap>
      € {price.toLocaleString('it-IT')}
      <p>{num.length}</p>
    </Wrap>
  );
}

Prezzo.propTypes = {
  price: PropTypes.number,
  num: PropTypes.arrayOf(PropTypes.string),
};

Prezzo.defaultProps = {};

export default Prezzo;
