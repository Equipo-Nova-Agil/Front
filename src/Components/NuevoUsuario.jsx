import React from 'react'


const NuevoUsuario = ({enviarDatosUsuarios}) => {
    return (
        <>
             {/* <Layout> */}
             <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
                <h2 className="text-3xl font-light text-center">Registrar Usuario</h2>
                <div className="flex flex-col mt-10 items-center">
                    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                        <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                            <form id="formulario" className="bg-white p-3" onSubmit={enviarDatosUsuarios}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        placeholder="Nombre"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">Apellido</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="apellido"
                                        name="apellido"
                                        type="text"
                                        placeholder="Apellido"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="edad">Edad</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="edad"
                                        name="edad"
                                        type="numeric"
                                        placeholder="Edad"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">Seleccionar Genero</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="correo"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">Teléfono</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="telefono"
                                        name="telefono"
                                        type="tel"
                                        placeholder="Teléfono"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha_registro">Fecha de registro</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fecha_registro"
                                        name="fecha_registro"
                                        type="date"
                                        placeholder="fecha de registro"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipo">Tipo</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="tipo"
                                        name="tipo"
                                        type="text"
                                        placeholder="Tipo"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">Dirección</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="direccion"
                                        name="direccion"
                                        type="text"
                                        placeholder="Direccion"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Contraseña</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Contraseña"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rol">Seleccionar Rol</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_roles"
                                        name="id_rol"
                                        placeholder="Seleccionar rol"
                                    />
                                    <datalist id="lista_roles">
                                        <option value="Administrador"></option>
                                        <option value="Vendedor"></option>
                                        <option value="Gerente de ventas"></option>
                                    </datalist>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado">Seleccionar Estado</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_estado"
                                        name="id_estado"
                                        placeholder="Seleccionar estado"
                                    />
                                    <datalist id="lista_estado">
                                        <option value="Pendiente"></option>
                                        <option value="Autorizado"></option>
                                        <option value="No autorizado"></option>
                                    </datalist>
                                </div>


                                <input type="hidden" name="id" id="id" value=""/>


                                <button
                                    type="submit"
                                    className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                    value="Registrar Usuario"
                                >Registrar Usuario</button>
                            </form>
                        </div>
                    </div>
                </div>
                </main>
            {/* </Layout> */}

        </>
    )
}

export default NuevoUsuario
