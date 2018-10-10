import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

function Address({address}) {
  return <Wrap>{address}</Wrap>;
}

Address.propTypes = {
  address: PropTypes.string,
};

Address.defaultProps = {};

export default Address;
