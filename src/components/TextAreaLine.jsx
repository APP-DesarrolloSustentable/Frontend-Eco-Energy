import React from 'react';
import LineField from './LineField';

export default function TextareaLine (props){
    const {rows, placeholder, onChange, name, error} = props

    return (
        <LineField className="InputBx">
            <textarea 
                rows={rows} 
                placeholder={placeholder} 
                onChange={(event) => onChange(name, event)}
                className={error ? 'inputError' : undefined}/>
        </LineField>               
    );
}