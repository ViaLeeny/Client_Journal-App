import React from 'react'
import { Link } from 'react-router-dom'
import PostContainer from '../Containers/PostContainer'
import { createEntry } from "../Services/api";
import { Icon } from 'semantic-ui-react'
import NavBar from '../Components/NavBar'
import { validate, getPosts } from '../Services/api'
import WelcomePage from '../User_Accounts/LoginComponent'
import LoginComponent from '../User_Accounts/LoginComponent';



class HomePage extends React.Component {

state = {
    selectedPost: [],
    }

  //USE THE GETPOST FUNCTION IN SERVICES/API TO SET STATE
  setPosts = () => {
    getPosts()
    .then(data => 
      {
      this.setState({
          posts: data.reverse()
      })
      }
      )

  }

    //INITIATE APP BY SETTING LOCAL STORAGE TOKEN
    componentDidMount() {
      if (localStorage.token){
        validate().then(data => {
          if (data.error){
            alert(data.error)
          } else {
            this.setPosts()
          }
        })
      }
    }

    //FUNCTION TO SHOW THE ENTIRE POST A USER CLICKS ON
    showPost = (thePost) => {
    
        this.props.editThisPost(thePost)
        this.props.history.push('./Entry')
    }

    //CREATE AN ENTRY
    // handleSubmit = () => {
    //     const emptyString = ''
    //     createEntry(emptyString, emptyString, this.state.user_id, this.state.location_id, this.state.mood_id)
    //     .then( data => {
    //                 this.setState({
    //                     selectedPost: [data]
    //                 })
    //                 console.log(this.state.selectedPost)
    //             } 
    //         )
    //     // .then(
    //     //     this.props.history.push('./home')
    //     // )
    // }

    // createPost = () => {
    //     console.log('We are creating this.')
    // }

    //SHOW SELECTED POST IF THERE IS ONE OR SHOW ALL POSTS
    render () {
      const { posts } = this.props
      const { showPost, createPost } = this
       
      if (this.props.username){

            return (
                <div>
                < NavBar signOut = {this.props.signOut}/> 
                <h1> Welcome to your journal {this.props.username} </h1>
                <Link to='/' className="ui primary button" onClick={this.props.signOut} >Sign out </Link>
                    <Link to='/NewEntry' ><Icon link name="add" size='large'/></Link>
                    <PostContainer 
                        posts = {posts} 
                        editThisPost ={this.props.editThisPost}
                        showPost ={showPost}
                        createPost={createPost}
                        deleteThisPost = {this.props.deleteThisPost}
                         />
                </div>
                )
            } else {
              return (
                <div> 
                  <h1> Invalid Username / Password combination </h1>
                 <LoginComponent /> 
                </div>
              
              )
            }
          
          
          }
    // }
}



export default HomePage 