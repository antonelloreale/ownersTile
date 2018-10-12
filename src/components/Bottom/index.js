import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

import Infos from '../../components/Infos';
import Rating from '../../components/Rating';

export const Bottom = props => {
  return (
    <Wrap bgColor={props.bgColor}>
      <Rating rating={props.rating} />
      <p>{props.address}</p>
      <Infos info={props.info} />
    </Wrap>
  );
};

Bottom.propTypes = {
  bgColor: PropTypes.bool,
  rating: PropTypes.number,
  address: PropTypes.string,
  info: PropTypes.objectOf(PropTypes.number),
};

Bottom.defaultProps = {};

export default Bottom;
