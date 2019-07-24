import React from 'react'
/* global google */



class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.state ={
      latitude: '', 
      longitude: '', 
      location_name: this.props.location_name
    } 
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {"types": ["geocode"]});

    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    const lat = place.geometry.location.lat()
    const lng = place.geometry.location.lng()
    const name = place.formatted_address
    this.setState({
      latitude: lat, 
      longitude: lng, 
      location_name: name
    })
    this.props.handleSelect(name, lat, lng)
  }



  render() {
    return (
       <div>
        <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Enter your city"
         type="text" name='location_name' value={this.props.value} onChange={this.props.handleChange} ></input>
      </div>
    );
  }
}

export default SearchBar