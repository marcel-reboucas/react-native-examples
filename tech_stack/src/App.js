import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';
import reducers from './reducers';

class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1}}>
          <Header headerText="Tech Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;