import React from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import DevTools from '../containers/DevTools';
import RegistrationForm from '../containers/RegistrationForm'

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <Provider store={store}>
        <div>
          <RegistrationForm />
          <DevTools />
        </div>
      </Provider>
    );
  }
});
