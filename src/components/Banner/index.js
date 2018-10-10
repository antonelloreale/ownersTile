import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

function Banner({banner}) {
  if (banner === true) {
    return <Wrap> New</Wrap>;
  } else {
    return null;
  }
}

Banner.propTypes = {
  banner: PropTypes.bool,
};

Banner.defaultProps = {};

export default Banner;
