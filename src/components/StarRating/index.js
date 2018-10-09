import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRating = rating => {
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
  };

  render() {
    const rating = this.props.rating;
    return <Wrap>{this.renderRating(rating)}</Wrap>;
  }
}

StarRating.propTypes = {
  rating: PropTypes.number,
};

StarRating.defaultProps = {};

export default StarRating;
