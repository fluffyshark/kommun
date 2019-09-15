import React from 'react';
import background from './img/background.jpg';
import welcome from './img/welcome.png';
import './css/background.css'
import {Spring} from 'react-spring/renderprops'

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundContainer: {
        width:window.innerWidth,
        height:window.innerHeight
      }
    }

  }

  listenScrollEvent = e => {
    if (window.scrollY > 700) {
      console.log("transform")

      this.setState({
        backgroundContainer:{
          height:"500px"
        }
      })
    }
  }



  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }



  backgroundController() {
console.log(this.state)
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

   if (window.scrollY > 700) {

     return(
       <div className="container" style={this.state.backgroundContainer }>
          <img style={{width:windowWidth}} src={background} alt="background" />
       </div>
     );

   } else {

     return(
       <div className="container" style={this.state.backgroundContainer }>
           <img style={{width:windowWidth}} src={background} alt="background" />
           <div className="background_image_position">

           <Spring from={{ opacity: 0, marginTop: -10 }} to={{ opacity: 1, marginTop: 0 }} config={{ delay:300, duration:500 }}>

             { props => (
               <div style={props}>
                  <img className="background_welcome_image" src={welcome} alt="welcome" />
               </div>
             )}

             </Spring>

           </div>
       </div>
     );

   }

  }



  render() {
    return (

      <div>
        {this.backgroundController()}
      </div>

      );
    }
}


export default BackgroundVideo;
