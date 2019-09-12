import React from 'react';
import './css/Header_menu.css'
import straw from './img/header_panel_straw.png';
import logo from './img/logo_big.png';

class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
        <img className="header_menu_panel_straw" src={straw} alt="straw" />
        <img className="header_logo_big" src={logo} alt="logo" />
        <p className="header_menutext_invanare">INVÅNARE</p>
        <p className="header_menutext_seochgora">SE & GÖRA</p>
        <p className="header_menutext_foretagande">FÖRETAGANDE</p>
        <p className="header_menutext_kommunochpolitik">KOMMUN & POLITIK</p>

      </div>
    );
  }
}

export default Header;
