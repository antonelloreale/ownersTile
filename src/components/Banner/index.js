import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const banner = this.props.banner;
    if (banner === true) {
      return <Wrap> New</Wrap>;
    } else {
      return null;
    }
  }
}

Banner.propTypes = {
  banner: PropTypes.bool,
};

Banner.defaultProps = {};

export default Banner;
