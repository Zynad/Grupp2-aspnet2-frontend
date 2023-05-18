import React from 'react'
import "./favorites.css"
import Navigation from '../../partials/navigation/Navigation'
import {useContext} from 'react'
import { WishlistContext } from '../../../contexts/WishlistProvider'
import StarRating from './StarRating'
import wishImg from "../../../assets/images/wishlist.png"
import { NavLink } from 'react-router-dom'


const Favorites = () => {

  const { wishlist, deleteWishlist } = useContext(WishlistContext);

  const deleteProduct = async (id) => {
   await deleteWishlist(id)
  }

  const renderWishlist = () => {

    if(wishlist.length != 0){
      return (    
        <>    
        {wishlist.map((item, index) => (
          <div className="row wishlist-content">

          <div className="img-content">
          <img className="img-wishlist" src={item.imageUrl}></img>
          </div>
          
          <div className='col text-content'>
          <div className='text'> {item.description}</div>
          <div className='text'> ${item.price}</div>
          <div className='text'><StarRating rating={item.rating}/></div> 
          </div>
        
          <div className="col icon-content">
          <i class="fa-solid fa-heart icon-heart fa-lg" onClick={() => {deleteProduct(item.id)}}></i>
          </div>
  
          <hr className='mt-4 mb-4'></hr>
          </div> 
        ))}
        </>
      )
    } else {
      return (
      <>
      <div className='wishlist-empty-content'>
      <img className='wishlist-empty' src={wishImg}></img>
      <NavLink to="/"><div className='mt-5'><button className="button-wishlist-empty col-12 col-lg-6">SHOP NOW</button></div></NavLink>
      </div>
      </>
      )
    }



    
  }

  
  return (
     <>
     <div className='container mt-5'>
     {renderWishlist()}
     </div>
     <Navigation />
    </>
  )
}

export default Favorites