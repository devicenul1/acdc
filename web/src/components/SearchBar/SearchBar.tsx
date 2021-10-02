import React from 'react'

import classes from './SearchBar.module.scss';
import InputField from 'elements/InputField/InputField';
import Button from 'elements/Button/Button';

const searchBar = (props: { value: any; onChangeHandler: any; error: any; onClickHandler: any; }) => {
    
    return(
        <div className={ classes.SearchBarWrapper }>
            <form onSubmit={ props.onClickHandler }>
                <InputField
                    type="text"
                    name="city"
                    label="Search Breweries by City"
                    placeholder="Enter a city" 
                    value={ props.value } 
                    handleChange={ props.onChangeHandler } 
                    error={ props.error } />
                <Button 
                    name="searchSubmit" 
                    type="submit" 
                    position="onForm"
                    clicked={ () => {} }>Set</Button>
            </form>
        </div>
    );
}

export default searchBar;