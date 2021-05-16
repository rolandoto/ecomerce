import React, { useCallback, useContext, useMemo, useRef, useState } from 'react'

import { Products} from '../component/Products'
import { Search } from '../component/Search'
import Appcontex from '../context/Appcontex'
import InitialStacte from '../InitialStacte'


const Home = () => {
const  {state} = useContext(Appcontex)
const {product} = state
console.log(product)



    return (
        <div>
         
            
          {/**aqui entro al initial state saclos la informacion del estado */}
         
       
       
        </div>
    )
}

export default Home
