import React from 'react'
import { NavLink } from 'react-router-dom'
import "./collectionItem.css"
import StarRating from '../starRating/StarRating'
import { ApiContext } from '../../../../contexts/ApiProvider'
import { WishlistContext } from '../../../../contexts/WishlistProvider';
import { useContext } from 'react'
import { ProductContext } from '../../../../contexts/ProductProvider'

const CollectionItem = ({item}) => {
    const { designateDetailedItem } = useContext(ProductContext)
    const { handleWishlist } = useContext(WishlistContext);

    const showDetailedItem = async (item) => {
        await designateDetailedItem(item)
    }
 
    const wishList = async (product) => {
        await handleWishlist(product)
    }

    return (
            <div className='container'>
            <div className="item-wrapper">
                <div className="image-section">
                    <NavLink to="/search">
                        <img src={item.imageUrl} alt={item.name}/>
                    </NavLink>
                    <div className="image-menu">
                        <div className='icons'>
                            <button onClick={() => { wishList(item) }} className="image-link"><i className="fa-regular fa-heart"></i></button>
                            <NavLink to="/products/test">
                            <button onClick={() => { showDetailedItem(item) }} className="image-link"><i className="fa-regular fa-bag-shopping"></i></button>
                            </NavLink>
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