import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Information extends Component {
    renderServices() {
        const res = this.props.services.map((item, i) => {
            return (
                <View style={styles.container} key={i}>
                        <Text style={styles.text}>>{item}</Text>
                </View>
            )
        })
        return res;
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderServices()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    text: {
        color: 'white'
    }
})
export default Information;