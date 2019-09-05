import React from 'react';
import background from './img/background.jpg';
import welcome from './img/welcome.png';
import './css/background.css'

class BackgroundVideo extends React.Component {
  render() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight - 80;


    return (
      <div className="container" style={{ width:windowWidth, height:windowHeight}}>
          <img style={{width:windowWidth}} src={background} alt="background" />
          <div className="image_position">
            <img className="welcome_image" src={welcome} alt="welcome" />
          </div>
      </div>
      );
    }
}


export default BackgroundVideo;
