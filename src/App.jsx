import './App.css';
import Login from "./Components/Login"
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
  return (
    <Router>
    
      <LayoutUniversal>
        <Switch>
          <Route path={rutas.usuarios} exact>
            <Usuarios/>
          </Route>
          <Route path={rutas.editarUsuario} exact>
            <EditarUsuario/>
          </Route>
          <Route path={rutas.nuevoUsuario} exact>
            <NuevoUsuario/>
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
