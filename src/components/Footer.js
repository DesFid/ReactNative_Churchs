import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import App from '../../App';
import { TabViewAnimated, TabViewPagerScroll, TabViewPagerPan, TabBar } from 'react-native-tab-view';
import List from './Church/List'
class TabsFooter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            index: 0,
            routes: [
                { key: '1', title: 'Churchs' },
                { key: '2', title: 'Map' }
            ]
        }
    }

    _renderScene({route}){
        switch (route.key){
            case '1':
            return <Text >Hola</Text>
            case '2':
            return <Text >Hola2</Text>
            default:
            return null
        }
    }

    _renderHeader(props){
        return <TabBar {...props} style={styles.container}/>
    }

    _onIndexChange(index) {
        this.setState({index})
    }
    _renderPage(){
        return (Platform.OS === 'ios') ? <TabViewPagerScroll {...props} /> : <TabViewPagerPan {...props} />
    }
    render(){
        return(
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader.bind(this)}
                onIndexChange={this._onIndexChange.bind(this)}
                renderPage={this._renderPage.bind(this)}
            />
        )
    }
}
export default TabsFooter;

const styles= StyleSheet.create({
    container: {
        flex: 1
    },

})

