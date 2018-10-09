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
    return (
      <Wrap onClick={this.handleClick}>
        <Top
          foto={this.props.foto}
          num={this.props.num}
          banner={this.props.banner}
          price={this.props.price}
        />

        <Bottom
          bgColor={this.state.isClicked}
          address={this.props.address}
          info={this.props.info}
          rating={this.props.rating}
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
