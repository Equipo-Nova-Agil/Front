import React from 'react'


const NuevoUsuario = ({enviarDatosUsuarios, datosUsuarios}) => {
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
                                        required
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
                                        required
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
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">Seleccionar Genero</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_genero"
                                        name="genero"
                                        placeholder="Seleccionar genero"
                                        required
                                    />
                                    <datalist id="lista_genero">
                                        <option value="f"></option>
                                        <option value="m"></option>
                                        {/* <option value="Sin especificar"></option> */}
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
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
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rol">Seleccionar Rol</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_roles"
                                        name="id_rol"
                                        placeholder="Seleccionar rol"
                                        required
                                    />
                                    <datalist id="lista_roles">
                                        {datosUsuarios.map(idu => (
                                            <option key={idu.id_rol_id} value={idu.id_rol_id}></option>       
                                        ))}
                                    </datalist>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado">Seleccionar Estado</label>
                                    <input 
                                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        list="lista_estado"
                                        name="id_estado"
                                        placeholder="Seleccionar estado"
                                        required
                                    />
                                    <datalist id="lista_estado">
                                        {datosUsuarios.map(idu => (
                                            <option key={idu.id_estado_id} value={idu.id_estado_id}></option>       
                                        ))}
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
