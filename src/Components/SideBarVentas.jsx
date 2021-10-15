import React from 'react'

const SideBarVentas = () => {
    return (
        <>
           <aside class="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-teal-600 px-5 py-10">
            <h1 class="uppercase text-white text-left tracking-wide text-2xl  font-bold mt-2">Registro ventas</h1>
            <p class="mt-10 text-white"></p>
            <nav class="mt-8">
                <a  
                    href="/" 
                    class="px-3 py-1 text-white block hover:bg-teal-700 hover:text-yellow-400"
                >Ventas</a>
                <a 
                    href="nueva-venta.html" 
                    class="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
                >Nueva Venta</a>
                <a 
                    href="editar-venta.html" 
                    class="px-3 py-1 text-white block hover:bg-teal-900 mt-2 hover:text-yellow-400"
                >Editar Venta</a>
            </nav>
        </aside>
        </>
    )
}

export default SideBarVentas
