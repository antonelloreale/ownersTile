import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

class NumFoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {num} = this.props;
    return <Wrap>{num.length}</Wrap>;
  }
}

NumFoto.propTypes = {
  num: PropTypes.arrayOf(PropTypes.string),
};

NumFoto.defaultProps = {};

export default NumFoto;
