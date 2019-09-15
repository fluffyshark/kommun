import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Header from './Header';
import BigTopic from './BigTopic';
import Footer from './Footer.js';





class App extends React.Component {
  render() {
    return (
      <div>
          <BackgroundVideo />
          <Header />
          <BigTopic />
          <Footer />
      </div>
    );
  }
}




export default App;
