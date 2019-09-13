import React from 'react';
import background from './img/background.jpg';
import Header from './Header_menu';
import welcome from './img/welcome.png';
import './css/background.css'
import {Spring} from 'react-spring/renderprops'

class BackgroundVideo extends React.Component {
  render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight


    return (

      <div className="container" style={{ width:windowWidth, height:windowHeight}}>
          <img style={{width:windowWidth}} src={background} alt="background" />
          <div className="background_image_position">

          <Spring
            from={{ opacity: 0, marginTop: -30 }}
            to={{ opacity: 1, marginTop: 0 }}
            config={{ delay:500, duration:500 }}
          >
            { props => (
              <div style={props}>
              <img className="background_welcome_image" src={welcome} alt="welcome" />
              </div>
            ) }

            </Spring>
          </div>
          <Header />
      </div>


      );
    }
}


export default BackgroundVideo;
