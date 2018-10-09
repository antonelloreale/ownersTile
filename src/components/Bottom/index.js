import React from 'react';
// import PropTypes from 'prop-types';

import {Wrap} from './styles';

import Address from '../../components/Address';
import Infos from '../../components/Infos';
import Rating from '../../components/Rating';

class Bottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // bisogna definire lo stato di default, ad es bgColor: white
    };
  }

  handleClick = () => {
    console.log('click'); // non fare come me, non se pushano i console.log
    this.setState({bgColor: 'pink'});
  };

  render() {
    return (
      // se è uno styled components NON ci deve essere style={qualcosa} altrimenti che styled components è? E' proprio sbagliata la logica con cui passi questo colore di background.
      <Wrap
        onClick={this.handleClick}
        style={{backgroundColor: this.state.bgColor}}>
        <Rating rating={this.props.rating} />
        <Address address={this.props.address} />
        <Infos {...this.props.info} />
      </Wrap>
    );
  }
}

Bottom.propTypes = {};

Bottom.defaultProps = {};

export default Bottom;
