import React from "react";
import { Button, Form, Message, Card, Icon, Image, Grid } from 'semantic-ui-react'
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

        <Grid columns={2} divided>
        <Grid.Column width={10} className='card-column-1' >
        < NavBar signOut = {this.props.signOut} /> 
         
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

export default JournalEntryCreator;