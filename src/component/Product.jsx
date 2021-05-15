import React from 'react'
import Appcontex from '../context/Appcontex'

//props
export const Product = ({product1,handeadd}) => {
   

    return (
       
        <div className="Products-item">
          
            <img src={product1.image} alt={product1}/>
            <div className='product-item-info'>
                <h2>{product1.title}
                <span>$
                    {' '}
                    {product1.price}</span>
                </h2>
                <p>{product1.descripction}</p>
              
            </div>
            <button type="button" onClick={handeadd(product1)} >comprar</button>
         
        </div>
    )
}
