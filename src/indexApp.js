import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import App from '../App';
import Details from './components/Church/Details';
const IndexApp = StackNavigator({
    Home: {screen: App},
    Details: {screen: Details}
},{
    headerMode: 'screen'
})

export default IndexApp;