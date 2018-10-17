import React from 'react';
import PropTypes from 'prop-types';
import {Wrap} from './styles';

import Tile from '../../components/Tile';
import owners from './owners_fake_data.json';

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      tile: [],
      numTile: '',
    };
  }

  handleClickBtn = () => {
    const {tile} = this.state;
    let tileTmp = [...tile];
    let ownersTmp = {
      ...owners,
      price: this.randomPrice(100000, 1000000),
    };
    tileTmp.unshift(ownersTmp);
    if (tileTmp.length > this.state.numTile) {
      tileTmp.pop();
    }
    this.setState({
      tile: [...tileTmp],
    });
  };

  setNum = e => {
    this.setState({numTile: e.target.value});
  };

  randomPrice = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  adder = tiles =>
    tiles.map((d, i) => (
      <Tile
        address={d.address}
        foto={d.pics[0]}
        num={d.pics}
        banner={d.new}
        info={d.info}
        price={d.price}
        rating={d.rating}
        key={`tile_${i}`}
      />
    ));

  render() {
    return (
      <Wrap>
        <input type="number" min="0" onChange={this.setNum} />
        <button onClick={this.handleClickBtn}>Add</button>
        {this.adder(this.state.tile)}
      </Wrap>
    );
  }
}

Home.propTypes = {
  address: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.number),
  foto: PropTypes.string,
  num: PropTypes.arrayOf(PropTypes.string),
  banner: PropTypes.bool,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Home;
