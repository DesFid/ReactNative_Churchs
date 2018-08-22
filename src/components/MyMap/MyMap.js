import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Platform, Dimensions, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import MapViewDirections from 'react-native-maps-directions';
class MyMap extends Component {


  constructor(props) {
    super(props);
    this.state = {
      x: null,
      y: null,
      region: {
        longitude: -78.5174783,
        latitude: -0.2242505,
        latitudeDelta: 0.13,
        longitudeDelta: 0.13
      }
    }
  }

  calcDelta(lat, lon, accuracy) {
    const oneDegreeLongituInMeters = 111;
    const circunference = (40075 / 360)
    const latDelta = accuracy * (1 / (Math.cos(lat) * circunference))
    const lonDelta = (accuracy / oneDegreeLongituInMeters)
    this.setState({
      region: {
        longitude: lon,
        latitude: lat,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
      }
    })
  }

  marker() {
    return {
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude,
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const accuracy = position.coords.accuracy
        this.calcDelta(lat, lon, accuracy)
      }
    )
  }

  getChoords() {
    try {
      const { params } = this.props.navigation.state;
      const { item } = params;
      return {
        latitude: item.x,
        longitude: item.y,
      }
    } catch (err) {
      const latitude = -0.2670592;
      const longitude = -78.5840109;
      return {
        latitude: latitude,
        longitude: longitude,
      }
    }
  }

  checkData() {
    try {
      const { item } = this.props.navigation.state.params;
      const { name } = item;
      const { description } = item;
      return false
    } catch (err) {
      return true;
    }
  }

  render() {
    const { params } = this.props.navigation.state;
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCcS0L5DwcvwD7m51Z9HwVVyxZrD4ZX3oU';
    return (
      <View style={styles.container}>
        {this.state.region.latitude ? <MapView
          style={styles.map} 
          provider={PROVIDER_GOOGLE}
          initialRegion={this.state.region}
        >
          <MapView.Marker
            coordinate={this.marker()}
            title="Current site"
            description="This is your current location"
          />
          {this.checkData() === false ?
          <View style={{flex: 1}}>
            <MapView.Marker
              coordinate={this.getChoords()}
              title={params.item.name}
              description={params.item.description}
              />
</View>
            : null
          }
        </MapView> : null}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  map: { ...StyleSheet.absoluteFillObject }
})
export default MyMap
