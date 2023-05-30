import React, { useContext } from 'react'
import Navigation from '../../partials/navigation/Navigation'
import { ShoppingCartContext } from '../../../contexts/ShoppingCartProvider'
import { NavLink } from 'react-router-dom'
import "./shoppingCart.css"
import { useState } from 'react'
import Header from '../../partials/header/Header'



const ShoppingCart = () => {
  const { shoppingCart, totalPrice, removeProductFromCart, updateCart, updatePrice } = useContext(ShoppingCartContext);
  const [count, setCount] = useState(1);
  const [item, setItem] = useState({});
 

  const updateQuantity = (item, change) => {
    updateCart(item, item.price, change);
    updatePrice();
  }
  
  const renderShoppingCart = () => {

    if(shoppingCart.length != 0){
      return (    
        <>    
          {shoppingCart.map((item) => (
          
          
          <div className="row schoppingcart-content border-top border-bottom">

          <div className="img-content">
          <img className="img-cart" src={item.imageUrl}></img>
          </div>
          
          <div className='col text-content'>
          <div className='text'> {item.name}</div>
          <div className='text'> ${item.price}</div>
          <div className='text'> Size - {item.size}</div>
          <div className='text'> Color - {item.color}</div>
          </div>
            
          <div className='right'>
            <button className='camo-btn' onClick={() => { updateQuantity(item, "+") }}>+</button>
            <p>{item.quantity}</p>
            <button className='camo-btn' onClick={() => { updateQuantity(item, "-") }}>-</button>  
              </div>
            </div>
          ))}
          

          <hr className='mt-4 mb-4'></hr>

          <div>
            <div className='text-space'>
              <div><p>Subtotal</p></div>
              <div><p>${ totalPrice }</p></div>
            </div>
            <div className='text-space'>
              <div><p>Discount</p></div>
              <div><p></p></div>
            </div>
            <div className='text-space'>
              <div><p>Delivery</p></div>
              <div><p>Free</p></div>
            </div>
          </div>
          
          <hr className='mt-4 mb-4'></hr>

          <div className='text-space'>
            <div><p>Total</p></div>
            <div><p>${ totalPrice }</p></div>
          </div>

          <div>
            <NavLink to="/checkout">
            <button className="dark-btn-standard">PROCEED TO CHECKOUT</button>   
            </NavLink>
          </div>
          
        </>
      )
    } else {
      return (
      <>
      <div className='wishlist-empty-content'>
      <img className='wishlist-empty' src="https://episodes.castos.com/633784b2510731-96124419/images/503435-137428.jpg"></img>
      <NavLink to="/home"><div className='mt-5'><button className="button-wishlist-empty col-12 col-lg-6">SHOP NOW</button></div></NavLink>
      </div>
      </>
      )
    }



    
  }

  
  return (
    <>
     <div className='container mt-5'>
     <Header route={"/home"} title={"Order"} shoppingBag={"hidden"}/>
     {renderShoppingCart()}
     </div>
     <Navigation />
    </>
  )
}

export default ShoppingCart