import React from "react";
import { Icon } from 'semantic-ui-react'

class PostCard extends React.Component {

  

  render() {
    return (
      <div className="post-card" onClick={() => this.props.showPost(this.props.post)} >
       <h1 >{this.props.post.title}</h1> 
          <Icon link name='edit outline' size='large' onClick={() => this.props.editPost(this.props.post)}/>  
          <Icon link name='delete' size='large' onClick={() => this.props.deletePost(this.props.post)}/>
        <p>{this.props.post.content}</p> 

      </div>
    );
  }
}

export default PostCard;