import React from 'react';
// import PropTypes from 'prop-types';


import {Wrap} from './styles';

class NumFoto extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap>
       {this.props.num.length}
      </Wrap>
    );
  }
}

NumFoto.propTypes = {};

NumFoto.defaultProps = {};

export default NumFoto;
