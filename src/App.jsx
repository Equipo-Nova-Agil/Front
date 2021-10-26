import './App.css';
import React, {useState, useEffect} from 'react'

import Rutas from './constantes/Rutas'
import { useParams, useHistory } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"
//import Login from "./Components/Login"
import LayoutUniversal from './Components/LayoutUniversal';

import Usuarios from "./Components/Usuarios"
import EditarUsuario from "./Components/EditarUsuario"
import NuevoUsuario from "./Components/NuevoUsuario"

import Productos from "./Components/Productos"
import EditarProducto from "./Components/EditarProducto"
import NuevoProducto from "./Components/NuevoProducto"

import Ventas from "./Components/Ventas"
import EditarVenta from "./Components/EditarVenta"
import NuevaVenta from "./Components/NuevaVenta"

import rutas from "./constantes/Rutas"
import { v4 as uuidv4 } from 'uuid';


import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';



function App() {

  
  // COMIENZO CODIGO DE USUARIOS*********************************************************************************************
  // COMIENZO CODIGO DE USUARIOS*********************************************************************************************
  const [datosUsuarios, setDatosUsuarios] = useState([])
  //const baseUrl = "http://localhost:3000/posts"
  const baseUrl = "https://sleepy-forest-23219.herokuapp.com/api/usuario/"
  
  
  //Filtro
  const [tablaUsuarios, setTablaUsuarios] = useState([])
  const [busqueda, setBusqueda] = useState("")

  const filtroBusqueda = (e) => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = (terminoBusqueda) => {
    let resultadosBusquedaProductos = tablaUsuarios.filter(elemento => {
      if (elemento.id_usuarios.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    })
    setDatosUsuarios(resultadosBusquedaProductos)
  }
  // ----------------------------------------------------------------------------------------------

  // METODO GET USUARIOS
  const getUsuarios = async() => {
    await axios.get(baseUrl)
        .then(res => {
            // con la api de mintic
            console.log("DATA", res.data.Usuarios)
            setDatosUsuarios(res.data.Usuarios)

            // con json server
            //console.log("DATA", res.data)
            //setDatosUsuarios(res.data)

            //Filtro
            setTablaUsuarios(res.data.Usuarios)
        })
        .catch(error => {
            console.log(error)
        })
  }

  useEffect(async() => {
    await getUsuarios()
  },[])


  // METODO POST USUARIOS
  const enviarDatosUsuarios = async(e, successCallback) => {
    e.preventDefault()
    const formData = {
      id_usuarios: parseInt(uuidv4(), 16).toString().slice(2),
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      edad: e.target.edad.value,
      genero: e.target.genero.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      fecha_registro: e.target.fecha_registro.value,
      tipo: e.target.tipo.value,
      direccion: e.target.direccion.value,
      password: e.target.password.value,
      id_rol: e.target.id_rol.value,
      id_estado: e.target.id_estado.value
    }
  
    await axios.post(baseUrl, formData)
      .then(res => {
        getUsuarios()
        successCallback()
        setDatosUsuarios((currentData) => [
            ...currentData, formData
        ])
        if (res.status === 200 || res.status === 201){
          toast.success('Usuario Creado', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
          //console.log("http", res.status)
      })
      .catch(error => {
          console.log(error)
          toast.error("No se pudo crear usuario, intente más tarde", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });          
      })

  }
  // ---------------------------------------------------

  // METODO DELETE USUARIOS
  const deleteUsuario = async(id) => {
    await axios.delete(`${baseUrl}${id}`)
      .then(res => {
        setDatosUsuarios(datosUsuarios.filter(user => user.id_usuarios !== id))
        if (res.status === 200 || res.status === 201){
          toast.success('Usuario Eliminado', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      })
      .catch(error => {
        console.log(error)
        toast.error("No se pudo eliminar usuario, intente más tarde", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }

  // METODO PUT USUARIOS

  const putUsuario = (id, infoUsuario, successCallback) => {
    axios.put(`${baseUrl}${id}`, infoUsuario)
      .then((res) => {
        getUsuarios()
        successCallback()
        if (res.status === 200){
          toast.success("Usuario editado", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(error=> {
        console.log(error)
        toast.error("No se pudo editar usuario, intente más tarde", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
  }



  // FINAL CODIGO DE USUARIOS*********************************************************************************************************
  // FINAL CODIGO DE USUARIOS*********************************************************************************************************



  // COMIENZO CODIGO DE VENTAS*********************************
  // COMIENZO CODIGO DE VENTAS*********************************


  const [datosVentas, setDatosVentas] = useState([])
  //const baseUrl = "http://localhost:3000/posts"
  const baseUrlVentas = "https://sleepy-forest-23219.herokuapp.com/api/venta/"
  
  
  //Filtro
  const [tablaVentas, setTablaVentas] = useState([])
  const [busquedaVentas, setBusquedaVentas] = useState("")

  const filtroBusquedaVentas = (e) => {
    setBusquedaVentas(e.target.value)
    filtrarVentas(e.target.value)
  }

  const filtrarVentas = (terminoBusqueda) => {
    let resultadosBusqueda = tablaVentas.filter(elemento => {
      if (elemento.id_venta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.id_usuario_id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    })
    setDatosVentas(resultadosBusqueda)
  }
  // ----------------------------------------------------------------------------------------------

  // METODO GET VENTAS
  const getVentas = async() => {
    await axios.get(baseUrlVentas)
        .then(res => {
            // con la api de mintic
            console.log("Ventas", res.data.Ventas)
            setDatosVentas(res.data.Ventas)

            //Filtro
            setTablaVentas(res.data.Ventas)
        })
        .catch(error => {
            console.log(error)
        })
  }

  useEffect(async() => {
    await getVentas()
  },[])


  // METODO POST VENTAS
  const enviarDatosVentas = async(e, successCallback) => {
    e.preventDefault()
    const formDataVentas = {
      id_venta: parseInt(uuidv4(), 16).toString().slice(2),
      id_usuario: e.target.id_usuario.value,
      id_producto: e.target.id_producto.value,
      cantidad: e.target.cantidad.value,
      precio: e.target.precio.value,
    }
  
    await axios.post(baseUrlVentas, formDataVentas)
      .then(res => {
        getVentas()
        successCallback()
        setDatosVentas((currentData) => [
            ...currentData, formDataVentas
        ])
        if (res.status === 200 || res.status === 201){
          toast.success('Venta creada', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      })
      .catch(error => {
          console.log(error)
          toast.error("No se pudo crear venta, intente más tarde", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });  
      })

  }
  // ---------------------------------------------------

  // METODO DELETE VENTAS
  const deleteVenta = async(id) => {
    await axios.delete(`${baseUrlVentas}${id}`)
      .then(res => {
        setDatosVentas(datosVentas.filter(v => v.id_venta !== id))
        if (res.status === 200 || res.status === 201){
          toast.success('Venta eliminada', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      })
      .catch(error => {
        console.log(error)
        toast.error("No se pudo eliminar venta, intente más tarde", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }

  // METODO PUT VENTAS

  const putVenta = (id, infoVenta, successCallback) => {
    axios.put(`${baseUrlVentas}${id}`, infoVenta)
      .then((res) => {
        getVentas()
        successCallback()
        if (res.status === 200){
          toast.success("Venta editada", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(error=> {
        console.log(error)
        toast.error("No se pudo editar venta, intente más tarde", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
  }

  // FINAL CODIGO DE VENTAS*************************************
  // FINAL CODIGO DE VENTAS*************************************


  


  // COMIENZO CODIGO DE PRODUCTOS*********************************************************************************************
  // COMIENZO CODIGO DE PRODUCTOS*********************************************************************************************
  const [datosProductos, setDatosProductos] = useState([])
  //const baseUrl = "http://localhost:3000/posts"
  const baseUrlProductos = "https://sleepy-forest-23219.herokuapp.com/api/producto/"
  
  
  //Filtro
  const [tablaProductos, setTablaProductos] = useState([])
  const [busquedaProductos, setBusquedaProductos] = useState("")

  const filtroBusquedaProductos = (e) => {
    setBusquedaProductos(e.target.value)
    filtrarProductos(e.target.value)
  }

  const filtrarProductos = (terminoBusqueda) => {
    let resultadosBusquedaProductos = tablaProductos.filter(elemento => {
      if (elemento.id_producto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    })
    setDatosProductos(resultadosBusquedaProductos)
  }
  // ----------------------------------------------------------------------------------------------

  // METODO GET PRODUCTOS
  const getProductos = async() => {
    await axios.get(baseUrlProductos)
        .then(res => {
            // con la api de mintic
            console.log("Productos", res.data.Productos)
            setDatosProductos(res.data.Productos)

            //Filtro
            setTablaProductos(res.data.Productos)
        })
        .catch(error => {
            console.log(error)
        })
  }

  useEffect(async() => {
    await getProductos()
  },[])


  // METODO POST PRODUCTOS
  const enviarDatosProductos = async(e, successCallback) => {

    e.preventDefault()
    const formDataProductos = {
      id_producto: parseInt(uuidv4(), 16).toString().slice(2),
      id_tienda: e.target.id_tienda.value,
      nombre: e.target.nombre.value,
      precio: e.target.precio.value,
      seccion: e.target.seccion.value,
    }
    
    
    await axios.post(baseUrlProductos, formDataProductos)
    .then(res => {
      getProductos()
      successCallback()
      setDatosProductos((currentData) => [
        ...currentData, formDataProductos
      ])
      if (res.status === 200 || res.status === 201){
        toast.success('Producto creado', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    })
    .catch(error => {
      console.log(error)
      toast.error("No se pudo crear producto, intente más tarde", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        }); 
    })
    console.log("Id generado", typeof(formDataProductos.id_producto))
    console.log("Id generado", formDataProductos.id_producto)

  }
  // ---------------------------------------------------

  // METODO DELETE PRODUCTOS
  const deleteProducto = async(id) => {
    await axios.delete(`${baseUrlProductos}${id}`)
      .then(res => {
        setDatosProductos(datosProductos.filter(p => p.id_producto !== id))
        if (res.status === 200 || res.status === 201){
          toast.success('Producto eliminado', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        }
      })
      .catch(error => {
        console.log(error)
        toast.error("No se pudo eliminar venta, intente más tarde", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
  }

  // METODO PUT PRODUCTO

  const putProducto = (id, infoProducto, successCallback) => {
    axios.put(`${baseUrlProductos}${id}`, infoProducto)
      .then((res) => {
        getProductos()
        successCallback()
        if (res.status === 200){
          toast.success("Producto editado", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch(error=> {
        console.log(error)
      })
  }

  // FINAL CODIGO DE PRODUCTOS*********************************************************************************************************
  // FINAL CODIGO DE PRODUCTOS*********************************************************************************************************


  
  return (
    <Router>
    
      <LayoutUniversal>
        <Switch>
          <Route path={rutas.usuarios} exact>
            <Usuarios deleteUsuario={deleteUsuario} datosUsuarios={datosUsuarios} filtroBusqueda={filtroBusqueda} getUsuarios={getUsuarios}/>
            <ToastContainer />
          </Route>
          <Route path={rutas.editarUsuario} exact>
            <EditarUsuario putUsuario={putUsuario}/>
            <ToastContainer />
          </Route>
          <Route path={rutas.nuevoUsuario} exact>
            <NuevoUsuario enviarDatosUsuarios={enviarDatosUsuarios} datosUsuarios={datosUsuarios}/>
            <ToastContainer />
          </Route>



          <Route path={rutas.ventas} exact>
            <Ventas deleteVenta={deleteVenta} datosVentas={datosVentas} filtroBusquedaVentas={filtroBusquedaVentas} getVentas={getVentas}/>
            <ToastContainer />
          </Route>
          <Route path={rutas.editarVenta} exact>
            <EditarVenta putVenta={putVenta}/>
            <ToastContainer />
          </Route>
          <Route path={rutas.nuevaVenta} exact>
            <NuevaVenta enviarDatosVentas={enviarDatosVentas} datosUsuarios={datosUsuarios} datosProductos={datosProductos} />
            <ToastContainer />
          </Route>




          <Route path={rutas.productos} exact>
          <Productos deleteProducto={deleteProducto} datosProductos={datosProductos} filtroBusquedaProductos={filtroBusquedaProductos}/>
          <ToastContainer />
          </Route>
          <Route path={rutas.editarProducto} exact>
            <EditarProducto putProducto={putProducto}/> 
            <ToastContainer />
          </Route>
          <Route path={rutas.nuevoProducto} exact>
            <NuevoProducto enviarDatosProductos={enviarDatosProductos}/>
            <ToastContainer />
          </Route>

        </Switch>
        

      </LayoutUniversal>
    </ Router>
    
  );
}

export default App;
