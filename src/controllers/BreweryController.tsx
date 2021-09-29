import React from "react";

import SearchBar from 'components/SearchBar/SearchBar';
import Card from 'elements/Card/Card';
import Preview from 'components/Preview/Preview';
import { RingLoader } from 'react-spinners';
import Table from 'elements/Table/Table';

export type BreweryProps = { state: Array<any> };

class BreweryController extends React.Component<BreweryProps> {

    state = {
        loading: false,
        error: false,
        searchBarInput: '',
        breweries: []
    };

    // Update state with current search bar input
    searchBarHandler = (e: any) => {
        this.setState({
        searchBarInput: e.target.value
        })
    }

    // onClick handler for SearchBar
    searchBreweriesByCity = (event: any) => {
    // don't allow our form to post back
    event.preventDefault();

    const city = this.state.searchBarInput;
    const API_URL = 'https://api.openbrewerydb.org/breweries';
    const URL = API_URL + `?by_city=${city}`;

    // reset our state
    this.setState({ 
      loading: true,
      breweries: [] 
    }, () => {
      fetch(URL)
      .then(res => res.json())
      .then(data => {
        // If city exists, update weather details
        if(data) {
          console.log(data);
          this.setState({
            breweries: data,
            loading: false
          });
        } else {
          // If city doesn't exist, throw error
          throw data.cod
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false,
          error: true
        });
      });
    })

  }

  // default view rednerer
  render() {

    // conditionally render card content
    let cardContent = <Preview />
    if ( this.state.loading ) {
      cardContent = <RingLoader />;
    } else if ( this.state.error ) {
      cardContent = <p>Uh Oh!</p>;
    } else if ( this.state.breweries.length > 0 ) {
      cardContent = <Table 
        dataset={ this.state.breweries } 
        title={ this.state.searchBarInput } />
    }

    return (
      <div>
        <SearchBar
          value={ this.state.searchBarInput }
          onChangeHandler={ this.searchBarHandler }
          onClickHandler={ this.searchBreweriesByCity }
          error={ this.state.error } />

        <Card>
          { cardContent }
        </Card>

        
      </div>
    );
  }
}

export default BreweryController;
