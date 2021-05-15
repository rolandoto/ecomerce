import React, { useContext, useRef } from 'react'
import { Link} from 'react-router-dom'
import '../Componentes/styles/Information.css'
import Appcontex from '../context/Appcontex'



const Information = ({history}) => {
    const {state,AddTobuyer} = useContext(Appcontex)
    const form = useRef(null)
    const  {cart} =  state
    
    const handsubmit = () => {
        //el uso de los formularios 
        const formdata  = new FormData(form.current)
        const buyer = {
            'name': formdata.get('name'),
            'email:':formdata.get('email'),
            'addres':formdata.get('addres'),
            'city':formdata.get('city'),
            'country':formdata.get('country'),
            'state':formdata.get('state'),
            'cp':formdata.get('cp'),
            'phone':formdata.get('phone')

        }
        AddTobuyer(buyer);
        //history viene como props del react router
        history.push('/pyment')
        
    }

    return (
        <div className="Information">
                <div className="Information-content">
                    <div className="Information-head">
                        <h3>informacion de contacto</h3>
                    </div>
                    <div className="Information-form">
                        <form ref={form}>
                            <input type="text" placeholder="Nombre completo" name="name"/>

                            <input type="text" placeholder="Correo electronico  " name="email"/>

                            <input type="text" placeholder="Direccion" name="addres"/>

                            <input type="text" placeholder="ciudad" name="city"/>

                            <input type="text" placeholder="pais" name="country"/>

                            <input type="text" placeholder="Estado" name="state"/>

                            <input type="text" placeholder="codigo postal" name="cp"/>

                            <input type="text" placeholder="telefono" name="phone"/>
                          
                        </form>
                    </div>

                    <div className="Information-buttons">
                            <div className="Information-back">
                            <Link to="/Chekaout">
                            regresar
                                </Link>
                            </div>
                            <div className="Information-next">
                               <button type="button" onClick={handsubmit}>pagar</button>
                             
                            </div>
                    </div>

                </div>

                <div className="information-sidebar">
                    <h3>pedido</h3>
                    {cart.map((item) => (
                          <div className="Information-item"  key={item.id}>
                            <div className="Information-element">
                                    <h4>{item.title}</h4>
                                    <span>${item.price}</span>
                            </div>
                      </div>
                    ))}
                  
                </div>
        </div>
    )
}

export default Information
