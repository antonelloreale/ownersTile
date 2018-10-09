import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

import Address from '../../components/Address';
import Infos from '../../components/Infos';
import Rating from '../../components/Rating';

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {isClicked} = this.props;
    const {rating} = this.props;
    const {address} = this.props;
    const {info} = this.props;
    return (
      <Wrap isClicked={isClicked}>
        <Rating rating={rating} />
        <Address address={address} />
        <Infos info={info} />
      </Wrap>
    );
  }
}

Bottom.propTypes = {
  isClicked: PropTypes.bool,
  rating: PropTypes.number,
  address: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.number),
};

Bottom.defaultProps = {};

export default Bottom;
