import React from 'react'
import "./collection.css"
import CollectionItem from '../collectionItem/CollectionItem'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterProvider";

const Collection = ({ title, itemList }) => {

  const { setTitle } = useContext(FilterContext);

  return (
    <div className="container">
      <div className='header-section'>
          <h3>{title}</h3>
          <div>
           View all
          <NavLink to="/filter" className="nav-standard nav-collection"><i onClick={() => {setTitle(title)}} className="fa-solid fa-angle-right"></i></NavLink>
          </div>     
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