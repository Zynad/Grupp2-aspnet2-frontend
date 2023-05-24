import React, { useContext, useState } from 'react'
import "./shoppingCart.css"
import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider'
import { NavLink } from 'react-router-dom'

const Checkout = () => {
    const { totalPrice, shoppingCart } = useContext(ShoppingCartContext);
    const [address, setAddress] = useState([]);
    

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
            <div className='text'> {item.name}, storlek, färg,</div>
            <div className='text'> antal X ${item.price} </div>
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

          <NavLink to="/adress">
          <div>
           Shipping Details
          </div>
          </NavLink>
          
            <hr className='mt-4 mb-4'></hr>

          <div>
           Payment Method
          </div>


          <div>
            <button className="dark-btn-standard">CONFIRM ORDER</button>   
          </div>
      </>
  )
}

export default Checkout