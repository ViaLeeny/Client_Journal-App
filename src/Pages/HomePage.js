import React from 'react'
import { Link } from 'react-router-dom'
import PostContainer from '../Containers/PostContainer'
import JournalEntryCreator from '../Components/JournalEntryCreator'
import { createEntry } from "../Services/api";
import { Icon } from 'semantic-ui-react'
import NavBar from '../Components/NavBar'


class HomePage extends React.Component {

state = {
    selectedPost: [],
    user_id: 1, 
    location_id: 1, 
    mood_id: 1
    }


    //FUNCTION TO SHOW THE ENTIRE POST A USER CLICKS ON
    showPost = (thePost) => {

    const {selectedPost } = this.state
    const addToSelectedPostArray = [...selectedPost]
    addToSelectedPostArray.shift()

    console.log(thePost)

    addToSelectedPostArray.unshift(thePost)
    this.setState({
        selectedPost: addToSelectedPostArray
    })
    }

    //CREATE AN ENTRY
    handleSubmit = () => {
        const emptyString = ''
        createEntry(emptyString, emptyString, this.state.user_id, this.state.location_id, this.state.mood_id)
        .then( data => {
                    this.setState({
                        selectedPost: [data]
                    })
                    console.log(this.state.selectedPost)
                } 
            )
        // .then(
        //     this.props.history.push('./home')
        // )
    }

    createPost = () => {
        console.log('We are creating this.')
    }

    //SHOW SELECTED POST IF THERE IS ONE OR SHOW ALL POSTS
    render () {
        const { selectedPost } = this.state
        const { posts } = this.props
        const { showPost, handleSubmit, createPost } = this

        if (selectedPost.length > 0 ){
            return (
                <div>
                < NavBar /> 
                <h1> Welcome to your journal {this.props.username} </h1>
                    <Link to='/' class="ui primary button" onClick={this.props.signOut} >Sign out </Link>
                    <JournalEntryCreator post={selectedPost[0]}
                    /> 
                </div>
                )
        } else {
            return (
                <div>
                < NavBar /> 
                <h1> Welcome to your journal {this.props.username} </h1>
                <Link to='/' class="ui primary button" onClick={this.props.signOut} >Sign out </Link>
                    <Link to='/NewEntry' ><Icon link name="add" size='large' onClick={handleSubmit} /></Link>
                    <PostContainer 
                        posts = {posts} 
                        editThisPost ={this.props.editThisPost}
                        showPost ={showPost}
                        createPost={createPost}
                        deleteThisPost = {this.props.deleteThisPost}
                         />
                </div>
                )
            }
    }
}



export default HomePage 