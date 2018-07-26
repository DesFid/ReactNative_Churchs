import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';

const aList = [
    {
        key: 1,
        country: 'eeuu',
        churchs: [
            {
                key: 6,
                name: 'Presence',
                image: 'http://images2.fanpop.com/images/photos/6000000/Random-random-6064744-1280-800.jpg',
            },
            {
                key: 5,
                name: 'Presence2',
                image: 'http://images2.fanpop.com/images/photos/5500000/Random-wallpaper-random-5548400-1280-800.jpg',
            }
        ]
    },
    {
        key: 2,
        country: 'ecuador',
        churchs: [
            {
                key: 4,
                name: 'Presence3',
                image: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg',
            },
            {
                key: 3,
                name: 'Presence4',
                image: 'https://yt3.ggpht.com/-FJXWJ1x1bEQ/AAAAAAAAAAI/AAAAAAAAAAA/ZtyuZ-elFr4/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
            },
            {
                key: 2,
                name: 'Presence5',
                image: 'http://pre02.deviantart.net/6e12/th/pre/i/2012/243/d/b/random_shrugpony_by_derpy333-d5d1ehk.png',
            },
            {
                key: 1,
                name: 'Presence6',
                image: 'https://wallpaperbrowse.com/media/images/keep-calm-and-be-random-437.png',
            }
        ]
    },
    {
        key: 3,
        country: 'austarly',
        churchs: [
            {
                key: 7,
                name: 'Presence3',
                image: 'https://www.ihdimages.com/wp-content/uploadsktz/2017/09/random-1.jpg',
            },
            {
                key: 8,
                name: 'Presence4',
                image: 'https://i.vimeocdn.com/portrait/10259744_640x640',
            },
            {
                key: 9,
                name: 'Presence5',
                image: 'https://openclipart.org/image/2400px/svg_to_png/224697/Pattern4.png',
            },
            {
                key: 10,
                name: 'Presence6',
                image: 'http://images2.fanpop.com/images/photos/5300000/Randomness-random-5340160-1920-1200.jpg',
            }
        ]
    }
]

class List extends Component {
    _renderItem(item) {
        return (
            <View>
                <Image style={styles.image} source={{ uri: item.image }} />
            </View>
        )
    }
    _renderCountry(street) {
        return (
            <View>
                <Text style={{ color: 'white' }}>{item.country}</Text>
                <FlatList
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    renderItem={({ item }) => this._renderItem(item)}
                    data={street.churchs}
                    keyExtractor={item => item.key.toString()}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.text}>My List</Text>
                    <FlatList
                        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                        renderItem={({ street }) => this._renderCountry(street)}
                        data={aList}
                        keyExtractor={street => street.key.toString()}
                    />
                </View>
            </View>
        )
    }
}
export default List

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: 'white'
    },
    image: {
        width: 120,
        height: 180,
    }
})