import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';
import Banner from '../../components/Banner';
import Prezzo from '../../components/Prezzo';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap foto={this.props.foto}>
        <Prezzo price={this.props.price} num={this.props.num} />
        <div>
          <Banner banner={this.props.banner} />
        </div>
      </Wrap>
    );
  }
}
Top.propTypes = {
  foto: PropTypes.string,
  price: PropTypes.number,
  num: PropTypes.arrayOf(PropTypes.string),
  banner: PropTypes.bool,
};

Top.defaultProps = {};

export default Top;
