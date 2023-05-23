import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'
import { NavLink } from 'react-router-dom'

const Collection = ({ title, itemList }) => {
  
  

  return (
    <div className="container">
      <div className='header-section'>
                  <h3>{title}</h3>                
        <button className='camo-btn'> View all <i class="fa-solid fa-greater-than"></i></button>     
        </div>
      <div className="item-carousel">
        {
          itemList.map(item => (<CollectionItem key={item.id} item={item} />))
        }            
      </div>
    </div>
  )
}

export default Collection