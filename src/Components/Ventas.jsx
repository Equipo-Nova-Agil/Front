import React from 'react'


const Ventas = () => {
    return (
        <>
        {/* <LayoutVentas> */}
           <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
           <div class="flex flex-row-reverse space-x-4 space-x-reverse">
                    <div>
                        <button class="bg-teal-600 hover:bg-teal-900 w-full  p-2 text-white uppercase font-bold">Buscar</button>
                    </div>
                    <div>
                        <input 
                            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="buscar" name="buscar" type="text" placeholder="Buscar"/>                            
                    </div>

                </div>
            <h2 class="text-3xl font-light text-center">Ventas</h2>

            <div class="flex flex-col mt-10">
                <div class="py-2 overflow-x-auto">
                  <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table class="min-w-full">
                        <thead class="bg-gray-100 ">
                            <tr>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Identificador de la venta
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Valor total de la venta
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Identificador del producto
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Cantidad de producto
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Precio unitario de producto
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Fecha de venta
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Identificación del cliente
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Nombre del cliente
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Nombre del vendedor
                                </th>                                                                 
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                    Maestro de las ventas
                                </th>
                            </tr>
                        </thead>
                        <tbody id="listado-ventas" class="bg-white"></tbody>
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