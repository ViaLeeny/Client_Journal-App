import React from 'react';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import LoginComponent from "./User_Accounts/LoginComponent";
import SignUpComponent from "./User_Accounts/SignUpComponent";
import WelcomePage from './User_Accounts/WelcomePage'
import HomePage from './Pages/HomePage'
import UserProfile from './User_Accounts/UserProfile';
import JournalEntryEditor from './Components/JournalEntryEditor'
import JournalEntryCreator from './Components/JournalEntryCreator'
import AboutPage from './Pages/AboutPage'

import Map from './Pages/Map'
import { validate, getPosts } from './Services/api'

class App extends React.Component {
  //SET STATE WITH THE CURRENT USER'S USERNAME
  //constructor --> 
  state = {
    posts: [], 
    locations: [],
    selectedPost: [], 
    username: ''
  }

  //SIGN UP FUNCTION
  signUp = user => {
    console.log(user)
    this.setState({
      username: user.username, 

    })
    localStorage.setItem('token', user.token)
  };

  //SIGN USER IN
  signIn = user => {
    localStorage.setItem('token', user.token)
    this.setState({
      username: user.username
    }, 
      () => this.props.history.push('/home')
    )
  }



  //SIGN USER OUT
  signOut = () => {
    this.setState({
      username: ''
    })
    localStorage.removeItem('token')
  }

  //ALLOWS US TO ADD A CREATED POST TO THE POST ARRAY AND DISPLAY IT WITHOUT REFRESH
  addPostAndLocationsToStateArrays = (data) => {
    const { posts, locations } = this.state
    const addNewPostToPostState = [...posts]

    //CHECKS TO SEE IF POST IS BEING CREATED OR EDITED
    if (posts.includes(data)){
      const filteredOutEditedPost = [...posts].filter(post => post !== data)
      filteredOutEditedPost.unshift(data)
      this.setState({
        posts: filteredOutEditedPost
      })
    } else {
      addNewPostToPostState.unshift(data)
        this.setState({
          posts: addNewPostToPostState
        })
    }

    //CHECKS TO SEE IF LOCATION ALREADY EXISTS
    const addNewLocationToLocationState = [...locations]
    // if (locations.includes(data)){
    //   console.log('nothing to do here.')
    // } else {
      addNewLocationToLocationState.unshift(data)
      this.setState({
        locations: addNewLocationToLocationState
      })
    // }
    console.log(locations)
  }

  //USE THE GETPOST FUNCTION IN SERVICES/API TO SET STATE
  setPosts = () => {
    getPosts()
    .then(data => {
      this.setState({
          posts: data.reverse()
      })
      })
  }

  //USE THE GETPOSTS FUNCTION IN SERVICES/API TO SET LOCATION STATE
  setLocations = () => {
    // const {locations} = this.state 
    // const getLocations = [...locations]

    getPosts()
    .then(data => 
      this.setState({
              locations: data
          })
      )
}  
  //FUNCTION TO EDIT THE POST
  editThisPost = (thisPost) => {
    this.setState({
      selectedPost: thisPost
    })
  }

  //FUNCTION TO DELETE THE POST
  deleteThisPost = (thisPost) => {
    console.log(thisPost)
      const { posts } = this.state
      const removedThisPostFromPostsArray = [...posts].filter(post => post !== thisPost)
      this.setState({
        posts: removedThisPostFromPostsArray,
        locations: removedThisPostFromPostsArray
      })

  }

  //INITIATE APP BY SETTING LOCAL STORAGE TOKEN
  componentDidMount() {
    if (localStorage.token){
      // console.log("this is why we validated.")
      validate().then(data => {
        if (data.error){
          alert(data.error)
        } else {
          this.signIn(data)
          this.setPosts()
          this.setLocations()
        }
      })
    }
  }

  render () {
    const { signUp, signIn, signOut, editThisPost, deleteThisPost, addPostAndLocationsToStateArrays } = this
    const { username, posts, selectedPost, locations } = this.state

    return (
    <div className='App'>
       <Switch >
         <Route exact path='/' component={props => < WelcomePage {...props} /> }/>
         <Route path="/signin" component={props => <LoginComponent signIn={signIn} {...props} />}/>
         <Route path="/signup" component={props => <SignUpComponent signUp={signUp} signIn={signIn} {...props} />}/>
         <Route path="/NewEntry" component={props => <JournalEntryCreator signOut={signOut} {...props} addPostAndLocationsToStateArrays = {addPostAndLocationsToStateArrays}/>}/>
         <Route path="/Entry" component={props => <JournalEntryEditor signOut={signOut} {...props} username = {username} selectedPost={selectedPost} />}/>
         <Route path="/map" component={props => <Map signOut={signOut}  {...props} locations={locations} />}/>
         <Route path="/about" component={props => <AboutPage {...props} />}/>


         <Route path="/home" component={props => <HomePage 
            username = {username} 
            signOut={signOut} 
            posts = {posts} 
            signIn={signIn}
            editThisPost ={editThisPost}
            deleteThisPost = {deleteThisPost} {...props} />}
            />
         <Route path="/profile" component={props => <UserProfile 
              username = {username} 
              posts = {posts}
              editThisPost ={editThisPost}
              deleteThisPost = {deleteThisPost}
              signOut={signOut} 
              selectedPost={selectedPost[0]}
              {...props} />}
            />
       </Switch> 
    </div>
  );
}}
export default withRouter(App);


