import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import LoginComponent from "./User_Accounts/LoginComponent";
import WelcomePage from './User_Accounts/WelcomePage'
import HomePage from './Pages/HomePage'
import { validate } from './Services/api'
import UserProfile from './User_Accounts/UserProfile';
import { getPosts } from './Services/api'


class App extends React.Component {
  //SET STATE WITH THE CURRENT USER'S USERNAME
  state = {
    username: '',
    posts: [], 
    selectedPost: []
  }

  //SIGN USER IN
  signIn = user => {
    this.setState({
      username: user.username, 

    })
    localStorage.setItem('token', user.token)
  }

  //SIGN USER OUT
  signOut = () => {
    this.setState({
      username: ''
    })
    localStorage.removeItem('token')
  }

  //USE THE GETPOST FUNCTION IN SERVICES/API TO SET STATE
  setPosts = () => {
    getPosts()
    .then(data => {
      this.setState({
          posts: data
      })
      })
  }

  //FUNCTION TO SHOW THE ENTIRE POST A USER CLICKS ON
  showPost = (thePost) => {
    console.log(thePost)
  }

  //FUNCTION TO EDIT THE POST
  editPost = (selectedPost) => {
    console.log(selectedPost)
  }

  //FUNCTION TO DELETE THE POST
  deletePost = (selectedPost) => {
    console.log(selectedPost)
  }

  //INITIATE APP BY SETTING LOCAL STORAGE TOKEN
  componentDidMount() {
    if (localStorage.token){
      validate().then(data => {
        if (data.error){
          alert(data.error)
        } else {
          this.signIn(data)
          this.setPosts()
        }
      })
    }
    
  
  }

  render () {
    const { signIn, signOut, showPost, editPost, deletePost } = this
    const { username, posts, selectedPost } = this.state

    return (
    <div className='App'>
       <Switch >
         <Route exact path='/' component={props => < WelcomePage {...props} /> }/>
         <Route path="/signin" component={props => <LoginComponent signIn={signIn} {...props} />}/>
         <Route path="/home" component={props => <HomePage 
            username = {username} 
            signOut={signOut} 
            posts = {posts} 
            editPost ={editPost} 
            showPost ={showPost}
            deletePost = {deletePost} {...props} />}
            />
         <Route path="/profile" component={props => <UserProfile 
              username = {username} 
              posts = {posts} 
              showPost = {showPost} 
              editPost ={editPost}
              deletePost = {deletePost}
              signOut={signOut} 
              selectedPost={selectedPost[0]}
              {...props} />}
            />
       </Switch> 
    </div>
  );
}}
export default withRouter(App);
