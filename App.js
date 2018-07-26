/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
View,
Text,
StyleSheet

} from 'react-native';
import List from './src/components/Church/List';
import Header from './src/components/Header';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <List/>
      </View>
    )
  }
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
})