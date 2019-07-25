import React from 'react'
import { google, GoogleMap, withGoogleMap,InfoWindow, Marker  } from 'react-google-maps'


const MapWithAMarker = withGoogleMap(props => (
   <div> 


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
    </div>
))


export default MapWithAMarker
