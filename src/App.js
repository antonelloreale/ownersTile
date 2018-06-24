import React, {Component} from 'react';
// Redux Store
import {Provider} from 'react-redux';
import {configureStore} from './store';

import Routing from './Routing';

import './global-styles';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

export default App;
