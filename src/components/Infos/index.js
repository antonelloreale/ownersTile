import React from 'react';
// import PropTypes from 'prop-types';


import {Wrap} from './styles';

class Infos extends React.Component { 

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap>
        {this.props.beds} beds, {this.props.baths} baths, {this.props.meters} mq
      </Wrap>
    );
  }
}

Infos.propTypes = {};

Infos.defaultProps = {};

export default Infos;
