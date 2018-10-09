import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const address = this.props.address;
    return <Wrap>{address}</Wrap>;
  }
}

Address.propTypes = {
  address: PropTypes.string,
};

Address.defaultProps = {};

export default Address;
