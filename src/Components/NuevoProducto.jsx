import React from 'react'


const NuevoProducto = () => {
    return (
        <>
        {/* <LayoutProductos> */}
           <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Nuevo Producto</h2>

            <div className="flex flex-col mt-10 items-center">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" className="bg-white p-3">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_producto">Identificador del Producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_producto"
                                    name="id_producto"
                                    type="text"
                                    placeholder="Id. Producto"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id.tienda">ID. Tienda</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id.tienda"
                                    name="id.tienda"
                                    type="text"
                                    placeholder="ID. Tienda"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Precio</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="precio"
                                    name="precio"
                                    type="number" min="0" step="1"
                                    placeholder="precio"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seccion">Seccion</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_seccion"
                                    name="seccion"
                                    placeholder="Seleccionar"
                                />
                                <datalist id="lista_seccion">
                                    {/* CREO, CREO QUE HAY QUE TRAER LA LISTA DE SECCION PARA QUE LAS OPCIONES SEAN LAS DE LA API PRODUCTO */}
                                    <option value="Verduras"></option>
                                    <option value="Hogar"></option>
                                </datalist>
                            </div>

                            <input
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Agregar Producto"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </main> 
        {/* </LayoutProductos> */}
        </>
    )
}

export default NuevoProducto
