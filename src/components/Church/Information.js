import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Information extends Component {
    render() {
        const info = "Hola";
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{info}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: 'white'
    }
})
export default Information;