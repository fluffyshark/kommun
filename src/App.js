import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Header from './Header_menu';
import BigTopic from './BigTopic';




class App extends React.Component {
  render() {
    return (
      <div>
          <BackgroundVideo />
          <Header />
          <BigTopic />
      </div>
    );
  }
}




export default App;
