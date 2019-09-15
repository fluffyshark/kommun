import React from 'react';
import './css/footer.css'
import footer_straw from './img/footer_image.png';
import footer_mall from './img/footer_mall.png';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_container">
        <div className="footer_text_firstcolumn">
          <h2>Information</h2>
          <p>Anslagstavla</p>
          <p>Brandriskprognos</p>
          <p>Hantering av personuppgifter</p>
          <p>Handlingar, kallelser, protokoll</p>
          <p>Förtroendevalda i kommunen</p>
          <p>Evenemangkalendern</p>
        </div>

        <div className="footer_text_secondcolumn">
          <h2>Länkar</h2>
          <p>Jobba hos oss</p>
          <p>Kundval</p>
          <p>Kvalitet och utveckling</p>
          <p>Lämna synpunkter</p>
          <p>Felanmälan Gata & Park</p>
          <p>Bredbandsutbyggnad</p>
        </div>

        <div className="footer_text_thirdcolumn">
          <h2>Kontakt</h2>
          <p className="footer_text_thirdcolumn_title">Besökadress:</p>
          <p>Herrevadsgatan 10 | Kommunhuset</p>
          <p className="footer_text_thirdcolumn_title">Postadress:</p>
          <p>Svalövs kommun</p>
          <p>268 21 Svalöv</p>
          <p>0418-47 50 00</p>
          <p>Övriga kontaktuppgifter:</p>
        </div>



        <img className="footer_straw" src={footer_straw} alt="footer_straw" />
      </div>
    );
  }
}

export default Footer;
