import React from 'react'
import { Link } from 'react-router-dom'
import PostContainer from '../Containers/PostContainer'
import { createEntry } from "../Services/api";
import NavBar from '../Components/NavBar'
import { validate, getPosts } from '../Services/api'
import WelcomePage from '../User_Accounts/LoginComponent'
import LoginComponent from '../User_Accounts/LoginComponent';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'



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
    //SHOW SELECTED POST IF THERE IS ONE OR SHOW ALL POSTS
    render () {
      const { posts } = this.props
      const { showPost, createPost } = this
       
      if (this.props.username){

            return (
                <div>

                <Grid columns={2} divided>
                <Grid.Column width={10} className='card-column-1' >
                < NavBar signOut = {this.props.signOut}/> 
                <h1> Welcome to your journal {this.props.username} </h1>
                <Link to='/NewEntry' className="ui primary button grow " >Add Post </Link>
                    <PostContainer 
                        posts = {posts} 
                        editThisPost ={this.props.editThisPost}
                        showPost ={showPost}
                        createPost={createPost}
                        deleteThisPost = {this.props.deleteThisPost}
                         />

</Grid.Column>

<Grid.Column width={3} className='card-column-2' >
<Link to='/home' > 
    <Card className="grow threed" >
        <Card.Content>
          <Card.Header>POSTS</Card.Header>
        </Card.Content>
        <Image className='card-image' src='https://dumielauxepices.net/sites/default/files/bubble-clipart-transparent-background-870907-9091757.png'  wrapped ui={true} />
    </Card>
</Link>
<br>
</br>
<br>
</br>

<Link to='/map'>
    <Card className="grow threed" >
        <Card.Content>
          <Card.Header>MAP</Card.Header>
        </Card.Content>
        <Image className='card-image' src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png' wrapped ui={true} />
    </Card>
</Link>

<br>
        </br>
        <br>
        </br>

        <Link to='/about'>
            <Card className="grow threed about" >
                <Card.Content>
                <Card.Header>ABOUT</Card.Header>
                </Card.Content>
                <Image className='card-image about' src='https://s3.amazonaws.com/amo_hub_content/Association1450/images/about-us-icon-shutterstock_27428206-256px.png' wrapped ui={true} />
            </Card>
        </Link>

</Grid.Column>

</Grid>
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