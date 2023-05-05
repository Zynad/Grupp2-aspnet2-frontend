import React from 'react'
import { NavLink } from 'react-router-dom'
import "./collectionItem.css"
import StarRating from '../starRating/StarRating.'

const CollectionItem = (item) => {
    return (
            <div className='container'>
                <div className="item-wrapper">
                    <div className="image-section">
                        <img src="https://assets.vogue.com/photos/61df2f6d60d4727d5bae2c81/master/w_1920%2Cc_limit/slide_10.jpg" alt=''/>
                    <div className="image-menu">
                        <div className='icons'>
                            <button className="image-link"><i className="fa-regular fa-heart"></i></button>
                            <button className="image-link"><i className="fa-regular fa-bag-shopping"></i></button>
                        </div>
                    </div>
                    </div>
                    <div className="body-section">
                        <div className="name">Black Coat</div>
                        <StarRating rating="3" />
                        <div className="price">$3500</div>
                    </div>
                </div>
            </div>
  )
}

export default CollectionItem