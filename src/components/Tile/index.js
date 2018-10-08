import React from "react";
// import PropTypes from 'prop-types';

import { Wrap } from "./styles";

import Top from "../../components/Top";
import Bottom from "../../components/Bottom";

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap>
        <Top
          foto={this.props.foto}
          num={this.props.num}
          new={this.props.new}
          price={this.props.price}
          rating={this.props.rating}
        />

        <Bottom
          address={this.props.address}
          info={this.props.info}
          rating={this.props.rating}
        />
      </Wrap>
    );
  }
}

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
