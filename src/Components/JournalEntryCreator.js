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
    post_id: '', 
    user_id: 1, 
    location_id: 1, 
    mood_id: 1
  }

  //EDIT THE NEWLY CREATED POST
  handleSaveSubmit  =() => {
    const { title, content, user_id, location_id, mood_id} = this.state
    createEntry( title, content, user_id, location_id, mood_id)
    .then( data => {
      console.log(data)
    })

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

  //JOURNAL ENTRY INPUT FORM
  render() {
    const { handleChange, handleSaveSubmit} = this
    const { title, content } = this.state
    return (
      <div className="JournalEntryCreator">
        < NavBar /> 
        <h1> Welcome to your journal {this.props.username} </h1>
        <Link to='/' class="ui primary button" onClick={this.props.signOut} >Sign out </Link>

        <SearchBar /> 
        <Icon link name='arrow left' size='large' /> 
        <Form>
          <Form.Field>
            <input name="title" value={title} placeholder='Title' onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <Form.TextArea name="content" value={content} placeholder='Your Thoughts' onChange={handleChange} />
          </Form.Field>
          <Message success header='Form Completed' content="Your post has been saved!" />
          {/* <Link to='/Entry' class="ui primary button" onClick={handleSaveSubmit} >Save </Link> */}
          <Button type='submit' onClick={handleSaveSubmit}>Save</Button>
          <Button type='cancel' >Cancel</Button>

        </Form>
      </div>
    );
  }
}

export default JournalEntryCreator;