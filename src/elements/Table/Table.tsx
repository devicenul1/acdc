import React from 'react'

import classes from './Table.module.scss';

const Table = (props: { dataset: Array<any>; title: string; }) => {

    return (
        <div className={classes.TableWrapper}>
            <table className={classes.Table} summary={`Breweries in ${props.title} `}>
                <caption>Breweries in {props.title}</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>
                    {props.dataset.map((set, index) => (
                        <tr data-index={index}>
                            <a href={`/Breweries/${set.id}`}>
                                <td>{set.name}</td>
                                <td>{set.street}</td>
                            </a>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={classes.TotalObjects}>
                <p>Total Items: {props.dataset.length}</p>
            </div>
        </div>
    );
}

export default Table;
