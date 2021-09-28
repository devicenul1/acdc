import React from 'react';

import classes from './Preview.module.scss';
import previewSvg from './preview.svg';

const preview = () => {
    return(
        <img src={ previewSvg } alt="Design Challenge Icon" className={ classes.Preview } />
    );
}

export default preview;
