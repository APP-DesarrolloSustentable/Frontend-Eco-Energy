import React from 'react';

export default function ContainerMenu(props){
    const {children} = props;

    return(
        <section>
            <div className="CardMenu">
            {children}
            </div>
           
        </section>
    );

}