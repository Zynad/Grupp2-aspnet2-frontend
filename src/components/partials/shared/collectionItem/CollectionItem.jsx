import React from 'react'
import { NavLink } from 'react-router-dom'
import "./collectionItem.css"
import StarRating from '../starRating/StarRating.'
import { ApiContext } from '../../../../contexts/ApiProvider'
import { useContext } from 'react'

const CollectionItem = (item) => {
    console.log(item)
    console.log(item.item)
    return (
            <div className='container'>
                <div className="item-wrapper">
                    <div className="image-section">
                    <img src={item.item.imageUrl} alt=''/>
                    <div className="image-menu">
                        <div className='icons'>
                            <button className="image-link"><i className="fa-regular fa-heart"></i></button>
                            <button className="image-link"><i className="fa-regular fa-bag-shopping"></i></button>
                        </div>
                    </div>
                    </div>
                    <div className="body-section">
                        <div className="name">{item.item.name}</div>
                        <StarRating rating={item.item.rating}/>
                        <div className="price">{item.item.price}</div>
                    </div>
                </div>
            </div>
  )
}

export default CollectionItem