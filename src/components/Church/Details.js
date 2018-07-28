import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabsInfo from './TabsInfo';
const {width, height} = Dimensions.get('window')


class Details extends Component {
    render() {
        const {params} = this.props.navigation.state;
        const {image, description} = params.item;
        return (
            <ScrollView style={styles.container}>
                <Image 
                    style={styles.image}
                    source={{uri: image}}
                />
                
                <View style={styles.descriptionContainer}>
                <View style={styles.description}>
                    <Text style={styles.text}>{description}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={styles.myMapIcon}>
                            <Icon 
                            style={styles.mapIcon}
                            color='gray'
                            size={28}
                            name='map-marker'/>
                        <Text style={styles.text}>Set</Text>
                        </View>
                    </View>
                </View>
                <TabsInfo/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    image: {
        width: width,
        height:300
    },
    descriptionContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
    iconContainer: {
        flexDirection: 'row',
        marginVertical: 30,
    },
    mapIcon: {
        height: 28
    },
    myMapIcon: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 40
    },
    description: {
        marginVertical: 10
    }
})
export default Details