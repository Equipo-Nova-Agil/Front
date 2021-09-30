import React from 'react'
import "./tailwind.min.css" 
import SideBarVentas from './SideBarVentas'

const LayoutVentas = ({children}) => {
    return (
        <>
        <div class="min-h-100 bg-gray-200">
            <div class="md:flex min-h-screen md:align-top">
                <SideBarVentas></SideBarVentas>
                <>{children}</>
            </div>
        </div>
        </>
    )
}

export default LayoutVentas
