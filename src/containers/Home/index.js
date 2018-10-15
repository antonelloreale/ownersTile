import React from 'react';
import PropTypes from 'prop-types';
import {Wrap} from './styles';

import Tile from '../../components/Tile';
import owners from './owners_fake_data.json';
import AddButton from '../../components/AddButton';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickBtn: 0,
    };
  }
  render() {
    let tile = owners.map(function(d) {
      return d;
    });

    const handleClickBtn = () => {
      if (this.state.clickBtn < tile.length) {
        this.setState({
          clickBtn: this.state.clickBtn + 1,
        });
      }
    };
    function renderTile(clickBtn) {
      let tilesArr = [];
      for (let i = 0; i < tile.length; i++) {
        if (clickBtn < tile.length) {
          tilesArr.push(
            <Tile
              address={tile[clickBtn].address}
              info={tile[clickBtn].info}
              rating={tile[clickBtn].rating}
              foto={tile[clickBtn].pics[0]}
              num={tile[clickBtn].pics}
              banner={tile[clickBtn].banner}
              price={tile[clickBtn].price}
              key={`tile_${tile[clickBtn.price]}`}
            />
          );
        }
        return tilesArr;
      }
    }
    console.log('home', this.state.clickBtn);
    return (
      <Wrap>
        <AddButton onClick={handleClickBtn} clickBtn={this.state.clickBtn} />
        {renderTile(this.state.clickBtn)}
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
