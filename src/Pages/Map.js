import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, InfoWindow, Marker  } from 'react-google-maps'


const MapWithAMarker = withGoogleMap(props => (
    < GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 40.712776, lng: -74.005974}} 
    >
        <Marker position={{lat: 40.712776, lng: -74.005974 }}/>
    </ GoogleMap>
))

class Map extends React.Component {


    render() {
        return(
            <div> 
                <h1>Journal Map</h1>
                <MapWithAMarker
                    containerElement = {<div style={{ height: `50vh`, width: `50vh`, "margin": 'auto'}} />}
                    mapElement = {<div style={{height: `100%`}} /> }
                />
            </div>
        )
    }
}

export default Map

{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAztKCL4q8ZGemAzAEfBV_gxrGMMooFSQ0&callback=initMap"
    async defer></script> */}