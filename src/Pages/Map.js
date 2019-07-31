import React from 'react'
import MapWithAMarker from './MapWithAMarker'
import NavBar from '../Components/NavBar'
import { getPosts } from '../Services/api'
import {getLocations} from '../Services/location_api'

class Map extends React.Component {

    state={
        selectedLocation: []
    }

    //USE THE GETLOCATIONS FUNCTION IN SERVICES/LOCATION_API TO SET STATE
    // setLocations = () => {
    //     const {locations} = this.state 
    //     const getLocations = [...locations]

    //     getPosts()
    //     .then(data => 
    //         data.map(post => getLocations.push(post.location))) 
    //     .then(
    //       this.setState({
    //           locations: getLocations
    //       })
    //       )
    // } 

    //FETCH LOCATIONS WHEN COMPONENT MOUNTS
    // componentDidMount() {
    // this.setLocations()
    // }

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
                < NavBar signOut = {this.props.signOut}/> 
                <h1>Journal Map</h1>
                <MapWithAMarker
                    // googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&libraries=places`}
                    loadingElement={<div style={{height: "100%"}}/>}
                    containerElement = {<div style={{ height: `65vh`, width: `65vh`, "margin": 'auto'}} />}
                    mapElement = {<div style={{height: `100%`}} /> }
                    locations={this.props.locations}
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