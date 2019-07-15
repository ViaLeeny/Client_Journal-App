import React, { createElement } from "react";
import { Button, Form, Message, Icon } from 'semantic-ui-react'
import { createEntry } from "../Services/api";


class JournalEntryCreator extends React.Component {

  state = {
    title: '', 
    content: '', 
    user_id: 2
  }

  //CREATE AN ENTRY
  handleSubmit = () => {
    createEntry(this.state.title, this.state.content, this.state.user_id)
    .then(
      data => {
      if (data.errors){
        alert(data.errors)
      }
    }
    )
  }

  //UPDATE STATE AS USER TYPES
  handleChange = (event) =>{
    this.setState({
    [event.target.name]: event.target.value
   })
  }

  //JOURNAL ENTRY INPUT FORM
  render() {
    const { handleChange, handleSubmit} = this
    return (
      <div className="JournalEntryCreator">
        <Icon link name='arrow left' size='large' /> 
        <Form>
          <Form.Field>
            <input name="title" placeholder='Title' onChange={handleChange}/>
          </Form.Field>
          <Form.Field>
            <Form.TextArea name="content" placeholder='Your Thoughts' onChange={handleChange} />
          </Form.Field>
          <Message success header='Form Completed' content="Your post has been saved!" />
          <Button type='submit' onClick={handleSubmit}>Save</Button>
          <Button type='cancel' >Cancel</Button>

        </Form>
      </div>
    );
  }
}

export default JournalEntryCreator;