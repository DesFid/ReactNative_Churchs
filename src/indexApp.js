import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import App from '../App';
import Details from './components/Church/Details';
import TabsFooter from './components/Footer';
import {
    createBottomTabNavigator
  } from 'react-navigation';
import MyMap from './components/MyMap';

const IndexApp = StackNavigator({
    Home: {
        screen: App
    },
    Details: {screen: Details}
},{
    headerMode: 'screen'
})

var MainScreenNavigator = createBottomTabNavigator({
    Churchs: {screen: IndexApp},
    Map: {screen: MyMap}
},
{
    tabBarOptions: {
        activeTintColor: '#FFFFFF',
        activeBackgroundColor: '#3393FF',
        inactiveTintColor: '#D2D2D2',
        inactiveBackgroundColor: '#1A86FE',
        labelStyle: {
            fontSize: 16,
            paddingVertical: 10 
        }
    }
}
)
MainScreenNavigator.navigationOptions = {
    title: "Simplee"
}

export default MainScreenNavigator;