import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, InfoWindow, Marker  } from 'react-google-maps'
import Geocode from 'react-geocode'
import Autocomplete from 'react-google-autocomplete';
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
                    onClick= {() => props.showInfoBox(location)}
                />
            ))
        }

        {props.selectedLocation && (
            <InfoWindow
                position={{lat: props.selectedLocation.latitude, lng: props.selectedLocation.longitude  } }
                onCloseClick= {() => props.hideInfoBox()}
            >
                <h4>You have journaled in {props.selectedLocation.name}!</h4>
            </InfoWindow>
        )}
    </ GoogleMap>
))


export default MapWithAMarker
