import React from "react";
import { Button, Form, Message, Icon } from 'semantic-ui-react'
import { createEntry } from "../Services/api";
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar'



class JournalEntryCreator extends React.Component {

  state = {
    title: '', 
    content: '', 
    location_name: '',
    longitude: 0, 
    latitude: 0,
    post_id: '', 
    user_id: 1, 
    location_id: 1, 
    mood_id: 1
  }

  //CREATE POST AND ADD POST TO STATE IN APP
  handleSaveSubmit  =() => {

    const { title, content, location_name, longitude, latitude} = this.state

    createEntry( title, content, location_name, longitude, latitude)
    .then( data => {
     this.props.addPostAndLocationsToStateArrays(data)
    })
      .then(
          this.props.history.push('./home')
      )
  }

  componentDidMount() {
    let postToEdit = this.props.post
    if(postToEdit){
    this.setState({
      title: postToEdit.title, 
      content: postToEdit.content, 
      post_id: postToEdit.id
    })}
  }


  //UPDATE STATE AS USER TYPES
  handleChange = (event) =>{
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  //CHANGE STATE TO SELECTED LOCATION FROM GOOGLE PLACES API
  handleSelect = (location, lat, lng) => {
    this.setState({
    location_name: location, 
    latitude: lat,
    longitude: lng
    })
  }

  //JOURNAL ENTRY INPUT FORM
  render() {
    const { handleChange, handleSaveSubmit, handleSelect} = this
    const { title, content } = this.state
    return (
      <div className="JournalEntryCreator">
        < NavBar signOut = {this.props.signOut} /> 
         
        <Icon link name='arrow left' size='large' /> 
        <Form>
          <Form.Field>
            <input name="title" value={title} placeholder='Title' onChange={handleChange}/>
          </Form.Field>
          <SearchBar  handleSelect={handleSelect} handleChange={handleChange} />
          <Form.Field>
            <Form.TextArea name="content" value={content} placeholder='Your Thoughts' onChange={handleChange} />
          </Form.Field>
          <Message success header='Form Completed' content="Your post has been saved!" />
          <Button type='submit' onClick={handleSaveSubmit}>Save</Button>
          <Link to='/home' type='cancel' class="ui secondary button" >Cancel</Link>

        </Form>
      </div>
    );
  }
}

export default JournalEntryCreator;