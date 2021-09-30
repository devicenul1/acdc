import Card from 'elements/Card/Card';
import iBrewery from "interfaces/iBrewery";

const breweryView = (brewery: iBrewery | null) => {

    if (brewery) {
        return (
            <Card>
                {
                    <div>
                        <h1>{brewery.name}</h1>
                        <p>
                            <b>Address:</b> {brewery.street}, <br />
                            {brewery.city} {brewery.state}
                        </p>
                    </div>
                }
            </Card>
        )
    }

    return (
        <Card>
            {
                <div>
                    <h1>No Brewery Found</h1>
                    <p>Uh oh! There doesn't seem to be a brewery with that ID.</p>
                </div>
            }
        </Card>
    )
}

export default breweryView;
