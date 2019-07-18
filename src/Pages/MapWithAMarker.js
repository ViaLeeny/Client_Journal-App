import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, InfoWindow, Marker  } from 'react-google-maps'
import Geocode from 'react-geocode'
import {getLocations} from '../Services/location_api'



const MapWithAMarker = withGoogleMap(props => (
    < GoogleMap 
    defaultZoom={2} 
    defaultCenter={{lat: 40.712776, lng: -73.005974}} 
    >
        {
            props.locations.map((location) => (
                <Marker 
                    key={location.id} 
                    position={{lat: location.latitude, lng: location.longitude} }
                    name={location.name}
                    onClick= {props.showInfoBox}
                />
            ))
        }
        {/* <Marker  name={'New York, NY'}draggable={false} position={{lat: 40.712776, lng: -74.005974 }}/> */}
    </ GoogleMap>
))


export default MapWithAMarker
