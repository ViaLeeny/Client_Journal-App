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
                            editThisPost ={this.props.editThisPost}
                            showPost ={this.props.showPost}
                            createPost={this.props.createPost}
                            deleteThisPost = {this.props.deleteThisPost}
                        /> 
                    ))
                }
                
            </div>
        )
    }

}

export default PostContainer