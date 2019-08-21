import React from 'react'
import { google, GoogleMap, withGoogleMap,InfoWindow, Marker  } from 'react-google-maps'


const MapWithAMarker = withGoogleMap(props => (
    <div> 

    
    < GoogleMap 
    debugger
    defaultZoom={2} 
    defaultCenter={{lat: 40.712776, lng: -73.005974}} 
    >
        {
            props.locations.map(location => (
                
                <Marker 
                    key={location.location.id} 
                    position={{lat: location.location.latitude, lng: location.location.longitude} }
                    
                    name={location.location.name}
                    onClick= {() => props.showInfoBox(location.location)}
                />
            ))
        }

        {props.selectedLocation && (
            <InfoWindow
                position={{lat: props.selectedLocation.latitude, lng: props.selectedLocation.longitude  } }
                onCloseClick= {() => props.hideInfoBox()}
            >
                
                <h4>You have journaled in {props.selectedLocation.name}!</h4>
                {/* {
                    props.selectedLocation.posts.map(location => (
                        <div>
                            <h1>{location.name}</h1>
                        </div>
                    ))
                } */}
                
            </InfoWindow>
        )}
    </ GoogleMap>
    </div>
))


export default MapWithAMarker
