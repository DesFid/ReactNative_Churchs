import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Contacts extends Component {
    renderContacts() {
        const res = this.props.contacts.map((item, i) => {
            return (
                <View style={styles.container} key={i}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{item.name}</Text>
                    </View>
                </View>
            )
        })
        return res;
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderContacts()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 15
    }
})

export default Contacts;