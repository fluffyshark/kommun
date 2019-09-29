import React from 'react';
import './css/Header_menu.css'
import straw from './img/header_panel_straw.png';
import logo from './img/logo_big.png';
import logo_white from './img/logo_white.png';
import {Spring} from 'react-spring/renderprops';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: {
        display:"none"
      },
      nonsticky: {
        width:"100%",
        height:"110px",
        backgroundColor:"#5a94db",
      },
      header: {
        width:"100%",
        backgroundColor:"#5a94db",
        position: 'absolute', top: "0px", left: "0px"
      },

    }

  }


  addContent() {
    if (window.scrollY > 570) {
    return (

      <Spring
        from={{ opacity: 0, transform: 'translate3d(0,-30px,0)' }}
        to={{ opacity: 1, transform: 'translate3d(0,3px,0)' }}
        config={{ delay:100, duration:200 }}
      >
        { props => (
          <div style={props}>
            <div className="header_sticky_panel" style={this.state.sticky}>
              <img className="header_logo_white" src={logo_white} alt="logo" />
              <p className="header_menutext_utbildning">UTBILDNING & BARNOMSORG</p>
              <p className="header_menutext_bobygga">BO, BYGG, MILJÖ</p>
              <p className="header_menutext_omsorg">OMSORG & SOCIALT STÖD</p>
              <p className="header_menutext_uppleva">UPPLEVA & GÖRA</p>
              <p className="header_menutext_naringsliv">NÄRINGSLIV</p>
            </div>
          </div>
        ) }
    </Spring>

    );
  }
  }



  listenScrollEvent = e => {
    if (window.scrollY > 570) {
      this.setState({
        sticky: {

        },
        nonsticky: {
          display:"none"
        },
        header: {
          width:"100%",
          backgroundColor:"#5a94db",
          position: 'fixed', top: "0osv", left: "0px",
          height: "70px",
        }

      })


    } else {
      this.setState({
        sticky: {
          display:"none"
        },
        nonsticky: {

        },
        header: {
          width:"100%",
          backgroundColor:"#5a94db",
          position: 'absolute', top: "0px", left: "0px",
          height:"110px",
        }
      })
    }

  }







  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {

    return (
      <div className="header_container" style={this.state.header}>
          <img className="header_menu_panel_straw" src={straw} alt="straw" />

          <div className="header_nonsticky_panel" style={this.state.nonsticky}>
              <img className="header_logo_big" src={logo} alt="logo" />
              <p className="header_menutext_invanare">INVÅNARE</p>
              <p className="header_menutext_seochgora">SE & GÖRA</p>
              <p className="header_menutext_foretagande">FÖRETAGANDE</p>
              <p className="header_menutext_kommunochpolitik">KOMMUN & POLITIK</p>
          </div>

              {this.addContent()}
              
      </div>
    );
  }
}

export default Header;
