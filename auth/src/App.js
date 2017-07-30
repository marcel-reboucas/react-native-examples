import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAdAPUAxT1Npa_11bKuQIP1_dnOuqMLhTQ",
      authDomain: "react-native-auth-371ca.firebaseapp.com",
      databaseURL: "https://react-native-auth-371ca.firebaseio.com",
      projectId: "react-native-auth-371ca",
      storageBucket: "react-native-auth-371ca.appspot.com",
      messagingSenderId: "500493364629"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" /> 
        <LoginForm />
      </View>
    );
  }
}

export default App;