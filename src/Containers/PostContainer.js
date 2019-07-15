import React from 'react'
import PostCard from '../Components/PostCard'

class PostContainer extends React.Component {

    render () {
        return(
            <div>
                {
                    this.props.posts.map(post => (
                        <PostCard 
                            key={post.id} 
                            post={post} 
                            editPost ={this.props.editPost}
                            showPost ={this.props.showPost}
                            deletePost = {this.props.deletePost}
                        /> 
                    ))
                }
                
            </div>
        )
    }

}

export default PostContainer