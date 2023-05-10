import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'

const Collection = ({ title, itemList }) => {
  
  console.log(itemList)

  return (
    <div className="container">
        <div className="title">{title}</div>
      <div className="item-carousel">
                <CollectionItem item={itemList[0]}/>
                <CollectionItem item={itemList[1]}/>
                <CollectionItem item={itemList[2]}/>
                <CollectionItem item={itemList[3]}/>
                <CollectionItem item={itemList[4]}/>              
            </div>
    </div>
  )
}

export default Collection