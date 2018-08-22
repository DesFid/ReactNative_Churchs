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
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Icon name='bars'
                color='white'
                size={25} />
        </TouchableWithoutFeedback>
        <Image style={styles.logo} source={require('../images/logo.jpg')} />
    </View>

)
export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#000000",        
        paddingHorizontal: 15
    },
    logo: {
        width: 120,
        height: 40
    }
})