import React from 'react';

import classes from './Header.module.scss';
import Logo from 'elements/Logo/Logo';

const header = (props: { color: any; onClickHandler: React.MouseEventHandler<HTMLHeadingElement> | undefined; }) => {
    return(
        <header className={ classes.Header } style={ {backgroundColor: props.color} }>
            <Logo colorScheme={ 'light' } clicked={ props.onClickHandler } />
        </header>
    ); 
}

export default header;