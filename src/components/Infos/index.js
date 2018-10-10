import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

function Infos({info}) {
  return (
    <Wrap>
      {info.beds} beds, {info.baths} baths, {info.meters} mq
    </Wrap>
  );
}

Infos.propTypes = {
  info: PropTypes.objectOf(PropTypes.number),
};

Infos.defaultProps = {};

export default Infos;
