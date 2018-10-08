import React from 'react';
// import PropTypes from 'prop-types';

import {Wrap} from './styles';

class Prezzo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const soldi = this.props.price;
    return (
      <Wrap>
        € {soldi.toLocaleString('it-IT')}
        <p>{this.props.num.length}</p>
      </Wrap>
    );
  }
}

Prezzo.propTypes = {};

Prezzo.defaultProps = {};

export default Prezzo;
