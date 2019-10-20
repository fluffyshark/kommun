import React from 'react';
import BackgroundVideo from './BackgroundVideo';
import Header from './Header';
import BigTopic from './BigTopic';
import Footer from './Footer';
import Searchbar from './Searchbar';
import Events from './Events'





class App extends React.Component {
  render() {

    let searchBase = [{
        id:1,
        title: "Billeshögskolan",
        description: "Billeshögsskolan är en F-6 skola. Här går cirka 190 elever från Billeberga- och Tågarpsområdet. Skolan har behörig och kompetent personal med olika utbildningar för att möta barnens olika behov.",
        image: "billeshogskolan"
      },
      {
        id:2,
        title: "Parkskolan",
        description: "Parkskolan ingår i 'Område Teckomatorp' som även omfattar förskola och fritidshem. Våra verksamheter ligger nära både varandra och omvärlden.",
        image: "parkskolan"
      }]


    return (
      <div>
          <BackgroundVideo />
          <Header />
          <Searchbar searchBase={searchBase}/>
          <BigTopic />
          <Events />
          <Footer />
      </div>
    );
  }
}




export default App;
