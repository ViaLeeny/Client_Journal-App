import React from 'react'
import { Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { signup} from '../Services/api'

class SignUpComponent extends React.Component {

    //STATE FOR USER LOGIN DETAILS TYPED IN FORM
    state = {
        username: "", 
        password: "", 
        email: "",
        first_name: '', 
        last_name: ''
    }

    //CHANGE STATE OF USERNAME INPUT WHILE USER TYPES
    handleSubmit = () => {
        const {first_name, last_name, email, username, password } = this.state
        signup(first_name, last_name, email, username, password)
        .then(data => {
            if (data.errors){
                alert(data.errors)
            } else {
                this.props.signUp(data)
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
                <h1>Journal App</h1>
                <Form>
                    <label>First Name</label>
                    <Form.Field>
                    <input name="first_name" placeholder='First Name' onChange={handleChange} />
                    </Form.Field>

                    <label>Last Name</label>
                    <Form.Field>
                    <input name="last_name" placeholder='Last Name' onChange={handleChange} />
                    </Form.Field>

                    <label>Email</label>
                    <Form.Field>
                    <input name="email" placeholder='Email' onChange={handleChange} />
                    </Form.Field>

                    <label>Username</label>
                    <Form.Field>
                    <input name="username" placeholder='Username' onChange={handleChange} />
                    </Form.Field>

                    <label>Password</label>
                    <Form.Field>
                    <input type="password" name="password"  placeholder='Password' onChange={handleChange} />
                    </Form.Field>

                    <br />
                    <Link to='/home' class="ui primary button" onClick= {handleSubmit} >Sign Up</Link>
                </Form>
            </header>
        </div>
      )}


}

export default SignUpComponent