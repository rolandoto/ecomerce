import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Componentes/styles/Header.css'
import Appcontex from '../context/Appcontex'

export const Header = () => {
    const {state} = useContext(Appcontex)
    const {cart} = state
  
    return (

        

        <div className="Header">
        <h1 className="Header-title"> 
       
    
        <Link to="/" > 
        Rolando shop
        </Link>
       </h1>
        <div className="Header-chekaout">
            
           <Link to="/Chekaout">
           <li className=" fas fa-shopping-basket" /> 
           {cart.length > 0 && <div className="header-alert">{cart.length}</div>}
           </Link>
          
        </div>
       
    </div>
    
    )
}
