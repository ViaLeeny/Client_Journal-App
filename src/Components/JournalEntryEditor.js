import React, { createElement } from "react";
import { Button, Form, Message, Icon } from 'semantic-ui-react'
import { editPost } from "../Services/api";


class JournalEntryEditor extends React.Component {

  state = {
    title: '', 
    content: '', 
    post_id: '', 
    user_id: 2
  }

  //EDIT THE NEWLY CREATED POST
  handleSaveSubmit  =() => {
    const { title, content, user_id, post_id} = this.state
    editPost( title, content, user_id, post_id)
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
        <Icon link name='arrow left' size='large' /> 
        <Form>
          <Form.Field>
            <input name="title" value={title} placeholder='Title' onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <Form.TextArea name="content" value={content} placeholder='Your Thoughts' onChange={handleChange} />
          </Form.Field>
          <Message success header='Form Completed' content="Your post has been saved!" />
          <Button type='submit' onClick={handleSaveSubmit}>Save</Button>
          <Button type='cancel' >Cancel</Button>

        </Form>
      </div>
    );
  }
}

export default JournalEntryEditor;