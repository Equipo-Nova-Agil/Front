import './App.css';
import React, {useState, useEffect} from 'react'
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
    let resultadosBusqueda = tablaUsuarios.filter(elemento => {
      if (elemento.id_usuarios.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento
      }
    })
    setDatosUsuarios(resultadosBusqueda)
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
  const enviarDatosUsuarios = async(e) => {
    e.preventDefault()
    const formData = {
      id_usuarios: parseInt(uuidv4(), 16),
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
          setDatosUsuarios((currentData) => [
              ...currentData, formData
          ])
      })
      .catch(error => {
          console.log(error)
      })
      // console.log(parseInt(uuidv4(), 16))
      // console.log(typeof(parseInt(uuidv4(), 16)))

    //e.target.reset()
    //console.log("ID real",formData.id_usuarios)
  }
  // ---------------------------------------------------

  // METODO DELETE USUARIOS
  const deleteUsuario = async(id) => {
    await axios.delete(`${baseUrl}${id}`)
      .then(res => {
        setDatosUsuarios(datosUsuarios.filter(user => user.id !== id))
      })
      .catch(error => {
        console.log(error)
      })
  }

  //console.log(`${baseUrl}${parseInt(uuidv4(), 16)}`)
  // let idDefinitivo = enviarDatosUsuarios()
  // console.log(idDefinitivo)

  // FINAL CODIGO DE USUARIOS*********************************************************************************************************




  // COMIENZO CODIGO DE VENTAS*********************************************************************************************
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
      if (elemento.id_venta.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
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
  const enviarDatosVentas = async(e) => {
    e.preventDefault()
    const formDataVentas = {
      id_venta: parseInt(uuidv4(), 16),
      id_cliente: e.target.id_cliente.value,
      id_producto: e.target.id_producto.value,
      cantidad: e.target.cantidad.value,
      valor: e.target.valor.value,
    }
  
    await axios.post(baseUrlVentas, formDataVentas)
      .then(res => {
          setDatosVentas((currentData) => [
              ...currentData, formDataVentas
          ])
      })
      .catch(error => {
          console.log(error)
      })
      //console.log(parseInt(uuidv4(), 16))
      //console.log(typeof(parseInt(uuidv4(), 16)))

    //e.target.reset()
    //console.log("ID real",formDataVentas.id_usuarios)
  }
  // ---------------------------------------------------

  // METODO DELETE VENTAS
  const deleteVenta = async(id) => {
    await axios.delete(`${baseUrlVentas}${id}`)
      .then(res => {
        setDatosVentas(datosVentas.filter(v => v.id !== id))
      })
      .catch(error => {
        console.log(error)
      })
  }

  

  // FINAL CODIGO DE VENTAS*********************************************************************************************************


  
  return (
    <Router>
    
      <LayoutUniversal>
        <Switch>
          <Route path={rutas.usuarios} exact>
            <Usuarios deleteUsuario={deleteUsuario} datosUsuarios={datosUsuarios} filtroBusqueda={filtroBusqueda} getUsuarios={getUsuarios}/>
          </Route>
          <Route path={rutas.editarUsuario} exact>
            <EditarUsuario datosUsuarios={datosUsuarios}/>
          </Route>
          <Route path={rutas.nuevoUsuario} exact>
            <NuevoUsuario enviarDatosUsuarios={enviarDatosUsuarios}/>
          </Route>



          <Route path={rutas.ventas} exact>
            <Ventas deleteVenta={deleteVenta} datosVentas={datosVentas} filtroBusquedaVentas={filtroBusquedaVentas} getVentas={getVentas}/>
          </Route>
          <Route path={rutas.editarVenta} exact>
            <EditarVenta datosVentas={datosVentas}/>
          </Route>
          <Route path={rutas.nuevaVenta} exact>
            <NuevaVenta enviarDatosVentas={enviarDatosVentas} datosUsuarios={datosUsuarios} />
          </Route>




          <Route path={rutas.productos} exact>
          <Productos/>
          </Route>
          <Route path={rutas.editarProducto} exact>
            <EditarProducto/>
          </Route>
          <Route path={rutas.nuevoProducto} exact>
            <NuevoProducto/>
          </Route>

        </Switch>
        

      </LayoutUniversal>
    </ Router>
  );
}

export default App;
