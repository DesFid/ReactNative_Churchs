import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import App from '../App';
const IndexApp = StackNavigator({
    Home: {screen: App}
},{
    headerMode: 'screen'
})

export default IndexApp;