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
            <img src='https://images.vexels.com/media/users/3/136991/isolated/preview/064fd00b13b1c206ff592032ffca1e0c-time-clock-icon-by-vexels.png' className="App-logo" alt="logo" />
            <h1>Journal App</h1>
        
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
