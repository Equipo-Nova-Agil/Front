import React from 'react'
import "./tailwind.min.css" 
import Usuarios from "./Usuarios.jsx"
import NuevoUsuario from './NuevoUsuario';

const SideBar = () => {
    return (
        <>   
        <aside class="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-teal-600 px-5 py-10">
            <h1 class="uppercase text-white text-left tracking-wide text-2xl  font-bold mt-2">Gestión Usuarios</h1>
            <p class="mt-10 text-white">Registro para nuevos Usuarios</p>
            <nav class="mt-8">
                <a  
                    href="Usuarios" 
                    class="px-3 py-1 text-white block hover:bg-teal-700 hover:text-yellow-400 "
                >Usuarios</a>
                <a 
                href="NuevoUsuario" 
                class="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
                >Nuevo usuario</a>
                <a 
                href="editar-usuario.html" 
                class="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
                >Editar usuario</a>
            </nav>
        </aside>    
        </>
    )
}

export default SideBar

