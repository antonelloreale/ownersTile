import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Wrap} from './styles';

import Tile from '../../components/Tile';
import owners from './owners_fake_data.json';

export class Home extends React.Component {
  render() {
    const tiles = owners.map(d => (
      <Tile
        address={d.address}
        info={d.info}
        foto={d.pics[0]}
        num={d.pics}
        banner={d.new}
        price={d.price}
        rating={d.rating}
        key={d.price}
      />
    ));
    return <Wrap>{tiles}</Wrap>;
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

function mapStateToProps(state) {
  return {
    label: state.home.label,
  };
}

export default connect(mapStateToProps)(Home);
