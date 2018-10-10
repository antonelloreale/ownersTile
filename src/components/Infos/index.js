import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {beds, baths, meters} = this.props;

    return (
      <Wrap>
        {beds} beds, {baths} baths, {meters} mq
      </Wrap>
    );
  }
}

Infos.propTypes = {
  beds: PropTypes.number,
  baths: PropTypes.number,
  meters: PropTypes.number,
};

Infos.defaultProps = {};

export default Infos;
