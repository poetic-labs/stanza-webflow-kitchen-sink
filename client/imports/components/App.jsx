/* eslint-disable */
import React from 'react';
import Face from './Face';
import Form from './Form';
import Index from './Index';
import Login from './Login';
import { Stack } from 'react-super-components';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack indexKey="path" activeLayerIndex={this.props.path}>
          <Face index="face" />
          <Form index="login" />
          <Index index="" />
        </Stack>
      </Provider>
      );
  }
}
;

export default App;
