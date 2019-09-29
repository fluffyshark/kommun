import React from 'react';
import './css/searchbar.css';

import SearchResults from './SearchResults';

class Searchbar extends React.Component {
  constructor() {
    super();

    this.state = {
      search: "",
      dispayResults: {display:"none"}

    }
  }



  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
    if (this.state.search.length <= 1) {this.setState({dispayResults: {display:"none"}})} else {this.setState({dispayResults: {display:"inline"}})}
    console.log(this.state.search)
  }




  render() {

    let filteredSearch = this.props.searchBase.filter(
      (search) => {
        return search.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );



    return(
      <div className="searchbar_section">


        <div className="searchbar_container">
          <div className="searchbar_title">
            <p>Vad vill du hitta?</p>
          </div>
            <div className="searchbar_input_container">
              <div className="searchbar_input_button_container">
              <form >
                <input className="searchbar_input" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Vad letar du efter..." />
              </form>
              <button className="searchbar_button" type="submit">
                Sök
              </button>
              </div>
            </div>
        </div>


        <div className="grid_centering" style={this.state.dispayResults}>
          <div className="grid-container ">

              {filteredSearch.map((search) => {
                return <SearchResults search={search} key={search.id}/>
              })}

            </div>
          </div>


      </div>

    );
  }
}

export default Searchbar;
