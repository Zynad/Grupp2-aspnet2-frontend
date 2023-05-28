import React, { useContext } from 'react'
import Navigation from '../../navigation/Navigation'
import StarRating from '../starRating/StarRating'
import "./detailedItem.css"
import { useState } from 'react';
import ColorSelector from '../colorSelector/ColorSelector';
import SizeSelector from '../sizeSelector/SizeSelector';
import { ProductContext } from '../../../../contexts/ProductProvider';
import { ShoppingCartContext } from '../../../../contexts/ShoppingCartProvider';




const DetailedItem = () => {
  const [count, setCount] = useState(1);
  const { item } = useContext(ProductContext)
  const { addProductToCart } = useContext(ShoppingCartContext);
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [addedToCart, setAddedToCart] = useState(true)
  

  const addToShoppingCart = async (product) => {
    if (color != "" && size != "") {
        await addProductToCart(product, product.price, size, color, count)
      setAddedToCart(true)
      
    }
    else {
      setAddedToCart(false)
    }
    }
  
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count != 1) {
      setCount(count - 1);
    }
   
  };


  return (
      <>
      <div className='container'>
        <div className='item-wrapper-detailed'>
                   <div className="image-section-detailed">
                <img src={item.imageUrl} alt={item.name}/>
        </div>
        <div className='body-section-detailed'>
           <div className='container-flex'>
                <div className="name">{item.name}</div>
                        <i className="fa-regular fa-heart"></i>
              </div>                 
          <StarRating rating={item.rating} numberOfReviews={item.reviewCount} />
          <div className='container-grid'>
            <div className="price">{item.price}</div> 
            <div className='amount-counter'>
            <button onClick={decrementCount}>-</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
            </div>
        </div>
          <SizeSelector size={size} setSize={setSize} />
          <ColorSelector color={color} setColor={setColor} />
        <p className='mt-3'>Description</p>
        <div className='my-3'>{item.description}</div>
        </div>
        </div>
       
           
            {!addedToCart && <p className='center'>You must choose a size and color</p>}
          <button className="dark-btn-standard" onClick={() => { addToShoppingCart(item) }}>+ ADD TO CART</button>      
        </div> 
      </>
  )
}

export default DetailedItem