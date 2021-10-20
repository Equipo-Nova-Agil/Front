import React from 'react'
import SideBarUniversal from './SideBarUniversal'

const LayoutUniversal = ({children}) => {
    return (
        <>
        <div className="min-h-100 bg-gray-200">
             <div className="md:flex min-h-screen md:align-top">
                <SideBarUniversal></SideBarUniversal>
                <>{children}</>
            </div> 
        </div>               
        </>
    )
}

export default LayoutUniversal
