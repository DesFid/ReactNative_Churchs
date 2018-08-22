/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import SideMenu from 'react-native-side-menu'
import List from './src/components/Church/List';
import Header from './src/components/Header';
import Menu from './src/components/Menu';
import TabsFooter from './src/components/Footer';
import { connect } from 'react-redux';
import Services from './src/components/Church/Services'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      itemSelected: 'Home'
    }
    this.getRows = this.getRows.bind(this);
    this.itemSelected = this.itemSelected.bind(this);
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
  } 

  updateMenu(isOpen) {
    this.setState({ isOpen })
  }

  getRows() {
    const { churchs } = this.props;
    const myChurchs = churchs;
    return myChurchs
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SideMenu
          style={{ flex: 1 }}
          menu={<Menu
            navigation={this.props.navigation}
            itemSelected={this.itemSelected}
            itemSelectedValue={this.state.itemSelected}
          />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}
        >
          <ScrollView style={styles.container}>
            <Header
              navigation={this.props.navigation}
              toggle={this.toggle.bind(this)}
              style={{ flex: 1 }} />
            {this.state.itemSelected === 'Home' ? <View style={{ flex: 1 }}>
              <List
                getRows={this.getRows}
                navigation={this.props.navigation}
              />
            </View> :
              <Services
                navigation={this.props.navigation}
                item={this.state.itemSelected}
              />
            }
          </ScrollView>
        </SideMenu>
      </View>
    )
  }
}

export default connect(state => ({ churchs: state.churchs }))(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
})