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
      this.setState({
        clickBtn: this.state.clickBtn + 1,
      });
      // if (this.state.clickBtn < tile.length) {
      //   console.log(this.state.clickBtn);
      //   return (
      //     <Tile
      //       address={tile[this.state.clickBtn].address}
      //       info={tile[this.state.clickBtn].info}
      //       rating={tile[this.state.clickBtn].rating}
      //       foto={tile[this.state.clickBtn].pics[0]}
      //       num={tile[this.state.clickBtn].pics}
      //       banner={tile[this.state.clickBtn].banner}
      //       price={tile[this.state.clickBtn].price}
      //     />
      //   );
      // }
    };
    function renderTile(clickBtn) {
      let tilesArr = [];
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
          />
        );
        return tilesArr;
      }
    }
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
