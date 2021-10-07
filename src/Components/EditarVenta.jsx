import React from 'react'
import LayoutVentas from './LayoutVentas'

const EditarVenta = () => {
    return (
        <>
          <LayoutVentas>
          <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 class="text-3xl font-light text-center">Editar Venta</h2>

            <div class="flex flex-col mt-10 items-center">
                <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div class=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" class="bg-white p-3">
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="id_venta">Identificador de la venta</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_venta"
                                    name="id_venta"
                                    type="text"
                                    placeholder="Id. Venta"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="valor">Valor total de la venta</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="valor"
                                    name="valor"
                                    type="number" min="0" step="1"
                                    placeholder="Valor total"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="id_producto">Identificador del Producto</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_producto"
                                    name="id_producto"
                                    type="text"
                                    placeholder="Id. Producto"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="cantidad">Cantidad de producto</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cantidad"
                                    name="cantidad"
                                    type="number" min="0" step="1"
                                    placeholder="Cantidad total"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="valor">Precio unitario de producto</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="precio"
                                    name="precio"
                                    type="number" min="0" step="1"
                                    placeholder="Precio de producto"
                                />
                            </div>                                                                                    
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="fecha">Fecha de venta</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fecha"
                                    name="fecha"
                                    type="date"
                                    placeholder="Fecha de venta"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="id_cliente">Identificación del cliente</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_cliente"
                                    name="id_cliente"
                                    type="text"
                                    placeholder="Id. Cliente"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre_cliente">Nombre del cliente</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre_cliente"
                                    name="nombre_cliente"
                                    type="text"
                                    placeholder="Nombre Cliente"
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre_vendedor">Nombre del vendedor</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre_vendedor"
                                    name="nombre_vendedor"
                                    type="text"
                                    placeholder="Nombre vendedor"
                                />
                            </div>                                                                                       
                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="estado">Maestro de las ventas</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_estado"
                                    name="estado"
                                    placeholder="Seleccionar estado"
                                />
                                <datalist id="lista_estado">
                                    <option value="En proceso"></option>
                                    <option value="Cancelada"></option>
                                    <option value="Entregada"></option>
                                </datalist>
                            </div>


                            <input
                                type="submit"
                                class="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Editar Venta"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </main>
          </LayoutVentas>  
        </>
    )
}

export default EditarVenta
