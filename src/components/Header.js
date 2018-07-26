import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableWithoutFeedback,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = props => (
    <View style={styles.container}>
        <Icon name='bars' color='white'/>
        <Image style={styles.logo} source={require('../images/logo.jpeg')} />
    </View>
)
export default Header;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo: {
        width: 120,
        height: 40
    }
})