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
    handleSubmit = () => {
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
                <img src='https://images.vexels.com/media/users/3/136991/isolated/preview/064fd00b13b1c206ff592032ffca1e0c-time-clock-icon-by-vexels.png' className="App-logo" alt="logo" />
                <h1>Journal App</h1>
                <Form>
                    <label>Username</label>
                    <Form.Field>
                    <input name="username" placeholder='Username' onChange={handleChange} />
                    </Form.Field>
                    <label>Password</label>
                    <Form.Field>
                    <input type="password" name="password"  placeholder='Password' onChange={handleChange} />
                    </Form.Field>
                    <br />
                    <Link to='/home' class="ui primary button" onClick= {handleSubmit} >Submit</Link>
                </Form>
            </header>
        </div>
      )}


}

export default LoginComponent