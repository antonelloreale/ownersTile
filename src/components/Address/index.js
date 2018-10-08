import React from 'react';
// import PropTypes from 'prop-types';


import {Wrap} from './styles';

class Address extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap>
        {this.props.address}
      </Wrap>
    );
  }
}

Address.propTypes = {};

Address.defaultProps = {};

export default Address;
