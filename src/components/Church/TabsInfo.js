import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { TabViewAnimated, TabViewPagerScroll, TabViewPagerPan, TabBar } from 'react-native-tab-view'
import Contacts from './Contacts';
import Information from './Information';

class TabsInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Information' },
                { key: '2', title: 'Contacts' }
            ]
        }
    }

    _onIndexChange(index) {
        this.setState({index})
    }
    _renderHeader(props) {
        return <TabBar {...props} style={styles.container}/>
    }
    _renderScene({route}) {
        switch (route.key) {
            case '1':
                return <Information />
            case '2':
                return <Contacts contacts={this.props.data}/>
            default:
                return null
        }
    }
    _renderPage(props){
        return (Platform.OS === 'ios') ? <TabViewPagerScroll {...props} /> : <TabViewPagerPan {...props} />
      }
    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene.bind(this)}
                renderHeader={this._renderHeader}
                onIndexChange={this._onIndexChange.bind(this)}
                renderPager={this._renderPage.bind(this)}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex : 1,
    borderColor: 'black',
    }
})
export default TabsInfo
