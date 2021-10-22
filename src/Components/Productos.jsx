import React from 'react'


const Productos = () => {
    return (
        <>
        {/* <LayoutProductos> */}
          <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
          <div className="flex flex-row-reverse space-x-4 space-x-reverse">
                    <div>
                        <button className="bg-teal-600 hover:bg-teal-900 w-full  p-2 text-white uppercase font-bold">Buscar</button>
                    </div>
                    <div>
                        <input 
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="buscar" name="buscar" type="text" placeholder="Buscar"/>                            
                    </div>

                </div>
            <h2 className="text-3xl font-light text-center">Productos</h2>

            <div className="flex flex-col mt-10">
                <div className="py-2 overflow-x-auto">
                  <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table className="min-w-full">
                        <thead className="bg-gray-100 ">
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Id. Producto
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Id. Tienda
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Precio
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Seccion
                                </th>
                            </tr>
                        </thead>
                        <tbody id="listado-clientes" className="bg-white"></tbody>
                    </table>
                  </div>
                </div>
              </div>
        </main>  
        {/* </LayoutProductos> */}
        </>
    )
}

export default Productos
