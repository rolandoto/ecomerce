import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'

import '../Componentes/styles/Products.css'
import Appcontex from '../context/Appcontex'
import { Product } from './Product'
import { Search } from './Search'

export const    Products = ( ) => {
    const {state,Addtocart,setstate} = useContext(Appcontex)
    const {product} = state
      console.log(state)
   
    const handeadd = product => () =>{
        Addtocart(product)
       
    }


    const  [serch,setsearch] = useState('')
    const searchinput = useRef(null)
       
    const handeSerach= useCallback(() => {
        setsearch(searchinput.current.value)
        //uso del usecalback
    },[])
    
        const   filteruser = useMemo(()=>
        //aqui esto todo lo que entra
        product.filter((user) => {
                //aqui esta diciendo lo que busque en serch aqui va a paracer
            return user.title.toLowerCase().includes(serch.toLowerCase())
        }),
        [product,serch]  
        ) 
   



   
    return (
        
        <div className="Products">
            
            <Search  serch={serch} searchinput={searchinput}  handeSerach={handeSerach}/>
           
          
            <div className="Products-items">
                {filteruser.map(product => (
                    <Product key={product.id} product1={product}  handeadd={handeadd}/>
                      
                ))}


               
            </div>
        </div>
    )
}
