import React from "react";
// import PropTypes from 'prop-types';

import { Wrap } from "./styles";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.new === true) {
      return <Wrap> New</Wrap>;
    } else {
      return null;
    }
  }
}

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
