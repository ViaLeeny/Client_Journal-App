import React from 'react'
import PostContainer from '../Containers/PostContainer'
import { Icon } from 'semantic-ui-react'


class UserProfile extends React.Component {




    render () {
        const { posts } = this.props
        return (
            <div> 
                <h1>Welcome, {this.props.username}</h1>
                <h3>See your posts below</h3> 
                <Icon link name='add circle' size='extra-large' />
                {/* <PostContainer posts = {posts}  editPost ={this.props.editPost} deletePost = {this.props.deletePost} /> */}
            </div>
        )
    }

}

export default UserProfile