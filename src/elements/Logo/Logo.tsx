import React from 'react'

import classes from './Logo.module.scss';
import logoSvg from './logo.svg';

const logo = (props: { colorScheme: string; clicked: React.MouseEventHandler<HTMLHeadingElement> | undefined; }) => {
    let logoWithColorScheme = [
        classes.Logo,
        (props.colorScheme === 'dark') ? classes.Dark : classes.Light
    ];
    return(
        <div>
            <p className={ logoWithColorScheme.join(' ') } onClick={ props.clicked }>
                andculture Development Challenge 
            </p>
            <img src={ logoSvg } className={ classes.logo } alt="logo" />
        </div>
    );
}

export default logo;
