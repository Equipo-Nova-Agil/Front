import React, {useState, useEffect} from 'react'
import Rutas from '../constantes/Rutas'
import axios from 'axios'
import { useParams,useHistory } from 'react-router-dom'

const mapearVenta = (detalleVenta) => ({
    "id_venta": detalleVenta.id_venta,
    "id_usuario": detalleVenta.id_usuario_id,
    "id_producto": detalleVenta.id_producto_id,
    "cantidad": detalleVenta.cantidad,
    "precio": detalleVenta.precio,
})

const EditarVenta = ({putVenta}) => {

    const {ventId} = useParams()
    const history = useHistory()

    const [detallesVenta, setDetallesVenta] = useState(null)
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)

    const pedirDetallesVenta = async() => {
        try {
            const {data} = await axios.get(`https://sleepy-forest-23219.herokuapp.com/api/venta/${ventId}`)
            setDetallesVenta(mapearVenta(data.Ventas))
            console.log(detallesVenta)
            setCargando(false)
        }catch(nuevoError){
            setCargando(false)
            setError(nuevoError)
        }
    }

    const modificarCampo = (campo) => (event) => {
        const nuevoValor  = event.target.value
        setDetallesVenta((infoActual) => ({
            ...infoActual,
            [campo]: nuevoValor
        })) 
    }

    const onSubmitVenta = (e) => {
        e.preventDefault()
        putVenta(
            ventId,
            detallesVenta,
            () => {
                history.push(Rutas.ventas)
            }
        )
    }

    useEffect(() => {
        pedirDetallesVenta()
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
          {/* <LayoutVentas> */}
          <main className="md:w-3/5  xl:w-4/5 px-5 py-10 bg-gray-200">
            <h2 className="text-3xl font-light text-center">Editar Venta</h2>

            <div className="flex flex-col mt-10 items-center">
                <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 w-10/12 md:w-8/12 lg:w-6/12">
                    <div className=" shadow overflow-hidden sm:rounded-lg border-b border-gray-200 ">
                        <form id="formulario" onSubmit={onSubmitVenta} className="bg-white p-3">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_venta">Identificador de la venta</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_venta"
                                    name="id_venta"
                                    type="text"
                                    placeholder="Id. Venta"
                                    disabled                         
                                    defaultValue={ventId}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_cliente">Identificación del cliente</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_cliente"
                                    name="id_cliente"
                                    type="text"
                                    placeholder="Id. Cliente"
                                    value={detallesVenta.id_usuario}
                                    onChange={modificarCampo("id_usuario")}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id_producto">Identificador del Producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="id_producto"
                                    name="id_producto"
                                    type="text"
                                    placeholder="Id. Producto"
                                    value={detallesVenta.id_producto}
                                    onChange={modificarCampo("id_producto")}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">Cantidad de producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="cantidad"
                                    name="cantidad"
                                    type="number" min="0" step="1"
                                    placeholder="Cantidad total"
                                    value={detallesVenta.cantidad}
                                    onChange={modificarCampo("cantidad")}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valor">Valor total de la venta</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="valor"
                                    name="valor"
                                    type="number" min="0" step="1"
                                    placeholder="Valor total"
                                    value={detallesVenta.precio}
                                    onChange={modificarCampo("precio")}
                                />
                            </div>
                            {/* <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="valor">Precio unitario de producto</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="precio"
                                    name="precio"
                                    type="number" min="0" step="1"
                                    placeholder="Precio de producto"
                                />
                            </div>                                                                                    
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fecha">Fecha de venta</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="fecha"
                                    name="fecha"
                                    type="date"
                                    placeholder="Fecha de venta"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre_cliente">Nombre del cliente</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre_cliente"
                                    name="nombre_cliente"
                                    type="text"
                                    placeholder="Nombre Cliente"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre_vendedor">Nombre del vendedor</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre_vendedor"
                                    name="nombre_vendedor"
                                    type="text"
                                    placeholder="Nombre vendedor"
                                />
                            </div>                                                                                       
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="estado">Maestro de las ventas</label>
                                <input 
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    list="lista_estado"
                                    name="estado"
                                    placeholder="Seleccionar estado"
                                />
                                <datalist id="lista_estado">
                                    <option value="En proceso"></option>
                                    <option value="Cancelada"></option>
                                    <option value="Entregada"></option>
                                </datalist>
                            </div> */}


                            <input
                                type="submit"
                                className="bg-teal-600 hover:bg-teal-900 w-full mt-5 p-2 text-white uppercase font-bold"
                                value="Editar Venta"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </main>
          {/* </LayoutVentas>   */}
        </>
    )
}

export default EditarVenta
