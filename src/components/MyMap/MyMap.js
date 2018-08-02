import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { Platform, Dimensions, View, StyleSheet } from 'react-native'
class MapTest extends Component {
  constructor() {
    super()
    this.state = {
      region: {
        longitude: null,
        latitude: null,
        latitudeDelta: null,
        longitudeDelta: null
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
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude
        const lon = position.coords.longitude
        const accuracy = position.coords.accuracy
        this.calcDelta(lat, lon, accuracy)
      }
    )
  }

  render() {
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
            description="This is the current site"
          />
        </MapView> : null}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
   },
  map: { ...StyleSheet.absoluteFillObject }
})
export default MapTest