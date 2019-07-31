import React from "react";
import { Button, Form, Message, Icon } from 'semantic-ui-react'
import { editPost } from "../Services/api";
import SearchBar from './SearchBar'
import NavBar from '../Components/NavBar'
import { Link } from 'react-router-dom'
import Tone from './Tone'

class JournalEntryEditor extends React.Component {

  state = {
    title: '', 
    content: '', 
    post_id: '', 
    user_id: 1, 
    location_id: '', 
    location_name: '',
    longitude: '', 
    latitude: '', 
    post: ''
  }

  //EDIT THE NEWLY CREATED POST
  handleSaveSubmit  =() => {
    const { title, content, user_id, post_id, mood_id, location_name, longitude, latitude} = this.state
    editPost( post_id, title, content, user_id, location_name, mood_id, longitude, latitude)
    .then( data => {
      console.log(data)
    })
  }

  componentDidMount() {
    let postToEdit = this.props.selectedPost
    if(postToEdit){
    this.setState({
      title: postToEdit.title, 
      content: postToEdit.content, 
      post_id: postToEdit.id,
      location_id: postToEdit.location_id, 
      post: postToEdit
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
    const { title, content, location_name, post } = this.state
    return (
      <div className="JournalEntryCreator">
        < NavBar signOut = {this.props.signOut}/> 
        
        <Icon link name='arrow left' size='large' /> 
        {/* <Tone post={post}/> */}
        <Form>
          <Form.Field>
            <input name="title" value={title} placeholder='Title' onChange={handleChange}/>
          </Form.Field>
          <SearchBar name='location_name' value={location_name} handleSelect={handleSelect} handleChange={handleChange} location_name={location_name}/> 
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

export default JournalEntryEditor;