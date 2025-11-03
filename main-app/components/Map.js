import * as React from 'react';
import {Image, Dimensions, Text} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;


const Map = ({ latitude, longitude, latDelta, lonDelta}) => {
    
    
    return (
    <MapView
        style={{ height: 300, flex: 1}}
        provider={PROVIDER_GOOGLE}
        mapType={'standard'}
        initialRegion={{
        latitude:latitude, 
        longitude: longitude,
        latitudeDelta: latDelta,
        longitudeDelta: lonDelta
        }}
    />
    
);
}


export default Map;