import React, { useContext } from 'react'
import '../Componentes/styles/Payment.css'
import Appcontex from '../context/Appcontex'
import {PayPalButton} from 'react-paypal-button'



const Pyment = ({history}) => {
    
    const {state,addNerOrders} = useContext(Appcontex)
    const {cart, buyer,orders} = state
        console.log(orders  )
        //propiedades del paypal
    const paypalPotion = {
        clientId: 'AT85DZy-E01h-Wr6QeFy7fpbZYpFoDg6liQ4tPUy2sMudga8BIUR_UiHpk5wc-Jh9kfBZrQrx1qk2DZx',
        intent: 'capture',
        currency:'USD'
    }

    const buttonStyles = {
        loyout:'vertical',
        shape: 'rect'
    }

    const hanSubtotal = () => {
        const reduccer  = (acumulator,currentValue) => acumulator + currentValue.price;
        const sum = cart.reduce(reduccer,0)
        return sum
         
     }
        const handesuceess = (data) => {
           
          console.log(data)
        

             if(data.status === 'COMPLETED'){
               //AQUI ESTA ALMACENANDO TODA LA INFORMACION DEL CARRTIO,PRODUYCTO,
                 const newOrder = {
                     //comprador 
                    buyer,
                    //product
                    product: cart,
                    //paypal
                    payment:data
                    
                 }

                 addNerOrders(newOrder);
                 history.push('/Sucess')
                 console.log('exicto')
             }
        }


    return (

       

        <div>
            <div className="Payment">
                <div className="Payment-con¡`+´çtent">
                    <h3>resumen del pedido</h3>

                    {cart.map((item) => (
                        <div className="payment-item" key={item.id}>
                            <div className="payment-element">
                                <h4>{item.title}</h4>
                                <span>$
                                    {' '}
                                     {item.price}
                                </span>
                            </div>
                        </div>
                    ))}

                    {cart.length > 0  && (
                        <div className="Pyment-button">
                              <PayPalButton 
                             paypalOptions={paypalPotion}
                            buttonStyles={buttonStyles}
                            amount={25}
                            onPymentStart={() => console.log('start payment')}
                            //EL AQUI MANDA UNOS DATOS EN LA FUNCION
                            onPaymentSuccess={data => handesuceess(data)}
                            onPaymentError= {error => console.log(error) }
                            onPaymentCancel ={data => console.log(data)}
                              />
                        </div>
                        )}
                </div>

            </div>
        </div>
    )
}

export default Pyment
