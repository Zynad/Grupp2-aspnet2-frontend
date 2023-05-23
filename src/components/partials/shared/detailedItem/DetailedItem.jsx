import React, { useContext } from 'react'
import Navigation from '../../navigation/Navigation'
import StarRating from '../starRating/StarRating'
import "./detailedItem.css"
import { useState } from 'react';
import ColorSelector from '../colorSelector/ColorSelector';
import SizeSelector from '../sizeSelector/SizeSelector';
import { ProductContext } from '../../../../contexts/ProductProvider';
import { useParams } from 'react-router-dom';




const DetailedItem = ( {item} ) => {
  const [count, setCount] = useState(1);
  
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
            <div className="item-wrapper-detailed">
                <div className="image-section-detailed">
                <img src={item.imageUrl} alt={item.name}/>
                </div>
          <div className="body-section">
            <div className='container-flex'>
                <div className="name">{item.name}</div>
                        <i className="fa-regular fa-heart"></i>
                        </div>
            </div>                 
          <StarRating rating={item.rating} />
          <div className='container-grid'>
            <div className="price">{item.price}</div> 
            <div className='amount-counter'>
            <button className='' onClick={decrementCount}>-</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
            </div>
          </div>                       
        </div>
          <SizeSelector />
          <ColorSelector />
        <p>Description</p>
        <div>{item.description}</div>
          <button className="dark-btn-standard" type="submit">+ ADD TO CART</button>      
        </div> 
      </>
  )
}

export default DetailedItem