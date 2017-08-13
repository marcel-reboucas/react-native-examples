import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAbSN5P-bkGZcdrFtOYMyaZtTgT0RbjxD0",
      authDomain: "react-native-manager-88af0.firebaseapp.com",
      databaseURL: "https://react-native-manager-88af0.firebaseio.com",
      projectId: "react-native-manager-88af0",
      storageBucket: "",
      messagingSenderId: "347557451796"
    }

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  };
}

export default App;
