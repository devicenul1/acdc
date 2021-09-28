import { Component } from 'react';

import classes from './App.module.scss';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import Card from 'elements/Card/Card';
import Preview from 'components/Preview/Preview';
import { RingLoader } from 'react-spinners';

import Footer from 'components/Footer/Footer';

class App extends Component {

  // global app state
  state = {
    loading: false,
    error: false,
    searchBarInput: '',
    breweries: []
  };

  // preserve state for defaults
  baseState = this.state;

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
    });
  }

  render() {

    // conditionally render card content
    let cardContent = <Preview />
    if ( this.state.loading ) {
      cardContent = <RingLoader />;
    } else if ( this.state.error ) {
      cardContent = <p>Uh Oh!</p>;
    }

    return (
      <div className={ classes.App } >
        <Header 
          color="blueviolet" 
          onClickHandler={ () => void undefined } />

        <SearchBar
          value={ this.state.searchBarInput }
          onChangeHandler={ this.searchBarHandler }
          onClickHandler={ this.searchBreweriesByCity }
          error={ this.state.error } />

        <Card>
          { cardContent }
        </Card>

        <Footer color="blueviolet" />
      </div>
    );
  }
}

export default App;
