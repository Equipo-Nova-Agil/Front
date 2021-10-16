import React from 'react'


const NuevoProducto = () => {
    return (
        <>
        {/* <LayoutProductos> */}
           <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 class="text-3xl font-light text-center">Nuevo Producto</h2>

            <div class="flex flex-col mt-10 items-center">
                <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div class=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" class="bg-white p-3">
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
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="desc_producto">Descripción del producto</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="desc_producto"
                                    name="desc_producto"
                                    type="text"
                                    placeholder="Desc. Producto"
                                />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="valor">Valor</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="valor"
                                    name="valor"
                                    type="number" min="0" step="1"
                                    placeholder="Valor"
                                />
                            </div>

                            <div class="mb-4">
                                <label class="block text-gray-700 text-sm font-bold mb-2" for="estado">Estado</label>
                                <input 
                                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_estado"
                                    name="estado"
                                    placeholder="Seleccionar"
                                />
                                <datalist id="lista_estado">
                                    <option value="Disponible"></option>
                                    <option value="No Disponible"></option>
                                </datalist>
                            </div>

                            <input
                                type="submit"
                                class="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold"
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
