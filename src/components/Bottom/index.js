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

  handleClick() {
    console.log("click");
    this.setState({ bgColor: "pink" });
  }

  render() {
    return (
      <Wrap
        onClick={this.handleClick.bind(this)}
        style={{ backgroundColor: this.state.bgColor }}
      >
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
