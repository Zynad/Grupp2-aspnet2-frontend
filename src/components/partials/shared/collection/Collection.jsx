import React from 'react'
import CollectionItem from '../collectionItem/CollectionItem'

const Collection = ({title}) => {
  return (
    <div className="container">
        <div className="title">{title}</div>
        <div className="item-carousel">
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
            <CollectionItem />
        </div>
    </div>
  )
}

export default Collection