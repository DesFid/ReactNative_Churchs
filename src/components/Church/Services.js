import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../../actions'


class Services extends Component {
    _fetchData = async () => {
        const { item } = this.props;
        return (this.props.fetchData(item))
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { item } = this.props;
        if ((JSON.stringify(item)) !== JSON.stringify(nextProps.item)) {
            this.props.fetchData(nextProps.item)
        }
        return true;
    }

    componentWillMount() {
        const { item } = this.props
        this._fetchData()
    }

    replaceHTTP(url) {
        return url.replace(/^http:\/\//i, 'https://')
    }

    renderActivityIndicator() {
        const { activityIndicatorContainer } = styles;
        return (
            <View style={activityIndicatorContainer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    renderItem(item) {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback
                onPress={() => navigate('Details', { item })}
            >
                <Image style={styles.image}
                    source={{ uri: this.replaceHTTP(item.image) }}
                />
            </TouchableWithoutFeedback>
        )
    }

    renderList() {
        const { data } = this.props.data;
        return (
            <FlatList
                style={{ flex: 1 }}
                numColumns={3}
                renderItem={({ item }) => this.renderItem(item)}
                ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
                data={data}
                keyExtractor={item => item.id.toString()}
            />
        )
    }

    render() {
        const { isFetching } = this.props.data;
        return (
            <View style={{ flex: 1, }}>
                {isFetching ? this.renderActivityIndicator() : this.renderList()}
            </View>
        )
    }
}

//mapStateToProps
const mapStateToProps = state => {
    return { data: state.data }
}

//mapDispatchToProps
const mapDispatchToProps = dispatch => {
    return {
        fetchData: (services) => dispatch(fetchData(services))
    }
}

const styles = StyleSheet.create({
    image: {
        width: 110,
        height: 165,
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Services)