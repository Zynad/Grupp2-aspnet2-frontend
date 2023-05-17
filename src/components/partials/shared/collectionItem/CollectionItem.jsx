import React from 'react'
import { NavLink } from 'react-router-dom'
import "./collectionItem.css"
import StarRating from '../starRating/StarRating'
import { ApiContext } from '../../../../contexts/ApiProvider'
import { useContext } from 'react'

const CollectionItem = ({item, showDetailedItem }) => {
    return (
            <div className='container'>
                <div className="item-wrapper">
                    <div className="image-section">
                    <img src={item.imageUrl} alt={item.name} onClick={showDetailedItem}/>
                    <div className="image-menu">
                        <div className='icons'>
                            <button className="image-link"><i className="fa-regular fa-heart"></i></button>
                            <button className="image-link"><i className="fa-regular fa-bag-shopping"></i></button>
                        </div>
                    </div>
                    </div>
                    <div className="body-section">
                        <div className="name">{item.name}</div>
                        <StarRating rating={item.rating}/>
                        <div className="price">{item.price}</div>
                    </div>
                </div>
            </div>
  )
}

export default CollectionItem