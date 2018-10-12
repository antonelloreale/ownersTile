import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

import Top from '../../components/Top';
import Bottom from '../../components/Bottom';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: false,
    };
  }

  handleClick = () => {
    this.setState(state => ({
      bgColor: !state.bgColor,
    }));
  };

  render() {
    const {foto, num, banner, price, address, info, rating} = this.props;
    return (
      <Wrap onClick={this.handleClick}>
        <Top foto={foto} num={num} banner={banner} price={price} />

        <Bottom
          bgColor={this.state.bgColor}
          address={address}
          info={info}
          rating={rating}
        />
      </Wrap>
    );
  }
}

Tile.propTypes = {
  address: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.number),
  foto: PropTypes.string,
  num: PropTypes.arrayOf(PropTypes.string),
  banner: PropTypes.bool,
  price: PropTypes.number,
  rating: PropTypes.number,
};

Tile.defaultProps = {};

export default Tile;
