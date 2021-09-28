import React from 'react'

import classes from './Logo.module.scss';
import logoSvg from 'elements/logo.svg';

const logo = (props: { colorScheme: string; clicked: React.MouseEventHandler<HTMLHeadingElement> | undefined; }) => {
    let logoWithColorScheme = [
        classes.Logo,
        (props.colorScheme === 'dark') ? classes.Dark : classes.Light
    ];
    return(
        <p className={ logoWithColorScheme.join(' ') } onClick={ props.clicked }>
            andculture Design Challenge <img src={ logoSvg } className={ classes.logo } alt="logo" />
        </p>
    );
}

export default logo;
