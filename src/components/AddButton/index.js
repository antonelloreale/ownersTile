import React from 'react';
import PropTypes from 'prop-types';

import {Wrap} from './styles';

//questo è da traformare in funzione perchè lo stato lo uso in home

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Wrap onClick={this.props.onClick} clickBtn={this.props.clickBtn}>
        <button>Add</button>
      </Wrap>
    );
  }
}

AddButton.propTypes = {
  onClick: PropTypes.func,
  clickBtn: PropTypes.number,
};

AddButton.defaultProps = {};

export default AddButton;
