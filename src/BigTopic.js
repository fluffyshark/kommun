import React from 'react';
import './css/bigTopic.css'
import billeshogskolan from './img/billeshogskolan.png';

class BigTopic extends React.Component {



  render(){


    let newsContent = null;
    if (this.props.newsContent) {
      newsContent = this.props.newsContent.map(function(newsContent){
        return (
          <div className="bigtopic_topic_box" key={newsContent.id}>
            <div className="bigtopic_item_box_image_container">
                <img className="bigtopic_billeshogskolan" src={require(`./img/${newsContent.image}.png`)} alt="none" />
            </div>
            <div className="searchbar_item_box_text_container">
                <h4>{newsContent.title}</h4>
                <p>{newsContent.description}</p>
            </div>
          </div>
        );
        })
      }








    return(
    <div className="bigtopic_container">
      <div className="bigtopic_top_section">
        <p className="bigtopic_title">Nyheter</p>
        <p className="bigtopic_subtext">Håll dig uppdaterad gällande Svalövs kommun.</p>
      </div>


      <div className="bigtopic_bottom_section">
        <div className="bigtopic_bottom_section_container">

              {newsContent}

        </div>
      </div>

    </div>

    );
  }
}

export default BigTopic;
