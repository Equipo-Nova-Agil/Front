import React from 'react'
import LayoutProductos from './LayoutProductos'

const Productos = () => {
    return (
        <>
        <LayoutProductos>
          <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 class="text-3xl font-light text-center">Productos</h2>

            <div class="flex flex-col mt-10">
                <div class="py-2 overflow-x-auto">
                  <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table class="min-w-full">
                        <thead class="bg-gray-100 ">
                            <tr>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Id. Producto
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Desc. Producto
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Valor
                                </th>
                                <th class="px-6 py-3 border-b border-gray-200  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                                        Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody id="listado-clientes" class="bg-white"></tbody>
                    </table>
                  </div>
                </div>
              </div>
        </main>  
        </LayoutProductos>
        </>
    )
}

export default Productos
