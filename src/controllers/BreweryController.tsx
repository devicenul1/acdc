import React from "react";
import { match } from "react-router-dom";

import defaultView from 'views/Brewery/default';
import singleView from 'views/Brewery/single';

export type BreweryProps = { match: any };

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
                    if (data) {
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

    render() {
        if (this.props.match.params.id) {
            return singleView(this);
        }

        return defaultView(this);
    }
}

export default BreweryController;
