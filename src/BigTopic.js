import React from 'react';
import './css/bigTopic.css'
import billeshogskolan from './img/billeshogskolan.png';

class BigTopic extends React.Component {



  render(){
    return(
    <div className="bigtopic-container">
      <div className="bigtopic_top_section">
        <p className="bigtopic_title">Nyheter</p>
        <p className="bigtopic_subtext">Håll dig uppdaterad gällande Svalövs kommun.</p>
      </div>


      <div className="bigtopic_bottom_section">
        <div className="bigtopic_bottom_section_container">

              <div className="bigtopic_topic_box">
                <div className="bigtopic_item_box_image_container">
                    <img className="bigtopic_billeshogskolan" src={billeshogskolan} alt="billeshogskolan" />
                </div>
                <div className="searchbar_item_box_text_container">
                    <h4>Hej</h4>
                    <p>Hej</p>
                </div>
              </div>

        </div>
      </div>

    </div>

    );
  }
}

export default BigTopic;
