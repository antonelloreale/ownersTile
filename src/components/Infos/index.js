import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

export const Infos = props => {
  return (
    <Wrap>
      {props.info.beds} beds, {props.info.baths} baths, {props.info.meters} mq
    </Wrap>
  );
};

Infos.propTypes = {
  info: PropTypes.objectOf(PropTypes.number),
};

Infos.defaultProps = {};

export default Infos;
