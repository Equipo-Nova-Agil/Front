import React from 'react'
import "./tailwind.min.css"
import { Link } from 'react-router-dom';
import rutas from "../constantes/Rutas"


const SideBarUniversal = () => {
    return (
        <> 
       
        <aside className="md:w-2/5 lg:w-2/5 xl:w-1/5 bg-teal-600 px-5 py-10">
            
            <h1 className="uppercase text-white text-left tracking-wide text-2xl text-center font-bold mt-2">Gestión </h1>
            <h1 className="mt-10 text-white text-center font-bold">PANEL</h1>
            <nav className="mt-8 text-center">
                <details>
                    <summary>
                        <span
                        className="px-3 py-1 text-white hover:bg-teal-700 hover:text-yellow-400"
                        >Usuarios</span>
                    </summary>
                    <ul>
                        <Link to={rutas.usuarios}>
                            <li>Usuarios</li>
                        </ Link>
                        {/* <Link to={rutas.editarUsuario.replace(":userId", 2)}>
                            <li>Editar Usuario</li>                            
                        </ Link> */}
                        <Link to={rutas.nuevoUsuario}>
                            <li>Nuevo Usuario</li>
                        </ Link>
                    </ul>
                </details>
                <br />
                <br />
                <details>
                    <summary>
                        <span 
                        className="px-3 py-1 text-white hover:bg-teal-900 mt-2 hover:text-yellow-400"
                        >Ventas</span>
                    </summary>
                    <ul>
                        <Link to={rutas.ventas}>                           
                            <li>Ventas</li>
                        </ Link>
                        {/* <Link to={rutas.editarVenta.replace(":ventId", 1)}>                           
                            <li>Editar Venta</li>
                        </ Link> */}
                        <Link to={rutas.nuevaVenta}>                           
                            <li>Nueva Venta</li>
                        </ Link>
                    </ul>
                </details>
                <br />
                <br />
                <details>
                    <summary>
                        <span 
                        className="px-3 py-1 text-white hover:bg-teal-900 mt-2 hover:text-yellow-400"
                        >Productos</span>
                    </summary>                     
                    <ul>
                        <Link to={rutas.productos}>                               
                            <li>Productos</li>
                        </ Link>
                        {/* <Link to={rutas.editarProducto.replace(":editProd", 1)}>                           
                            <li>Editar Producto</li>
                        </ Link> */}
                        <Link to={rutas.nuevoProducto}>                           
                            <li>Nuevo Producto</li>
                        </ Link>
                    </ul>
                </details>
            </nav>
        </aside>  
          
        </>
    )
}

export default SideBarUniversal
