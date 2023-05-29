import React, { useContext, useState } from 'react'
import "./shoppingCart.css"
import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider'
import { NavLink } from 'react-router-dom'
import { ApiContext } from '../../../contexts/ApiProvider'
import Address from '../user/profile/Address'
import PaymentMethod from '../user/profile/PaymentMethod'


const Checkout = () => {
    const { totalPrice, shoppingCart } = useContext(ShoppingCartContext);
    const { getAdress, getUserCreditCards } = useContext(ApiContext);
    const [address, setAddress] = useState({});
    const [paymentMethod, setPaymentMethod] = useState({});
    const [showAdress, setShowAdress] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
  console.log(shoppingCart)

    const showAdresses = () => {
      setShowAdress(true);
    };
  
    const showPaymentMethods = () => {
      setShowPaymentMethod(true);
    };

  return (
      <>

          <div>
            <div className='text-space mt-4'>
              <div><p>My Order</p></div>
              <div><p>${ totalPrice }</p></div>
              </div>
              <hr></hr>
              
              <div>
        {shoppingCart.map((item) => (
          
          
          <div className="row wishlist-content">

          
          <div className='col text-space'>
            <div className='text'> {item.name}, {item.size}, {item.color}</div>
            <div className='text'> {item.quantity} X ${item.price} </div>
          </div>
          </div> 
          ))}   
              </div>
              
            <div className='text-space'>
              <div><p>Discount </p></div>
              <div><p> -0 </p></div>
            </div>
            <div className='text-space'>
              <div><p>Delivery</p></div>
              <div><p>Free</p></div>
            </div>
          </div>
          
          <hr className='mt-4 mb-4'></hr>

          <div>
            <button onClick={showAdresses}>Adress</button>
            {showAdress && <Address/>}
          </div>
          
            <hr className='mt-4 mb-4'></hr>

      
          <div>
            <button onClick={showPaymentMethods}>Payment Methods</button>
            {showPaymentMethod && <PaymentMethod />}
          </div>
         

          <div>
            <button className="dark-btn-standard">CONFIRM ORDER</button>   
          </div>
      </>
  )
}

export default Checkout