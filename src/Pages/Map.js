import React from 'react'
import {getLocations} from '../Services/location_api'
import MapWithAMarker from './MapWithAMarker'

class Map extends React.Component {

    state={
        locations: []
    }

    //USE THE GETLOCATIONS FUNCTION IN SERVICES/LOCATION_API TO SET STATE
    setLocations = () => {
        
        getLocations()
        .then(data => {
          this.setState({
              locations: data
          })
          })
    } 

    //FETCH LOCATIONS WHEN COMPONENT MOUNTS
    componentDidMount() {
    this.setLocations()
    }

    //SHOW MARKER INFO BOX WHEN MARKER IS CLICKED ON
    showInfoBox = () => {
        console.log('hello')
    }

    //RENDER MAP WITH MARKERS
    render() {
        return(
            <div> 
                <h1>Journal Map</h1>
                <MapWithAMarker
                    containerElement = {<div style={{ height: `50vh`, width: `50vh`, "margin": 'auto'}} />}
                    mapElement = {<div style={{height: `100%`}} /> }
                    locations={this.state.locations}
                    showInfoBox={this.showInfoBox}

                />
            </div>
        )
    }
}

export default Map

{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAztKCL4q8ZGemAzAEfBV_gxrGMMooFSQ0&callback=initMap"
    async defer></script> */}