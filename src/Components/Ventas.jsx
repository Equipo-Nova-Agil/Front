import React from 'react'
import { useHistory } from 'react-router-dom'
import Rutas from '../constantes/Rutas'



const Ventas = ({datosVentas, deleteVenta, filtroBusquedaVentas}) => {

    const history = useHistory()
    // const recargar = () => {
    //     setTimeout(() => {
    //         window.location.reload(false);
    //     },100)
    // }


    return (
        <>
        {/* <LayoutVentas> */}
           <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
           <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                    <div>
                        <input 
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="buscar" onChange={filtroBusquedaVentas} name="buscar" type="text" placeholder="Buscar"/>                            
                    </div>

                </div>
            <h2 className="text-3xl font-light text-center">Ventas</h2>

            <div className="flex flex-col mt-10">
                <div className="py-2 overflow-x-auto">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                        <thead className="bg-gray-100 ">
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Identificador de la venta
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Identificación del cliente
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Identificador del producto
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Cantidad de producto
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Valor total de la venta
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Acciones
                                </th>
                                {/* <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Precio unitario de producto
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Fecha de venta
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Nombre del cliente
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Nombre del vendedor
                                </th>                                                                 
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Maestro de las ventas
                                </th> */}
                            </tr>
                        </thead>
                        <tbody id="listado-ventas" className="bg-white">
                            {datosVentas.map(v=> (  
                                <tr key={v.id_venta}> 
                                    <td className="text-center">{v.id_venta}</td>
                                    <td className="text-center">{v.id_usuario_id}</td>
                                    <td className="text-center">{v.id_producto_id}</td> 
                                    <td className="text-center">{v.cantidad}</td> 
                                    <td className="text-center">{v.precio}</td> 

                                    {/* <td className="text-center">{v.correo}</td> 
                                    <td className="text-center">{v.telefono}</td> 
                                    <td className="text-center">{v.fecha_registro}</td> 
                                    <td className="text-center">{v.tipo}</td> 
                                    <td className="text-center">{v.direccion}</td> 
                                    <td className="text-center">{v.id_rol_id}</td> 
                                    <td className="text-center">{v.id_estado_id}</td> */}
                                    <td className="text-center display flex flex-row justify-evenly">

                                        <button onClick={() => {
                                            history.push(Rutas.editarVenta.replace(":ventId", v.id_venta))
                                        }}>
                                            <i className="fas fa-pencil-alt"/>
                                        </button>
                                        <button onClick={() => deleteVenta(v.id_venta)}><i className="fas fa-trash"></i>
                                        </button>
                                    </td>                                      
                                </tr>
                            ))}   
                        </tbody>
                    </table>
                  </div>
                </div>
              </div>
        </main> 
        {/* </LayoutVentas> */}
        </>
    )
}

export default Ventas
