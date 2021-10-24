import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Rutas from '../constantes/Rutas'
import axios from 'axios'


const mapearUsuario = (detalleUsuario) => ({
    "id_usuarios": detalleUsuario.id_usuarios,
    "nombre": detalleUsuario.nombre,
    "apellido": detalleUsuario.apellido,
    "edad": detalleUsuario.edad,
    "genero": detalleUsuario.genero,
    "correo": detalleUsuario.correo,
    "telefono": detalleUsuario.telefono,
    "fecha_registro": detalleUsuario.fecha_registro,
    "tipo": detalleUsuario.tipo,
    "direccion": detalleUsuario.direccion,
    "password": detalleUsuario.password,
    "id_rol": detalleUsuario.id_rol_id,
    "id_estado": detalleUsuario.id_estado_id
})


const EditarUsuario = ({putUsuario}) => {


    const {userId} = useParams()
    const history = useHistory()

    const [detallesUsuario, setDetallesUsuario] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    const pedirDetallesUsuario = async() => {
        try {
            const {data} = await axios.get(`https://sleepy-forest-23219.herokuapp.com/api/usuario/${userId}`)
            setDetallesUsuario(mapearUsuario(data.Usuarios))
            setCargando(false)
        }catch(nuevoError){
            setCargando(false)
            setError(nuevoError)
        }
    }

    const modificarCampo = (campo) => (event) => {
        const nuevoValor  = event.target.value
        setDetallesUsuario((infoActual) => ({
            ...infoActual,
            [campo]: nuevoValor
        })) 
    }

    const onSubmitUsuario = (e) => {
        e.preventDefault()
        putUsuario(
            userId,
            detallesUsuario,
            () => {
                history.push(Rutas.usuarios)
            }
        )
    }


   
    useEffect(() => {
        pedirDetallesUsuario()
    }, [])

    if (cargando){
        return (
            <h1>Cargando info</h1>
        )
    }

    if (error){
        return (
            <h1>Error cargando info</h1>
        )
    }

    return (
        <>
        {/* <Layout> */}
        <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Editar Usuario</h2>

            <div className="flex flex-col mt-10 items-center">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" className="bg-white p-3" onSubmit={onSubmitUsuario}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">ID</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_id"
                                    name="id"
                                    type="text"
                                    placeholder="Id usuario"
                                    disabled
                                    //value={userId}
                                    defaultValue={userId}
                                    //onChange={() => {}}
                                    />
                                {/* <datalist id="lista_id">
                                    {datosUsuarios.map(id => (
                                        <option key={id.id_usuarios} value={id.id_usuarios}></option>       
                                    ))}
   
                                </datalist> */}
                            </div>

                            {/* OPCIONAL CON SELECT */}
                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">ID</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_id"
                                    name="id"
                                    type="text"
                                    placeholder="Id usuario"
                                    /> 
                                <select id="lista_id">
                                    {datosUsuarios.map(id => (
                                        <>
                                        <option selected="true" disabled>Seleccionar Id</option>  
                                        <option key={id.id_usuarios} value={id.id_usuarios}>{id.id_usuarios}</option>       
                                        </>
                                    ))}
   
                                </select>
                            </div> */}





                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    name="nombre"
                                    type="text"
                                    placeholder="Nombre"
                                    value={detallesUsuario.nombre}
                                    onChange={modificarCampo("nombre")}
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
                                    value={detallesUsuario.apellido}
                                    onChange={modificarCampo("apellido")}
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
                                    value={detallesUsuario.edad}
                                    onChange={modificarCampo("edad")}
                                />
                            </div>
                            {/* OPCIONAL CON SELECT */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">Seleccionar Genero</label>                            
                                <select onChange={modificarCampo("genero")} value={detallesUsuario.genero} id="genero">                                
                                    <option value="m">Masculino</option>
                                    <option value="f">Femenino</option>      
                                </select>
                            </div>
                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genero">Seleccionar Genero</label>
                                
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_genero"
                                    name="genero"
                                    placeholder="Seleccionar genero"
                                    value={detallesUsuario.genero}
                                    onChange={modificarCampo("genero")}
                                />
                                <datalist id="lista_genero">
                                    <option value="Femenino"></option>
                                    <option value="Masculino"></option>
                                    <option value="Sin especificar"></option>
                                </datalist>
                            </div> */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Correo</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Email"                                   
                                    defaultValue={detallesUsuario.correo}
                                    disabled
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
                                    value={detallesUsuario.telefono}
                                    onChange={modificarCampo("telefono")}
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
                                    value={detallesUsuario.tipo}
                                    onChange={modificarCampo("tipo")}
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
                                    value={detallesUsuario.direccion}
                                    onChange={modificarCampo("direccion")}
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
                                    value={detallesUsuario.password}
                                    onChange={modificarCampo("password")}
                                />
                            </div>
            
                           
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rol">Seleccionar Rol</label>                            
                                <select onChange={modificarCampo("id_rol")} value={detallesUsuario.id_rol} id="rol">                                
                                    <option value="1">1</option>
                                        
                                </select>
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado">Seleccionar Estado</label>                            
                                <select onChange={modificarCampo("id_estado")} value={detallesUsuario.id_estado} id="rol">                                
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                        
                                </select>
                            </div>


                            <input type="hidden" name="id" id="id" value=""/>


                            <button
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold">
                                    Editar Usuario
                            </button >
                        </form>
                    </div>
                </div>
            </div>
        </main>
        {/* </Layout> */}
        </>
    )
}

export default EditarUsuario
