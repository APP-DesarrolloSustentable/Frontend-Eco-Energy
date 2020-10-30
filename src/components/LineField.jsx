import React from 'react';


export default function LineField(props){
    const {label, children, className} = props;
   
   
    return (
        <div className={className}>
            <label className= {className}>{label}</label>
            {children}
        </div>

    );
}