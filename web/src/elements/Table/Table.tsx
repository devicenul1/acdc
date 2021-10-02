import React from 'react'
import { Link } from 'react-router-dom';

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
                            <Link to={{
                                pathname: `/Breweries/${set.id}`,
                                state: props.dataset
                            }}>
                                <td>{set.name}</td>
                                <td>{set.street}</td>
                            </Link>
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
