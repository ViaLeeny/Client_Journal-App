import React from 'react'
import MapWithAMarker from './MapWithAMarker'
import NavBar from '../Components/NavBar'
import { getPosts } from '../Services/api'
import {getLocations} from '../Services/location_api'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class Map extends React.Component {

    state={
        selectedLocation: []
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

                <Grid columns={2} divided>
                  <Grid.Column width={10} className='card-column-1' >
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
                  </Grid.Column>

                  <Grid.Column width={3} className='card-column-2' >
                  <Link to='/home' > 
                      <Card className="grow threed" >
                          <Card.Content>
                            <Card.Header>POSTS</Card.Header>
                          </Card.Content>
                          <Image className='card-image' src='https://dumielauxepices.net/sites/default/files/bubble-clipart-transparent-background-870907-9091757.png'  wrapped ui={true} />
                      </Card>
                  </Link>
                  <br>
                  </br>
                  <br>
                  </br>
                  
                  <Link to='/map'>
                      <Card className="grow threed" >
                          <Card.Content>
                            <Card.Header>MAP</Card.Header>
                          </Card.Content>
                          <Image className='card-image' src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png' wrapped ui={true} />
                      </Card>
                  </Link>

                  <br>
                </br>
                <br>
                </br>

                <Link to='/about'>
                    <Card className="grow threed about" >
                        <Card.Content>
                        <Card.Header>ABOUT</Card.Header>
                        </Card.Content>
                        <Image className='card-image about' src='https://s3.amazonaws.com/amo_hub_content/Association1450/images/about-us-icon-shutterstock_27428206-256px.png' wrapped ui={true} />
                    </Card>
                </Link>
                </Grid.Column>
    
                </Grid>
            </div>
        )
    }
}

export default Map

// {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAztKCL4q8ZGemAzAEfBV_gxrGMMooFSQ0&callback=initMap"
//     async defer></script> */}