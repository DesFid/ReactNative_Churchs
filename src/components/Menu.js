import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('window');

class Menu extends Component {
    _renderItemsMenu() {
        const services = [
            'Home', 
            'Adoration', 
            'Dominical School', 
            'Main Cult',
            'Biblical Study',
            'Holy Dinner',
            'Player Time',
        ]
        const {itemSelectedValue} = this.props;
        return services.map((element, key) => (
        <TouchableHighlight
            key={key}
            style={element == itemSelectedValue ? [styles.listServices, styles.items, styles.itemSelected]: styles.noSelectedItems}
            onPress={() => this.props.itemSelected(element)}
            >
                <Text style={styles.text}>{element}</Text>
            </TouchableHighlight>
        ))
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.menu}>
                <View style={styles.iconContainer}>
                    <View style={styles.iconImage}>
                        {/* Set the imagen of the menu here! */}
                        <Text style={styles.textIcon}>ChurchSite</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {this._renderItemsMenu()}
                </ScrollView>
            </View>
        )
    }
}

export default Menu

const styles = StyleSheet.create({

    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: '#191919',
    },
    scrollContainer: {
        width: width / 2 + 48
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 59,
        borderColor: 'white',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    icon: {
        width: 70,
        height: 60,
        marginRight: 20
    },
    iconImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15,
    },
    textIcon: {
        color: '#FFF',
        fontSize: 18
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: 'white',
        borderBottomWidth: 3
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items: {
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: '#3393FF'
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5,
    },
    listServices:{
        paddingVertical: 15,
    }

})