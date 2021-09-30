import React from 'react'
import SideBar from './SideBar'

const Layout = ({children}) => {
    return (
        <>
        <div class="min-h-100 bg-gray-200">
             <div class="md:flex min-h-screen md:align-top">
                <SideBar></SideBar>
                <>{children}</>
                {/* <NuevoUsuario></NuevoUsuario>  */}
                {/* <Usuarios></Usuarios> */}
            </div> 
        </div>   
        </>
    )
}

export default Layout
