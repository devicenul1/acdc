import { Component } from 'react';

import classes from './App.module.scss';
import Header from 'components/Header/Header';

import Card from 'elements/Card/Card';
import Preview from 'components/Preview/Preview';

import Footer from 'components/Footer/Footer';

class App extends Component {

  // global app state
  state = {
    loading: false,
    error: false,
    breweries: [
      {
        id: 299,
        name: "Almanac Beer Company",
        brewery_type: "micro",
        street: "651B W Tower Ave",
        address_2: null,
        address_3: null,
        city: "Alameda",
        state: "California",
        county_province: null,
        postal_code: "94501-5047",
        country: "United States",
        longitude: "-122.306283180899",
        latitude: "37.7834497667258",
        phone: "4159326531",
        website_url: "http://almanacbeer.com",
        updated_at: "2018-08-23T23:24:11.758Z",
        created_at: "2018-08-23T23:24:11.758Z"
      }
    ],
    brewery: [
      {
        id: 12432,
        obdb_id: "madtree-brewing-cincinnati",
        name: "MadTree Brewing",
        brewery_type: "regional",
        street: "3301 Madison Rd",
        address_2: null,
        address_3: null,
        city: "Cincinnati",
        state: "Ohio",
        county_province: null,
        postal_code: "45209-1132",
        country: "United States",
        longitude: "-84.4239715",
        latitude: "39.1563725",
        phone: "5138368733",
        website_url: "http://www.madtreebrewing.com",
        updated_at: "2018-07-24T00:00:00.000Z",
        created_at: "2018-07-24T00:00:00.000Z"
      }
    ]
  };

  render() {

    // conditionally render card content
    let cardContent = <Preview />
    if (this.state.loading) {

    }

    return (
      <div className={ classes.App } >
        <Header 
          color="blueviolet" 
          onClickHandler={ () => void undefined } />

        <Card>
          { cardContent }
        </Card>

        <Footer color="blueviolet" />
      </div>
    );
  }
}

export default App;


/* <header className={ classes.header } >

<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */