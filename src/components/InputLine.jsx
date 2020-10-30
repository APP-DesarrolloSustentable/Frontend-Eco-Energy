import React from 'react';
import LineField from './LineField';


export default function InputLine (props){
    const {
        className,
        label, 
        type,
        placeholder,
        required, 
        minLength, 
        maxLength,
        max,
        min,
        step,
        list,
        name,
        onChange,
        error,
        value
    } = props;

    return(
        <LineField className={className} label ={label}>
        <input 
            type={type}          
            placeholder={placeholder}
            minLength={minLength}
            maxLength={maxLength}
            min={min}
            max={max}
            step={step}
            onChange={(event) => onChange(name, event)}
            list={list && list.id} 
            required={required}
            value={value}
            className={error  ? 'inputError': undefined}
        />   
        {list &&
            <datalist id={list.id}>
                {list.options.map((option, key) => <option key={key}>{option}</option>)}    
            </datalist>
        }
        </LineField>
    );
}