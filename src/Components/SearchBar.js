import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, InfoWindow, Marker  } from 'react-google-maps'
import Autocomplete from 'react-google-autocomplete';
import {Input} from 'semantic-ui-react'
/* global google */



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    console.log(place.geometry.location.lat())
    console.log(place.geometry.location.lng())
    console.log(place.formatted_address)
  }



  render() {
    return (
       <div>
        <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Enter your city"
         type="text"></input>
      </div>
    );
  }
}

// const SearchBar = withGoogleMap(props => (
//   < GoogleMap>
//     <Autocomplete 
//       style={{
//         width: '100%', 
//         height: '40px', 
//         paddingLeft: '16px', 
//         marginTop: '2px', 
//         marginBottom: '2px'
//       }}
//     />
//   </ GoogleMap>
// ))



export default SearchBar