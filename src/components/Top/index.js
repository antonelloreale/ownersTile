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
    const {foto} = this.props;
    const {price} = this.props;
    const {num} = this.props;
    const {banner} = this.props;
    return (
      <Wrap foto={foto}>
        <Prezzo price={price} num={num} />
        <div>
          <Banner banner={banner} />
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
