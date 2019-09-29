import React from 'react';
import billeshogskolan from './img/billeshogskolan.png';
import {Spring} from 'react-spring/renderprops'

class SearchResults extends React.Component {


  render() {
    console.log(this.props.search.image);
    return(

      <Spring from={{ opacity: 0, }} to={{ opacity: 1, }} config={{ delay:500, duration:600 }}>
      { props => (

        <div className="grid-item" style={props}>
          <div className="searchbar_item_box_image_container">
              <img className="searchbar_billeshogskolan" src={require(`./img/${this.props.search.image.toLowerCase()}.png`)} alt="billeshogskolan" />
          </div>
          <div className="searchbar_item_box_text_container">
              <h4>{this.props.search.title}</h4>
              <p>{this.props.search.description}</p>
          </div>
        </div>
      )}

        </Spring>

    );
  }
}

export default SearchResults;
