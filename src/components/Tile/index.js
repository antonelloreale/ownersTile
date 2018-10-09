import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

import Top from '../../components/Top';
import Bottom from '../../components/Bottom';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  handleClick = () => {
    this.setState(state => ({
      isClicked: !state.isClicked,
    }));
  };

  render() {
    const {foto} = this.props;
    const {num} = this.props;
    const {banner} = this.props;
    const {price} = this.props;
    const {address} = this.props;
    const {info} = this.props;
    const {rating} = this.props;
    return (
      <Wrap onClick={this.handleClick}>
        <Top foto={foto} num={num} banner={banner} price={price} />

        <Bottom
          isClicked={this.state.isClicked}
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
