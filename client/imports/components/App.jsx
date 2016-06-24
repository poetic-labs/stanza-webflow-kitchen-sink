/* eslint-disable */
import React from 'react';
import Face from './Face';
import Form from './Form';
import Index from './Index';
import { Stack } from 'react-super-components';
import { Provider } from 'react-redux';
import store from '../store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stack index="path">
          <Face index="face" />
          <Form index="form" />
          <Index index="" />
        </Stack>
      </Provider>
      );
  }
}
;

export default App;
