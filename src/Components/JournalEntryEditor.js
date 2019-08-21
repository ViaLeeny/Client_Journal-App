import React from "react";
import { Button, Form, Message, Card, Icon, Image, Grid } from 'semantic-ui-react'
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
       .then(
           this.props.history.push('./home')
       )
  }

  componentDidMount() {
    let postToEdit = this.props.selectedPost
    if(postToEdit){
    this.setState({
      title: postToEdit.title, 
      content: postToEdit.content, 
      post_id: postToEdit.id,
      location_id: postToEdit.location_id, 
      post: postToEdit, 
      location_name: postToEdit.location.name
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
        <Grid columns={2} divided>
        <Grid.Column width={10} className='card-column-1' >
        < NavBar signOut = {this.props.signOut}/> 
        
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
        </Grid.Column>

        <Grid.Column width={3} className='card-column-2' >
        <Link to='/home' > 
            <Card className="grow threed">
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
            <Card className="grow threed">
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
    );
  }
}

export default JournalEntryEditor;