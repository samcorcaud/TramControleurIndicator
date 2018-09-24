import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableHighlight, PermissionsAndroid} from 'react-native';
import {MapView} from 'expo';


//const aspect_ratio = width / height;
const LATITUDE = 47.472219;
const LONGITUDE = -0.551840;
const LATITUDEDELTA = 0.0922;
const LONGITUDEDELTA = 0.0421;

const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#c9b2a6"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#dcd2be"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ae9e90"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#93817c"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a5b076"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#447530"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fdfcf8"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f8c967"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#e9bc62"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e98d58"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#db8555"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#806b63"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#8f7d77"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dfd2ae"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b9d3c2"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#92998d"
            }
        ]
    }
];


export default class Map extends React.Component {

    constructor() {
        super();
        this.state = this.getFirstState();
        this.onRegionChange = this.onRegionChange.bind(this);
        this.addMarkers = this.addMarkers.bind(this);
    }

    getFirstState() {
        return {
            region: {
                latitude: LATITUDE,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDEDELTA,
                longitudeDelta: LONGITUDEDELTA,
            },
            markers: [{
                latlng: {
                    latitude: 47.472219,
                    longitude: -0.551840,
                },
                pinColor: {
                    color: 'black',
                },
            }]
        };
    }

    onRegionChange(region) {
        this.setState({region});
    }

    addMarkers() {
        let markersNew = this.state.markers
        markersNew.push({
            latlng: {
                latitude: 48.472221,
                longitude: -0.551840,
            },
            pinColor: {
                color: 'black',
            },
        })
        this.setState({markers: markersNew});

    }


    render() {
        console.log(this.state)

        return (
            <View style={styles.container}>
                <Text style={styles.text}>Map</Text>
                <MapView style={{flex: 1, width: "100%"}}
                    /*initialregion={{
                                    latitude: 47.472219,
                                    longitude: -0.551840,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}*/
                    region={this.state.region}
                    customMapStyle={mapStyle}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsTraffic={true}
                    //mapType = "hybrid"
                    loadingIndicatorColor='blue'
                    loadingEnabled={true}

                >
                    {this.state.markers.map((marker, key) => (
                        <MapView.Marker
                            key={key}
                            draggable
                            coordinate={marker.latlng}
                            title={marker.title}
                            pinColor={'blue'}
                            description={marker.description}
                            onDragEnd={(e) => this.setState({x: e.nativeEvent.coordinate})}
                        />
                    ))}
                </MapView>
                {/* <View style={styles.buttonContainer}>
                    <Button title={"Marker"} style={styles.button} onPress={this.addMarkers}/>
                    <Button title={"Profile"} style={styles.button} onPress={this.props.showLogin}/>*/}
               {/* <TouchableOpacity onPress={this.addMarkers()}>
                    <View style={styles.button}>
                        <Text>Marker</Text>
                    </View>
                </TouchableOpacity>*/}
                {/*</View>*/}
                <View>
                    <Button title={"Marker"} style={styles.button} onPress={this.addMarkers}/>
                    <Button title={"Profile"} style={styles.button} onPress={this.props.showLogin}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        width: "100%",

        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",

    },
    map: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: 5,
        padding: 5,
        width: "100%",
        justifyContent: 'space-between',
        width: 200,
        height: 200,
    },
    button : {
        //flex: 1,
        margin: 5,
        padding: 5,
        justifyContent: 'space-between',
        backgroundColor: '#2196F3',
        //borderBottomEndRadius : 10,
        //borderBottomLeftRadius: 10,
        //borderBottomRightRadius : 10,
        //borderBottomStartRadius : 10,
        borderRadius : 10,
        borderColor : 'black',
    },

});
