import React from 'react'
import {getLocations} from '../Services/location_api'
import MapWithAMarker from './MapWithAMarker'
import NavBar from '../Components/NavBar'

class Map extends React.Component {

    state={
        locations: [], 
        selectedLocation: []
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
    showInfoBox = (theLocation) => {
        const {selectedLocation } = this.state
        const addToSelectedLocationArray = [...selectedLocation]
        addToSelectedLocationArray.shift()
        console.log(theLocation)
        addToSelectedLocationArray.unshift(theLocation)
        this.setState({
            selectedLocation: addToSelectedLocationArray
        })
    }

    hideInfoBox = () => {
        this.setState({
            selectedLocation: []
        })
    }

    //RENDER MAP WITH MARKERS
    render() {
        return(
            <div> 
                < NavBar /> 
                <h1>Journal Map</h1>
                <MapWithAMarker
                    // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=places`}
                    // loadingElement={<div style={{height: "100%"}}/>}
                    containerElement = {<div style={{ height: `65vh`, width: `65vh`, "margin": 'auto'}} />}
                    mapElement = {<div style={{height: `100%`}} /> }
                    locations={this.state.locations}
                    showInfoBox={this.showInfoBox}
                    hideInfoBox={this.hideInfoBox}
                    selectedLocation={this.state.selectedLocation[0]}
                />
            </div>
        )
    }
}

export default Map

// {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAztKCL4q8ZGemAzAEfBV_gxrGMMooFSQ0&callback=initMap"
//     async defer></script> */}