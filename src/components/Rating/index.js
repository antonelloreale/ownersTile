import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

export const Rating = props => {
  function renderRating(rating) {
    const stars = [];
    const bg = {
      backgroundColor: `#FFDE59`,
    };
    let j = 0;
    for (let i = 0; i < 4; i++) {
      if (j < rating) {
        j++;
        stars.push(<div key={`stella_${i}`} style={bg} />);
      } else {
        j++;
        stars.push(<div key={`stella_${i}`} />);
      }
    }
    return stars;
  }

  return (
    <Wrap>
      {renderRating(props.rating)}
      <p>Rating</p>
    </Wrap>
  );
};

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {};

export default Rating;
