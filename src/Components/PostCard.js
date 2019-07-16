import React from "react";
import { Icon } from 'semantic-ui-react'
import { deletePost } from "../Services/api"

class PostCard extends React.Component {

  handleDeleteClick = () => {
    this.props.deleteThisPost(this.props.post)
    deletePost(this.props.post.id)
  }

  handleEditClick = () => {

  }

  render() {
    const { handleDeleteClick , handleEditClick } = this
    return (
      <div className="post-card" >
       <h1 onClick={() => this.props.showPost(this.props.post)} >{this.props.post.title}</h1> 
          <Icon link name='edit outline' size='large' onClick={handleEditClick}/>  
          <Icon link name='delete' size='large' onClick={handleDeleteClick}/>
        <p onClick={() => this.props.showPost(this.props.post)} >{this.props.post.content}</p> 

      </div>
    );
  }
}

export default PostCard;