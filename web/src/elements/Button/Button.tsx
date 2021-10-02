import React from 'react'

import classes from './Button.module.scss';

const button = (props: { 
    position: string; 
    type: "button" | "submit" | "reset" | undefined; 
    name: string | undefined; 
    clicked: React.MouseEventHandler<HTMLButtonElement> | undefined; 
    children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    let buttonClasses = [
        classes.ButtonWrapper,
        (props.position === 'onForm') ? classes.FormButtonWrapper : null
    ];
    return(
        <div className={ buttonClasses.join(' ') }>
            <button 
                type={ props.type } 
                name={ props.name} 
                onClick= {props.clicked }>{ props.children }</button>
        </div>
    );
}

export default button;
