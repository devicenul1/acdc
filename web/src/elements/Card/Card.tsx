import React from 'react'

import classes from './Card.module.scss';

const card = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return(
        <div className={ classes.CardWrapper }>
            <div className={ classes.Card }>
                { props.children }
            </div>
        </div>
    );
}

export default card;
