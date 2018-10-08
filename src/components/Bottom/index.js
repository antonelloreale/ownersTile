import React from "react";
// import PropTypes from 'prop-types';

import { Wrap } from "./styles";

import Address from "../../components/Address";
import Infos from "../../components/Infos";
import Rating from "../../components/Rating";

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap>
        <Rating rating={this.props.rating} />
        <Address address={this.props.address} />
        <Infos {...this.props.info} />
      </Wrap>
    );
  }
}

Bottom.propTypes = {};

Bottom.defaultProps = {};

export default Bottom;
