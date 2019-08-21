import React from 'react'
import { Link } from 'react-router-dom'
import PostContainer from '../Containers/PostContainer'
import { createEntry } from "../Services/api";
import NavBar from '../Components/NavBar'
import { validate, getPosts } from '../Services/api'
import WelcomePage from '../User_Accounts/LoginComponent'
import LoginComponent from '../User_Accounts/LoginComponent';
import { Card, Icon, Image, Grid } from 'semantic-ui-react'



class AboutPage extends React.Component {

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

    return (
        <div>

        <Grid columns={2} divided>
        <Grid.Column width={10} className='card-column-1' >
        < NavBar signOut = {this.props.signOut}/> 

        <div className='about-page-all'>
        <div className='about-page-c'>
            <img src='https://www.southernladymagazine.com/wp-content/uploads/2015/08/Journal-Illustration-Cutout_CROP1.jpg' className="App-logo about-page-i" alt="logo" />
        </div>
        <br></br>
        <h1 className='about-page-t'> About </h1>
        
        <h3 className='about-page-h'>Benefits of Journaling </h3> 
        <br></br>
        <p className="about-page-p">For many years journaling has been a way for people to gain mental clarity, problem solve and generally offload their thoughts. 
            Journaling isn't reserved for a select few. Any one who is looking to develop themselves in their personal, professional and business 
            lives can find this practice brings them greater <b>self awareness, the ability to decontruct a problem and focus. </b> 
        </p> 
        <br></br>
        <br></br>
                
        <h3 className='about-page-h'>Why DailyWrite</h3> 
        <br></br>
        <p className="about-page-p" >
            DailyWrite gives you all the benefits of a journal with the added ability to track how you are doing over time. 
            With Daily Write you can easily see where you have journaled and how you felt while there. 

            Use DailyWrite As: 
        <ul>
            <li>Your dream incubator</li>
            <li>A daily mood tracker</li>
            <li>A travel journal</li>
        </ul>
        </p> 
        <br></br>
        <br></br>
        <h3 className='about-page-h'>Famous People Who Journal</h3> 
        <br></br>
        <Grid columns={5}>
            <Grid.Row>
                <Grid.Column>
                    <Image src='https://cdn.shopify.com/s/files/1/1728/5303/articles/TF-171-podimage_370x370_crop_center.png?v=1537907290' size='medium' circular />
                    <h4 className="about-page-f">Tim Ferris</h4>
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://res.cloudinary.com/allamerican/image/fetch/t_face_s270/https://speakerdata2.s3.amazonaws.com/photo/image/798060/Headshot-of-Oprah-Winfrey.Courtesy-of-Harpo-Inc.jpg' size='medium' circular />
                    <h4 className="about-page-f">Oprah Winfrey</h4>
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://i.warosu.org/data/biz/img/0104/23/1532574690766.jpg' size='medium' circular />
                    <h4 className="about-page-f">Ray Dalio</h4>
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://www.builttoinspire.com/wp-content/uploads/2012/02/Albert-Einstein-headshot.jpg' size='medium' circular />
                    <h4 className="about-page-f">Albert Einstein</h4>
                </Grid.Column>
                <Grid.Column>
                    <Image src='https://s3.amazonaws.com/assets.knackhq.com/assets/57b357b42bdaa3901c378143/57e5859965e75c0960179089/original/rankheadshot2.jpg' size='medium' circular />
                    <h4 className="about-page-f">Warren Buffet</h4>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
        
        
        

        </div>
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
            }
}



export default AboutPage 