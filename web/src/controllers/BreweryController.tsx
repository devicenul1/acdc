import React from "react";
import { match, RouteComponentProps } from "react-router-dom";

import iBrewery from "interfaces/iBrewery";
import { Breweries } from "models/BreweryApiService";

import defaultView from 'views/Brewery/default';
import singleView from 'views/Brewery/single';

interface iBreweryProps extends RouteComponentProps {
    match: match<{ id: string }>;
};

interface iBreweryState {
    loading: boolean,
    error: boolean,
    searchBarInput: string,
    breweries: Array<iBrewery>
}

class BreweryController extends React.Component<iBreweryProps, iBreweryState> {

    // set our default state
    state = {
        loading: false,
        error: false,
        searchBarInput: '',
        breweries: []
    } as iBreweryState;

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

        // reset our state
        this.setState({
            loading: true,
        }, () => {
            Breweries.getBreweriesByCity(city)
                .then((data) => {
                    this.setState({
                        loading: false,
                        breweries: data
                    })
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
            var brewery = this.state.breweries.find((brewery) =>
                brewery.id === Number(this.props.match.params.id));

            return singleView(brewery ? brewery : null);
        }

        return defaultView(this);
    }
}

export default BreweryController;
