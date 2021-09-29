import React from 'react'

import classes from './Table.module.scss';

const Table = (props: { dataset: Array<any>; title: string; }) => {   

    return(
        <div className={ classes.TableWrapper }>
            <table className={ classes.Table } summary={`List of breweries in ${ props.title } `}>
                <caption>List of breweries in { props.title }</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Street</th>
                    </tr>
                </thead>
                <tbody>
                    { props.dataset.map((set, index) => (
                        <tr data-index={ index }>     
                                <td>{ set.name }</td>
                                <td>{ set.street }</td>
                                <td hidden>{ set.id }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={ classes.TotalObjects }>
                <p>Total Items: { props.dataset.length }</p>
            </div>
        </div>
    );
}

export default Table;
