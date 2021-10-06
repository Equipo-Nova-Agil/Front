import React from 'react'
import Layout from './Layout'

const NuevoUsuario = () => {
    return (
        <>
        {/* <div class="min-h-100 bg-gray-200">
             <div class="md:flex min-h-screen md:align-top">
             <SideBar></SideBar> */}
             <Layout>
             <main class="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
                <h2 class="text-3xl font-light text-center">Registrar Usuario</h2>
                <div class="flex flex-col mt-10 items-center">
                    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                        <div class=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                            <form id="formulario" class="bg-white p-3">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="nombre">Nombre</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="apellido">Apellido</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="apellido"
                                        name="apellido"
                                        type="text"
                                        placeholder="Apellido"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="edad">Edad</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="edad"
                                        name="edad"
                                        type="numeric"
                                        placeholder="Edad"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="genero">Seleccionar Genero</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_genero"
                                        name="genero"
                                        placeholder="Seleccionar genero"
                                    />
                                    <datalist id="lista_genero">
                                        <option value="Femenino"></option>
                                        <option value="Masculino"></option>
                                        <option value="Sin especificar"></option>
                                    </datalist>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Correo</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="telefono">Teléfono</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="telefono"
                                        name="telefono"
                                        type="tel"
                                        placeholder="Teléfono"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="tipo">Tipo</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="tipo"
                                        name="tipo"
                                        type="text"
                                        placeholder="Tipo"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="direccion">Dirección</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="direccion"
                                        name="direccion"
                                        type="text"
                                        placeholder="Direccion"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Contraseña</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="rol">Seleccionar Rol</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_roles"
                                        name="roles"
                                        placeholder="Seleccionar rol"
                                    />
                                    <datalist id="lista_roles">
                                        <option value="Administrador"></option>
                                        <option value="Vendedor"></option>
                                        <option value="Gerente de ventas"></option>
                                    </datalist>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="estado">Seleccionar Estado</label>
                                    <input 
                                        class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_estado"
                                        name="estado"
                                        placeholder="Seleccionar estado"
                                    />
                                    <datalist id="lista_estado">
                                        <option value="Pendiente"></option>
                                        <option value="Autorizado"></option>
                                        <option value="No autorizado"></option>
                                    </datalist>
                                </div>


                                <input type="hidden" name="id" id="id" value=""/>


                                <input
                                    type="submit"
                                    class="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Registrar Usuario"
                                />
                            </form>
                        </div>
                    </div>
                </div>
                </main>
            </Layout>
            {/* </div> 
        </div>      */}
        </>
    )
}

export default NuevoUsuario
