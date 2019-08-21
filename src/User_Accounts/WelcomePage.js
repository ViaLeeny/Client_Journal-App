import React from 'react';
import '../App.css';
import {Link } from 'react-router-dom'



class WelcomePage extends React.Component {

    //USER WELCOME SCREEN WITH LOGIN AND SIGNUP BUTTONS
    render(){
    return (
        //THIS IS THE FIRST SCREEN A USER SEES WHEN NO ONE IS LOGGED IN
        <div className="App">
        <header className="App-header">
            <img src='https://www.southernladymagazine.com/wp-content/uploads/2015/08/Journal-Illustration-Cutout_CROP1.jpg' className="App-logo" alt="logo" />
            <h1>DailyWrite</h1>
        
            <div>
            <Link to='/signin' class="ui primary button"  >Sign In </Link>
            <Link to='/signup' class="ui secondary button" >Sign Up </Link>
            {/* <button class="ui primary button" onClick={this.handleSubmit}>Sign In</button> */}
            </div>
            </header>
            

        </div>
    );}
}
export default WelcomePage;
