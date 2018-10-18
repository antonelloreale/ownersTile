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
      numTile: 0,
      page: 0,
    };
  }

  handleChangePgn = e => {
    this.setState({
      page: Number(e.target.id),
    });
  };

  handleClickBtn = () => {
    const {tile} = this.state;
    let tileTmp = [...tile];
    let ownersTmp = {
      ...owners,
      price: this.randomPrice(100000, 1000000),
    };
    tileTmp.unshift(ownersTmp);
    this.setState({
      tile: [...tileTmp],
    });
  };
  divide = (arr, pieces) => {
    let groups = [],
      i,
      arrayLength = arr.length;
    for (i = 0; i < arrayLength; i += pieces) {
      groups.push(arr.slice(i, i + pieces));
    }
    return groups;
  };

  setNum = e => {
    this.setState({numTile: e.target.value});
  };

  randomPrice = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  buttonAdder = nbr => {
    const btns = [];
    let j = 1;
    for (let i = 0; i < nbr; i++) {
      btns.push(
        <button key={`btn_${i}`} id={i} onClick={this.handleChangePgn}>
          {j}
        </button>
      );
      j++;
    }
    return btns;
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
    const {tile, numTile, page} = this.state;
    const splitted = this.divide(tile, parseInt(numTile, 10));
    return (
      <Wrap>
        <input type="number" min="0" onChange={this.setNum} />
        <button onClick={this.handleClickBtn}>Add</button>
        {tile.length !== undefined && tile.length !== 0
          ? this.adder(splitted[page])
          : null}
        <p>{this.buttonAdder(splitted.length)}</p>
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
