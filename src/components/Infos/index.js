import React from 'react';
// import PropTypes from 'prop-types';

import {Wrap} from './styles';

class Infos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // se metti const ={beds, baths, meters} = this.props eviti di dover scrivere tutte le volte this.props (vale per TUTTI i componenti, lo hai fatto ovunque)
    return (
      <Wrap>
        {this.props.beds} beds, {this.props.baths} baths, {this.props.meters} mq
      </Wrap>
    );
  }
}

Infos.propTypes = {};

Infos.defaultProps = {};

export default Infos;
