import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import LoginComponent from "./User_Accounts/LoginComponent";
import Posts from "./Components/Posts";
import api from "./Services/api";
import WelcomePage from './User_Accounts/WelcomePage'
import HomePage from './Pages/HomePage'
import { validate } from './Services/api'


class App extends React.Component {
  //SET STATE WITH THE CURRENT USER'S USERNAME
  state = {
    username: '',
    id: ''
  }

  //SIGN USER IN
  signIn = user => {
    this.setState({
      username: user.username,
      id: user.id
    })
    localStorage.setItem('token', user.token)
  }

  //SIGN USER OUT
  signOut = () => {
    this.setState({
      username: '',
      id: ''
    })
    localStorage.removeItem('token')
  }

  //INITIATE APP BY SETTING LOCAL STORAGE TOKEN
  componentDidMount() {
    if (localStorage.token){
      validate().then(data => {
        if (data.error){
          alert(data.error)
        } else {
          this.signIn(data)
        }
      })
    }
  }

  render () {
    const { signIn, signOut } = this
    const { username } = this.state

    return (
    <div className='App'>
       <Switch >
         <Route exact path='/' component={props => < WelcomePage {...props} /> }/>
         <Route path="/signin" component={props => <LoginComponent signIn={signIn} {...props} />}/>
         <Route path="/home" component={props => <HomePage username = {username} signOut={signOut} {...props} />}/>

       </Switch> 
    </div>
  );
}}
export default withRouter(App);
