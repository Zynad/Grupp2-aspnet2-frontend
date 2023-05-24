import React from 'react'
import "./reviewSection.css"
import StarRating from '../starRating/StarRating'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../../../contexts/ProductProvider'

const ReviewSection = ( {item} ) => {
  return (
      <>
          <div className='container mt-5'>
              <div className='header-section'>
                  <h3>Reviews</h3>
                  <NavLink to="/products/reviews">
                      <button className='camo-btn'> View all <i class="fa-solid fa-greater-than"></i></button>
                  </NavLink> 
              </div>
              <div className='review-section'>
                  <div className='profile-image'>
                      <img src="" alt="" className='circle'/>
                  </div>
                  <div className='text-section'>
                      <div className='name'> Alice</div>
                      <div className='star-rating-review'> <StarRating /> </div>
                      <div className='date'>17 maj 2023</div>
                      <div className='comment'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non commodo velit, vitae rhoncus est. Nullam ante justo, convallis sed tempor quis, ultrices viverra diam. Mauris sed arcu maximus, fermentum neque vitae, sodales neque. </div>
                      
                  </div>
              </div>
        </div>
      </>
  )
}

export default ReviewSection