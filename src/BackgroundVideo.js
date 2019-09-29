import React from 'react';
import background from './img/background.jpg';
import welcome from './img/welcome.png';
import './css/background.css'
import {Spring} from 'react-spring/renderprops'

class BackgroundVideo extends React.Component {
  constructor(props) {
    super(props)


  }



  welcomeImageController() {
    return (

      <Spring from={{ opacity: 1, marginTop: 0 }} to={{ opacity: 0, marginTop: -50 }}  config={{ delay:3000, duration:700 }}>
        { props => (

          <div className="background_image_position" style={props}>

              <Spring from={{ opacity: 0, marginTop: -10 }} to={{ opacity: 1, marginTop: 0 }}  config={{ delay:500, duration:600 }}>
                { props => (
                      <div style={props}>
                          <img className="background_welcome_image" src={welcome} alt="welcome" />
                      </div>
                )}
              </Spring>

          </div>

        )}
      </Spring>
    );
  }






  render() {

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    return (
      <div>
          <Spring from={{ height:windowHeight}} to={{ height:500 }} config={{ delay:3000, duration:1000 }}>
            { props => (
                <div className="container" style={props}>
                    <img style={{width:windowWidth}} src={background} alt="background" />

                    {this.welcomeImageController()}

                </div>
            )}
          </Spring>
      </div>

      );
    }
}


export default BackgroundVideo;
