import React from 'react'
import { Link } from 'react-router-dom'
import PostContainer from '../Containers/PostContainer'

class HomePage extends React.Component {

// componentDidMount () {
//     if (!this.props.username){
//         this.props.history.push('/')
//     }
// }

render () {
    const { posts } = this.props
    return (
        <div>
        <h1> Welcome to your journal {this.props.username} </h1>
            <Link to='/' class="ui primary button" onClick={this.props.signOut} >Sign out </Link>
            <PostContainer 
                posts = {posts} 
                editPost ={this.props.editPost}
                showPost ={this.props.showPost}
                deletePost = {this.props.deletePost} />
        </div>
        )
}
}



export default HomePage 