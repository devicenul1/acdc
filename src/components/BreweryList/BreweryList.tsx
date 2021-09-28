import React from 'react'

import classes from './BreweryList.module.scss';

const BreweryList = (props: { breweries: Array<any>; city: string; }) => {
    return(
        <div className={ classes.BreweryListWrapper }>
            <table className={ classes.Table } summary={`List of breweries in ${ props.city } `}>
                <caption>List of breweries in { props.city }</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>
                    { props.breweries.map((brewery, index) => (
                        <tr data-index={ index }>     
                                <td>{ brewery.name }</td>
                                <td>{ brewery.street }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}