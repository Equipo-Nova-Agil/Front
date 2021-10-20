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


import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';



function App() {

  const [datosApi, setDatosApi] = useState([])
  const baseUrl = "http://localhost:3000/posts"
  //const baseUrl = "https://sleepy-forest-23219.herokuapp.com/api/usuario/"


  // METODO GET USUARIOS
  const getDatos = async() => {
    await axios.get(baseUrl)
        .then(res => {
            // con la api de mintic
            // console.log("DATA", res.data.Usuarios)
            // setDatosApi(res.data.Usuarios)

            // con json server
            console.log("DATA", res.data)
            setDatosApi(res.data)
        })
        .catch(error => {
            console.log(error)
        })
  }

  useEffect(async() => {
    await getDatos()
  },[])

  // METODO POST USUARIOS
  const enviarDatos = async(e) => {
    e.preventDefault()
    const formData = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      edad: e.target.edad.value,
      genero: e.target.genero.value,
      correo: e.target.correo.value,
      telefono: e.target.telefono.value,
      tipo: e.target.tipo.value,
      direccion: e.target.direccion.value,
      password: e.target.password.value,
      id_rol_id: e.target.id_rol_id.value,
      id_estado_id: e.target.id_estado_id.value
    }
  
    await axios.post(baseUrl, formData)
      .then(res => {
          setDatosApi((currentData) => [
              ...currentData, formData
          ])
      })
      .catch(error => {
          console.log(error)
      })

    e.target.reset()
  }
  // ---------------------------------------------------



  return (
    <Router>
    
      <LayoutUniversal>
        <Switch>
          <Route path={rutas.usuarios} exact>
            <Usuarios datosApi={datosApi}/>
          </Route>
          <Route path={rutas.editarUsuario} exact>
            <EditarUsuario/>
          </Route>
          <Route path={rutas.nuevoUsuario} exact>
            <NuevoUsuario enviarDatos={enviarDatos}/>
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



          <Route path={rutas.ventas} exact>
          <Ventas/>
          </Route>
          <Route path={rutas.editarVenta} exact>
            <EditarVenta/>
          </Route>
          <Route path={rutas.nuevaVenta} exact>
            <NuevaVenta/>
          </Route>

        </Switch>
        

      </LayoutUniversal>
    </ Router>
  );
}

export default App;
