import React from 'react'


const NuevaVenta = ({enviarDatosVentas, datosUsuarios, datosProductos}) => {

    console.log(datosProductos.id_producto)
    console.log(datosUsuarios.id_usuarios)
    
    return (
        <>
        {/* <LayoutVentas> */}
          <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Nueva Venta</h2>

            <div className="flex flex-col mt-10 items-center">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" className="bg-white p-3" onSubmit={enviarDatosVentas}>
                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_venta">Identificador de la venta</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_venta"
                                    name="id_venta"
                                    type="text"
                                    placeholder="Id. Venta"
                                />
                            </div> */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_usuario">Id del Usuario</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="cliente_id"
                                    name="id_usuario"
                                    type="text"
                                    placeholder="Id. Usuario"
                                    required
                                />
                                <datalist id="cliente_id">
                                    {datosUsuarios.map(id => (
                                        <option key={id.id_usuarios} value={id.id_usuarios}></option>       
                                    ))}
   
                                </datalist>
                            </div>
                            <div className="mb-4">
                                {/* colocar selector de id producto */}
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_producto">Identificador del Producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="id_producto"
                                    name="id_producto"
                                    type="text"
                                    placeholder="Id. Producto"
                                    required
                                />
                                <datalist id="id_producto">
                                    {datosProductos.map(idp => (
                                                                              
                                        <option key={idp.id_producto} value={idp.id_producto}></option>       
                                        
                                    ))}
   
                                </datalist>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">Cantidad de producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cantidad"
                                    name="cantidad"
                                    type="number" min="0" step="1"
                                    placeholder="Cantidad total"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">precio total de la venta</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="precio"
                                    name="precio"
                                    type="number" min="0" step="1"
                                    placeholder="precio total"
                                    required
                                />
                            </div>
                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valor">Precio unitario de producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="precio"
                                    name="precio"
                                    type="number" min="0" step="1"
                                    placeholder="Precio de producto"
                                />
                            </div>                                                                                    
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha de venta</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fecha"
                                    name="fecha"
                                    type="date"
                                    placeholder="Fecha de venta"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre_cliente">Nombre del cliente</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre_cliente"
                                    name="nombre_cliente"
                                    type="text"
                                    placeholder="Nombre Cliente"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre_vendedor">Nombre del vendedor</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre_vendedor"
                                    name="nombre_vendedor"
                                    type="text"
                                    placeholder="Nombre vendedor"
                                />
                            </div>                                                                                       
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado">Maestro de las ventas</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_estado"
                                    name="estado"
                                    placeholder="Seleccionar estado"
                                />
                                <datalist id="lista_estado">
                                    <option value="En proceso"></option>
                                    <option value="Cancelada"></option>
                                    <option value="Entregada"></option>
                                </datalist>
                            </div> */}


                            <button
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Agregar Venta"
                            >Agregar venta</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
        {/* </LayoutVentas>   */}
        </>
    )
}

export default NuevaVenta
