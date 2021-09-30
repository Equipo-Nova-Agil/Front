import React from 'react'
import "./tailwind.min.css" 
import LayoutProductos from './LayoutProductos'

const SideBarProductos = () => {
    return (
        <>
          <aside class="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-teal-600 px-5 py-10">
            <h1 class="uppercase text-white tracking-wide text-2xl  font-bold mt-2">Productos</h1>
            <p class="mt-10 text-white"></p>
            <nav class="mt-8">
                <a  
                    href="/" 
                    class="px-3 py-1 text-white block hover:bg-teal-700 hover:text-yellow-400 bg-teal-700"
                >Productos</a>
                <a 
                    href="nuevo-producto.html" 
                    class="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
                >Nuevo Producto</a>
            </nav>
        </aside>  
        </>
    )
}

export default SideBarProductos
