import React from "react";
import { Icon } from 'semantic-ui-react'
import { deletePost } from "../Services/api"
import { Card, Divider } from 'semantic-ui-react'

class PostCard extends React.Component {

  handleDeleteClick = () => {
    this.props.deleteThisPost(this.props.post)
    deletePost(this.props.post.id)
  }

  handleEditClick = () => {
    this.props.createPost()
  }

  render() {
    const { handleDeleteClick , handleEditClick } = this
    return (
     
        // <Card>
        <div className="post-card" >
        <Divider section />
        <h1 onClick={() => this.props.showPost(this.props.post)} >{this.props.post.title}</h1> 
          <Icon link name='edit outline' size='large' onClick={handleEditClick}/>  
          <Icon link name='delete' size='large' onClick={handleDeleteClick}/>
        <p onClick={() => this.props.showPost(this.props.post)} >{this.props.post.content}</p> 
        
    
        </div>

        // </Card>
  
    );
  }
}

export default PostCard;