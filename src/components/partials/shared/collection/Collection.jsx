import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'

const Collection = ({ title, itemList }) => {
  
  

  return (
    <div className="container">
      <div className="title">{title}</div>
      <div className="item-carousel">
        {
          itemList.map(item => (<CollectionItem key={item.id} item={item} />))
        }            
      </div>
    </div>
  )
}

export default Collection