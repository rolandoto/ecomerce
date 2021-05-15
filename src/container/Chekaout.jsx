import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../Componentes/styles/Checkout.css'
import Appcontex from '../context/Appcontex'
const Chekaout = () => {
    const {state,removefromcart} = useContext(Appcontex)
    const {cart,buyer} = state
    

        //funncion de un borrar
    const hanremove = product => () =>{
        removefromcart(product)
       
    }

        //funcion totla del pedido
    const hanSubtotal = () => {
       const reduccer  = (acumulator,currentValue) => acumulator + currentValue.price;
       const sum = cart.reduce(reduccer,0)
       return sum
        
    }

   

  
    return (
     
             <div className="Checkout">
                    <div className="Checkout-content">
                        {/**si lista  es mayor de 0 entoces se va a mostrar lista de de pedido sino si esta 0
                         * sin pedidos
                         */}
                        {cart.length > 0 ? <h3>Lista de peido</h3> : <h3>sin pedidos</h3>}
                        {cart.map((items) => (
                            <div key={items.id} className="Checkout-item">
                                <div className="Checkout-element">
                                     <h4>{items.title}</h4>
                                     <div className="Products-item">
                                     <img src={items.image} alt=""/>
                                     </div>
                                   
                                   
                                    <span>{items.price}</span>
                                </div>
                                
                                <button type="button"  onClick={hanremove(items)}>
                                    <i className="fas fa-trash"/>
                                    </button >
                                   
                                </div>

                        ))}
                            
                    </div>
                    {cart.length > 0 && (
                        <div className="Checkout-sidebar">
                        <h3>{`precio total:$ ${hanSubtotal()}`}</h3>
                        <Link to="/Information">
                        <button type="button">continuar pedidos</button>
                        </Link>
                     
                   
                    </div>
                    )}
                    
                   
             </div>
           
    )
}

export default Chekaout
