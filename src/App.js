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

      let newsContent = [
        {
          id:1,
          title: "Skånetrafiken får nya biljettautomater",
          description:"Snart börjar Skånetrafiken utrullningen av de nya biljettautomaterna. Arbetet börjar vecka 43 och totalt ska över 200 au...",
          image: "news_skanetrafiken"
        },
        {
          id:2,
          title: "Kommunfullmäktige sammanträder",
          description:"Välkommen till kommunfullmäktiges sammanträde i kommunhuset, Svalöv, måndagen den 28 oktober klockan 18.30.",
          image: "news_svalovemblem"
        },
        {
          id:3,
          title: "Årets kulturpristagare och kulturstipendiat är...",
          description:"Svalövs kommuns kulturpris delas årligen ut som belöning för värdefulla och förtjänstfulla insatser som berikar och stim...",
          image: "news_svalovemblem"
        },
        {
          id:4,
          title: "Höstlovsaktiviteter 2019",
          description:"Snart är höstlovet här och då finns det många spännande aktiviteter för dig som är ledig.",
          image: "news_hostlov"
        },
        {
          id:5,
          title: "Svalegatan avstängd för trafik",
          description:"Från den 21 oktober kl 07.00 till den 25 oktober kl 18.00 kommer Svalegatan att vara avstängd mellan Torggatan och 100 m..",
          image: "news_gata"
        },
        {
          id:6,
          title: "Kunskapsresultat över riksgenomsnittet",
          description:"Totalt gick drygt 112 000 elever ut årskurs 9 i våras. 84,3 procent av eleverna var behöriga till ett nationellt progra...",
          image: "news_svalovemblem"
        }
      ]


      let eventContent = [{
        id:1,
        title: "Biokväll",
        description:"Var med och se Djungelboken",
        image: "event_filmkvall"
      },
      {
        id:2,
        title: "Inomhusfotboll",
        description:"Ung och spelsugen, kom till Heleneborgshallen",
        image: "event_inne_fotboll"
      },
      {
        id:3,
        title: "Konstutställning",
        description:"Njut av andras skapelser",
        image: "event_utstallning"
      },
      {
        id:4,
        title: "Innebandy",
        description:"Ung och spelsugen, kom till Heleneborgshallen",
        image: "event_innebandy"
      },
      {
        id:5,
        title: "Fågelskådning",
        description:"Följ med ut en höstmorgon och titta mot himlen",
        image: "event_fagelskadning"
      },
      {
        id:6,
        title: "Svampplockning",
        description:"Lär dig om svampar och få några i korgen.",
        image: "event_svamp"
      },
      {
        id:7,
        title: "Teater: Baren för de gamla",
        description:"Kom med på en riktig skattfest.",
        image: "event_teater"
      },
      {
        id:8,
        title: "Vandring på Söderåsen",
        description:"Guidad vandring i naturskön miljö, mitt i Skåne.",
        image: "event_vandring"
      },
      {
        id:9,
        title: "STCC på Ring Knutstorp",
        description:"Rally och tävlingar hela helgen.",
        image: "event_stcc"
      },
      {
        id:10,
        title: "Fotokurs",
        description:"Se världen från nya perspektiv.",
        image: "event_photokurs"
      },
      {
        id:11,
        title: "Dans i Kågerödslund",
        description:"Dans dans, men stäng dörren när ni kommer in.",
        image: "event_dans"
      },
      {
        id:12,
        title: "Öppet hus hos Brandkåren",
        description:"Se var brandbilarna står parkerade.",
        image: "event_oppet_hus"
      }

    ]


    return (
      <div>
          <BackgroundVideo />
          <Header />
          <Searchbar searchBase={searchBase}/>
          <BigTopic newsContent={newsContent}/>
          <Events eventContent={eventContent}/>
          <Footer />
      </div>
    );
  }
}




export default App;
