import React from 'react';

import classes from './Footer.module.scss';

const footer = (props: { color: any; }) => {
    return(
        <footer className={ classes.Footer } style={ {backgroundColor: props.color} } >
            <div className={ classes.Separator }></div>
        </footer>
    );
}

export default footer;
