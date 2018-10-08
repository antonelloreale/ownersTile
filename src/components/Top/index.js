import React from "react";
// import PropTypes from 'prop-types';

import { Wrap } from "./styles";
import Banner from "../../components/Banner";
import Prezzo from "../../components/Prezzo";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap foto={this.props.foto}>
        <Prezzo price={this.props.price} num={this.props.num} />
        <div>
          <Banner new={this.props.new} />
        </div>
      </Wrap>
    );
  }
}
Top.propTypes = {};

Top.defaultProps = {};

export default Top;
