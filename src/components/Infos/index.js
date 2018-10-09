import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const beds = this.props.beds;
    const baths = this.props.baths;
    const meters = this.props.meters;

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
