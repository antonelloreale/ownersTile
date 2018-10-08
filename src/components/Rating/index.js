import React from "react";
// import PropTypes from 'prop-types';

import { Wrap } from "./styles";
import StarRating from "../../components/StarRating";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap>
        <StarRating rating={this.props.rating} />
        <p>Rating</p>
      </Wrap>
    );
  }
}

Rating.propTypes = {};

Rating.defaultProps = {};

export default Rating;
