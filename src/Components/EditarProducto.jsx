import React, {useState, useEffect} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Rutas from '../constantes/Rutas'
import axios from 'axios'

const mapearProducto = (detalleProducto) => ({
    "id_producto": detalleProducto.id_producto,
    "id_tienda": detalleProducto.id_tienda_id,
    "nombre": detalleProducto.nombre,
    "precio": detalleProducto.precio,
    "seccion": detalleProducto.seccion,
})



const EditarProducto = ({putProducto}) => {

    const {prodId} = useParams()
    const history = useHistory()

    const [detallesProducto, setDetallesProducto] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    const pedirDetallesProducto = async() => {
        try {
            const {data} = await axios.get(`https://sleepy-forest-23219.herokuapp.com/api/producto/${prodId}`)
            setDetallesProducto(mapearProducto(data.Productos))
            setCargando(false)
        }catch(nuevoError){
            setCargando(false)
            setError(nuevoError)
        }
    }

    const modificarCampo = (campo) => (event) => {
        const nuevoValor  = event.target.value
        setDetallesProducto((infoActual) => ({
            ...infoActual,
            [campo]: nuevoValor
        })) 
    }

    const onSubmitProducto = (e) => {
        e.preventDefault()
        putProducto(
            prodId,
            detallesProducto,
            () => {
                history.push(Rutas.productos)
            }
        )
    }

    useEffect(() => {
        pedirDetallesProducto()
    }, [])

    if (cargando){
        return (
            <h1>
                <i className="fa-10x fas fa-spinner fa-spin"></i>
            </h1>
        )
    }

    if (error){
        return (
            <h1>Error cargando info</h1>
        )
    }

    return (
        <>
        {/* <LayoutProductos> */}
        <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Editar Producto</h2>

            <div className="flex flex-col mt-10 items-center">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" className="bg-white p-3" onSubmit={onSubmitProducto}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_producto">Identificador del Producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_producto"
                                    name="id_producto"
                                    type="text"
                                    placeholder="Id. Producto"
                                    disabled
                                    defaultValue={prodId}
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
                                    disabled
                                    defaultValue={2}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Nombre">Nombre</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Nombre"
                                    name="nombre"
                                    type="text"
                                    placeholder="Nombre"
                                    value={detallesProducto.nombre}
                                    onChange={modificarCampo("nombre")}
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
                                    value={detallesProducto.precio}
                                    onChange={modificarCampo("precio")}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seccion">Sección</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_seccion"
                                    name="seccion"
                                    placeholder="Seleccionar"
                                    value={detallesProducto.seccion}
                                    onChange={modificarCampo("seccion")}
                                />                                
                            </div>

                            <input type="hidden" name="id" id="id" value=""/>


                            <button
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold">
                                    Editar Producto
                            </button >
                        </form>
                    </div>
                </div>
            </div>
        </main>
        {/* </LayoutProductos> */}
            
        </>
    )
}

export default EditarProducto
