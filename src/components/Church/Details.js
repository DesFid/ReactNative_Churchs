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
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabsInfo from './TabsInfo';
import TextGradient from 'react-native-linear-gradient'

const {width, height} = Dimensions.get('window')


class Details extends Component {
    render() {
        const {params} = this.props.navigation.state;
        const {name, image, description} = params.item;
        const {contacts} = params.item;
        return (
            <ScrollView style={styles.container}>
                <ImageBackground 
                    style={styles.image}
                    source={{uri: image}}
                >
                <View style={styles.nameContainer}>
                <TextGradient colors={['#181818', '#181818', 'transparent']}>
                    <Text style={[styles.text, styles.titleShow]}>{name}</Text>
                </TextGradient>
                </View>
                </ImageBackground>   
                <View style={styles.descriptionContainer}>
                <View style={styles.description}>
                    <Text style={styles.text}>{description}</Text>
                    </View>
                    </View>
                    <TabsInfo data={contacts}/>
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
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    nameContainer: {
        backgroundColor: 'transparent',
    },
    titleShow: {
        fontSize: 30,
        paddingLeft: 10,
        marginBottom: 10
    },
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
        paddingHorizontal: 20,
        paddingTop: 20
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