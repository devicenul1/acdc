import BreweryController from "controllers/BreweryController";

import SearchBar from 'components/SearchBar/SearchBar';
import Card from 'elements/Card/Card';
import Preview from 'components/Preview/Preview';
import { RingLoader } from 'react-spinners';
import Table from 'elements/Table/Table';

const breweryView = (component: BreweryController) => {

    let cardContent = <Preview />
    if (component.state.loading) {
        cardContent = <RingLoader />;
    } else if (component.state.error) {
        cardContent = <p>Uh Oh!</p>;
    } else if (component.state.breweries.length > 0) {
        cardContent = <Table
            dataset={component.state.breweries}
            title={component.state.searchBarInput} />
    }

    return (
        <div>
            <SearchBar
                value={component.state.searchBarInput}
                onChangeHandler={component.searchBarHandler}
                onClickHandler={component.searchBreweriesByCity}
                error={component.state.error} />

            <Card>
                {cardContent}
            </Card>
        </div>
    );
}

export default breweryView;
