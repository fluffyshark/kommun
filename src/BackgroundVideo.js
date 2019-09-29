import React from 'react';
import background from './img/background.jpg';
import welcome from './img/welcome.png';
import './css/background.css'
import {Spring} from 'react-spring/renderprops'
import logo_white from './img/logo_white.png';

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

              <div className="background_second_menu">
                <p className="background_menutext_utbildning">UTBILDNING & BARNOMSORG</p>
                <p className="background_menutext_bobygga">BO, BYGG, MILJÖ</p>
                <p className="background_menutext_omsorg">OMSORG & SOCIALT STÖD</p>
                <p className="background_menutext_uppleva">UPPLEVA & GÖRA</p>
                <p className="background_menutext_naringsliv">NÄRINGSLIV</p>
              </div>

      </div>

      );
    }
}


export default BackgroundVideo;
