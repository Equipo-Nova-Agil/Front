import React from 'react'
import "./tailwind.min.css" 



const Usuarios = ({datosApi, filtroBusqueda, deleteUsuario}) => {

    //console.log("Desde usuarios:",datosApi)
    


    return (
        <>                
        <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">

        <div className="flex flex-row-reverse space-x-4 space-x-reverse">
            <div>
                <input 
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="buscar" onChange={filtroBusqueda} name="buscar" type="text" placeholder="Buscar"/>                            
            </div>
        </div>
            <h2 className="text-3xl font-light text-center">Usuarios</h2>

            <div className="flex flex-col mt-10">
                <div className="py-2 overflow-x-auto">
                <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                        <thead className="bg-gray-100 ">
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Id
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Nombre 
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Apellido
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Edad
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Genero
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Correo
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Telefono
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Fecha de Registro
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Tipo
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Dirrección
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Id_rol
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Estado
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Eliminar
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-center">
                            {datosApi.map(u=> (  
                                <tr key={u.id_usuarios}> 
                                    <td className="text-center">{u.id_usuarios}</td>
                                    <td className="text-center">{u.nombre}</td>
                                    <td className="text-center">{u.apellido}</td> 
                                    <td className="text-center">{u.edad}</td> 
                                    <td className="text-center">{u.genero}</td> 
                                    <td className="text-center">{u.correo}</td> 
                                    <td className="text-center">{u.telefono}</td> 
                                    <td className="text-center">{u.fecha_registro}</td> 
                                    <td className="text-center">{u.tipo}</td> 
                                    <td className="text-center">{u.direccion}</td> 
                                    <td className="text-center">{u.id_rol_id}</td> 
                                    <td className="text-center">{u.id_estado_id}</td>
                                    <td className="text-center"><button onClick={() => deleteUsuario(u.id_usuarios)}><i className="fas fa-trash"></i></button></td>                                      
                                </tr>
                            ))}  
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </main>                     
        </>
    )
}

export default Usuarios
