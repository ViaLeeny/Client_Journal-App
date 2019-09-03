import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { login} from '../Services/api'

class LoginComponent extends React.Component {

    //STATE FOR USER LOGIN DETAILS TYPED IN FORM
    state = {
        username: "", 
        password: ""
    }

    //CHANGE STATE OF USERNAME INPUT WHILE USER TYPES
    handleSubmit = (e) => {
        e.preventDefault()
        login(this.state.username, this.state.password)
        .then(data => {
            if (data.errors){
                alert(data.errors)
            } else {
                this.props.signIn(data)
            }
        })
    }

    //CHANGE STATE OF PASSWORD AS USER TYPES
    handleChange = (event) => {
     this.setState({
         [event.target.name]: event.target.value
     })
    }

    //RENDER THE USERLOGIN FORM
    render() {
        const {handleSubmit, handleChange} = this
    return (
        <div class='signin-form'>
            <header className="App-header">
                <img src='https://www.southernladymagazine.com/wp-content/uploads/2015/08/Journal-Illustration-Cutout_CROP1.jpg' className="App-logo" alt="logo" />
                <h1>DailyWrite</h1>
                <Form onSubmit= {handleSubmit}>
                    <label>Username</label>
                    <Form.Field>
                    <input name="username" placeholder='Username' onChange={handleChange} />
                    </Form.Field>
                    <label>Password</label>
                    <Form.Field>
                    <input type="password" name="password"  placeholder='Password' onChange={handleChange} />
                    </Form.Field>
                    <br />
                    <button class="ui primary button" >Submit</button>
                    {/* <Link to='/home' className="ui primary button" onClick= {handleSubmit} >Submit</Link> */}
                    <br/>
                    <Link to='/signup' >Or, sign up!</Link>
                </Form>
            </header>
        </div>
      )}


}

export default LoginComponent
// lets push