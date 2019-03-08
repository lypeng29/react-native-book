/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Header, Avatar , ThemeProvider } from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
  },
};
export default class App extends Component {
  render() {
    return (
        // <Header
        //   leftComponent={{ icon: 'menu', color: '#fff' }}
        //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        //   rightComponent={{ icon: 'home', color: '#fff' }}
        //   height="45"
        // />
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        containerStyle={{
          backgroundColor: '#3D6DCC',
          justifyContent: 'space-around',
        }}
      />
        // {/* <ThemeProvider theme={theme}><Button title="Hey!" /> */}
        // {/* <Button title="My 2nd Button" /> */}
        // {/* <Avatar
        //   rounded
        //   source={{
        //     uri:
        //       'https://www.lypeng.com/static/images/headimg.jpg',
        //   }}
        // /></ThemeProvider> */}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
