import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

class Prezzo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {price} = this.props;
    const {num} = this.props;
    return (
      <Wrap>
        € {price.toLocaleString('it-IT')}
        <p>{num.length}</p>
      </Wrap>
    );
  }
}

Prezzo.propTypes = {
  price: PropTypes.number,
  num: PropTypes.arrayOf(PropTypes.string),
};

Prezzo.defaultProps = {};

export default Prezzo;
