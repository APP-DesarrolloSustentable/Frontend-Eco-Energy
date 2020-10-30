import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
    {
        title: 'Inicio',
        path: '/menu',
        icon: <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title: 'Reportes',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title: 'Configuracion',
        path: '/configuration',
        icon: <AiIcons.AiFillTool/>,
        cName:'nav-text'
    },
    {
        title: 'Soporte',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName:'nav-text'
    },
    {
        title: 'Cerrar Sesion',
        path: '/login',
        icon: <IoIcons.IoMdPeople/>,
        cName:'nav-text'
    }
]