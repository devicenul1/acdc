import React from 'react'

import classes from './InputField.module.scss';

const inputField = (props: { 
    name: string | undefined; 
    label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; 
    type: string | (string & {}) | undefined; 
    placeholder: string | undefined; 
    value: string | number | readonly string[] | undefined; handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined; 
    error: any; }) => {
    return (
        <div className={ classes.InputFieldWrapper }>
            <label htmlFor={ props.name }>{ props.label }</label>
            <input
                type={ props.type }
                id={ props.name }
                name={ props.name }
                placeholder={ props.placeholder }
                value={ props.value }
                onChange={ props.handleChange }
                style={ (props.error) ? {'borderBottomColor': 'red' } : undefined }
                required />
        </div>
    );
}

export default inputField;