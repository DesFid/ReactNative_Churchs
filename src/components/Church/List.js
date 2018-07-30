import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import {dataV} from '../../api/api';

class List extends Component {
    _renderItem(item) {        
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => navigate('Details', {item: item})}>
                <Image style={styles.image} source={{ uri: item.image }} />
                </TouchableWithoutFeedback>
            </View>
        )
    }
    _renderCountry(item) {
        return (
            <View>
                <Text style={{ color: 'white' }}>{item.country}</Text>
                <FlatList
                    horizontal
                    ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                    renderItem={({ item }) => this._renderItem(item)}
                    data={item.churchs}
                    keyExtractor={item => item.key.toString()}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    <Text style={styles.text}>My List</Text>
                    <ScrollView>
                        {
                            dataV.map((item, index) => (
                                <View key={item.key}>
                                    <Text style={styles.text}>{item.country}</Text>
                                    <FlatList
                                        horizontal
                                        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                                        renderItem={({ item }) => this._renderItem(item)}
                                        data={item.churchs}
                                        keyExtractor={item => item.key.toString()}
                                    />
                                </View>
                            ))
                        }
                    </ScrollView>
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
    },
    listContainer: {
        paddingLeft: 10,
        paddingRight: 10,
    }
})