import React from 'react'
import SideBarProductos from './SideBarProductos'

const LayoutProductos = ({children}) => {
    return (
        <>
        <div class="min-h-100 bg-gray-200">
            <div class="md:flex min-h-screen md:align-top">
                <SideBarProductos></SideBarProductos>
                <>{children}</>
            </div>
        </div>
        </>
    )
}

export default LayoutProductos
