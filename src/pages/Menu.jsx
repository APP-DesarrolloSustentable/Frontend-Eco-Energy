import React from 'react'
import ContainerMenu from '../components/ContainerMenu'
import * as BsIcons from "react-icons/bs"
import Test from '../componentNav/Test'

function Menu (){
    return(
        <>
            <ContainerMenu>
                <h1>Grupo Creado 001</h1>
            </ContainerMenu>   
            <div className='PlusButton'>            
                <BsIcons.BsPlusCircle onClick={Test}/>
            </div>
            <p1 className='NewGroup'>Nuevo Grupo</p1>
        </>
    )
}

export default Menu 