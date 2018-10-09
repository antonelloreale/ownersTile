import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Wrap} from './styles';

import Tile from '../../components/Tile';
import owners from './owners_fake_data.json';

export class Home extends React.Component {
  render() {
    // invece che passare venti props diverse e portarti dietro venti props diverse, non era più sensato
    // passare un unica prop data e poi andarti a prendere la roba che ti serviva nei singoli componenti?
    const tiles = owners.map(d => (
      <Tile
        address={d.address}
        status={d.new}
        info={d.info}
        foto={d.pics[0]}
        num={d.pics}
        new={d.new}
        price={d.price}
        rating={d.rating}
        key={d.price}
      />
    ));
    return <Wrap>{tiles}</Wrap>;
  }
}

// Le props vanno mappate. OVUNQUE non le hai mappate da nessuna parte
Home.propTypes = {
  label: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    label: state.home.label,
  };
}

export default connect(mapStateToProps)(Home);
