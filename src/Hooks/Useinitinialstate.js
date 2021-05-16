import  { useEffect, useState } from 'react'

import InitialStacte from '../InitialStacte'

const Useinitinialstate = () => {
    //Hooks 
    const [state, setstate] = useState(InitialStacte)
   
    const {product} = state
    
    function myFunction() {
        setTimeout(function(){ console.log(product); }, 3000);
      }
    console.log(myFunction())

    //agregar producto
    const Addtocart = payload => {
        setstate({
            ...state,
            cart:[...state.cart, payload],
        })
        
    }

    //borrar producto
    const removefromcart = payload =>{
        setstate({
            ...state,
            cart: state.cart.filter(item => item.id  != payload.id)   
        })
    }


    //datos del comprador
    const AddTobuyer = payload=>{
        setstate({
            ...state,
            buyer: [...state.buyer,payload]
        })
    } 

     const addNerOrders = payload  => {
            setstate({
                ...state,
                orders:[...state.orders, payload]
            })
     }

     console.log(Addtocart)
    

    return {
        Addtocart,
        removefromcart,
        AddTobuyer,
        addNerOrders,
        state,
        setstate
    }                        
}



export default Useinitinialstate