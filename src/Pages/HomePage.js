import React from 'react'
import { Link } from 'react-router-dom'


class HomePage extends React.Component {

// componentDidMount () {
//     if (!this.props.username){
//         this.props.history.push('/')
//     }
// }

render () {
    return (
        <div>
        <h1> Welcome to your journal {this.props.username} </h1>
            <Link to='/' class="ui primary button" onClick={this.props.signOut} >Sign out </Link>
        </div>
        )
}
}



export default HomePage 