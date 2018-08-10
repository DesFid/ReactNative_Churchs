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
import TabsFooter from './src/components/Footer';
import { connect } from 'react-redux';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      itemSelected: 'Home'
    }
    this.itemSelected = this.itemSelected.bind(this)
  }
  static navigationOptions = {
    header: null
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  itemSelected(item) {
    this.setState({
      itemSelected: item,
      isOpen: false
    })
  } paddingTop
  updateMenu(isOpen) {
    this.setState({ isOpen })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
        <List
          navigation={this.props.navigation}
        />
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