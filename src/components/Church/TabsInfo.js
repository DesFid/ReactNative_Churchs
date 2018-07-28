import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {TabViewAnimated, TabBar} from 'react-native-tab-view';
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
        return <TabBar {...props} />
    }
    _renderScene({route}) {
        switch (route.key) {
            case '1':
                return <Information />
            case '2':
                return <Contacts />
            default:
                return null
        }
    }
    
    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._onIndexChange.bind(this)}
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
    flex : 1
    }
})
export default TabsInfo
