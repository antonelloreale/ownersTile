import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';
import StarRating from '../../components/StarRating';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {rating} = this.props;
    return (
      <Wrap>
        <StarRating rating={rating} />
        <p>Rating</p>
      </Wrap>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {};

export default Rating;
