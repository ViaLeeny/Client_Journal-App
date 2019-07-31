import React from 'react'
import { Box, Grommet, Button, grommet } from 'grommet'
// const { post } = this.props
// var text 



//SETS THE TONE FOR EACH POST (COLOR/TONE BOX)
class Tone extends React.Component {

    state = {
        borderColor: ""
    }

    componentDidMount(){
    switch (this.props.post.tone) {
        case "anger":
            this.setState({
                borderColor: "#ff3333" //RED
            });
            break;
        case "fear":
            this.setState({
                borderColor: "#000000" //FEAR
            });
            break;
        case "joy":
            this.setState({
                borderColor: "#ffff00" //YELLOW
            });
            break;
        case "sadness":
            this.setState({
                borderColor: "#ff9900" //ORANGE
            });
            break;
        case "confident":
            this.setState({
                borderColor: "#6600cc" //PURPLE
            });
            break;
        case "tentative":
            this.setState({
                borderColor: "#339933" //GREEN
            });
            break;
        case "Analytical": 
            this.setState({
                borderColor: "#3366ff" //BLUE
            });
            break;
        default: 
        this.setState({
            borderColor: "#339933" //GREY
        });
        break;
            
    }}

    render () {
        return (
            <div className= "tone-box"
            style={{
                justifyContent: "center"
              }}
            >
               <Box
                    direction="column"
                    border={{ color: 'brand', size: 'large' }}
                    pad="xsmall"
                    elevation="small"
                    round="large"
                    width="Small"
                    height="small"
                    alignContent="center"
                    style={{
                        width: "130px",
                        height: "50px",
                        justifyContent: "center",
                        "border-color": this.state.borderColor, 
                        "font-weight": "bold", 
                      }}
                    >
                       {` ${this.props.post.tone.toUpperCase()}`}
                </Box>
            </div>
        )
    }
}

export default Tone