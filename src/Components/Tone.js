import React from 'react'
import { Box, Grommet, Button, grommet } from 'grommet'
// const { post } = this.props
// var text 



//SETS THE TONE FOR EACH POST (COLOR/TONE BOX)
class Tone extends React.Component {

    state = {
        borderColor: "", 
        tone: ''
    }

    componentDidMount(){
    switch (this.props.post.tone) {
        case "anger":
            this.setState({
                borderColor: "#ff3333", //RED
                tone: this.props.post.tone
            });
            break;
        case "fear":
            this.setState({
                borderColor: "#000000", //FEAR
                tone: this.props.post.tone
            });
            break;
        case "joy":
            this.setState({
                borderColor: "#ffff00", //YELLOW
                tone: this.props.post.tone
            });
            break;
        case "sadness":
            this.setState({
                borderColor: "#ff9900", //ORANGE
                tone: this.props.post.tone
            });
            break;
        case "confident":
            this.setState({
                borderColor: "#339933", //GREEN 
                tone: this.props.post.tone
            });
            break;
        case "tentative":
            this.setState({
                borderColor: "#6600cc", //PURPLE
                tone: this.props.post.tone
            });
            break;
        case "Analytical": 
            this.setState({
                borderColor: "#3366ff", //BLUE
                tone: this.props.post.tone
            });
            break;
        default: 
        this.setState({
            borderColor: "#999999", //GREY
            tone: "NO TONE"
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
                        margin: "auto",
                        justifyContent: "center",
                        "border-color": this.state.borderColor, 
                        "font-weight": "bold", 
                      }}
                    >
                       {` ${this.state.tone.toUpperCase()}`}
                </Box>
            </div>
        )
    }
}

export default Tone