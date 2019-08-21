import React from 'react'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'


class SideBar extends React.Component {
//MAP

 
    render () {
        return (
            <div>
                 
         <Card>
            <Card.Content>
                <Card.Header>Map</Card.Header>
                <Image src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png' wrapped ui={false} />
            </Card>

            <Card>
            
            <Card.Content>
                <Card.Header>Posts</Card.Header>
                <Image src='https://dumielauxepices.net/sites/default/files/bubble-clipart-transparent-background-870907-9091757.png' wrapped ui={false} />
            </Card>

            <Card>
            
            <Card.Content>
                <Card.Header>Dashboard</Card.Header>
                <Image src='https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/graph.png' wrapped ui={false} />
            </Card>

        <Grid>
            <Grid.Column width={9}>
            <Image src='/images/wireframe/image.png' />
            </Grid.Column>
            <Grid.Column width={3}>
            <Card>
            
            <Card.Content>
                <Card.Header>Map</Card.Header>
                <Image src='http://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png' wrapped ui={false} />
            </Card>

            <Card>
            
            <Card.Content>
                <Card.Header>Posts</Card.Header>
                <Image src='https://dumielauxepices.net/sites/default/files/bubble-clipart-transparent-background-870907-9091757.png' wrapped ui={false} />
            </Card>

            <Card>
            
            <Card.Content>
                <Card.Header>Dashboard</Card.Header>
                <Image src='https://cdn3.iconfinder.com/data/icons/complete-set-icons/512/graph.png' wrapped ui={false} />
            </Card>
            
            </Grid.Column>
        </Grid>


            </div>
        )
    }

} 


  export default SideBar


  <Grid>
    <Grid.Column width={4}>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>