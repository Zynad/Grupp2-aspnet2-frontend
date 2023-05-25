import React from 'react'
import "./collection.css"
import CollectionItem from '../collectionItem/CollectionItem'
import { NavLink } from 'react-router-dom'
import { useContext, useRef } from "react"
import { FilterContext } from "../../../../contexts/FilterProvider"

const Collection = ({ title, itemList }) => {

  const containerRef = useRef(null);
  const scrollDistance = 500;

  const scrollLeft = () => {
    if (containerRef.current) {
      const currentScrollLeft = containerRef.current.scrollLeft;
      containerRef.current.scrollTo({
        left: currentScrollLeft - scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const currentScrollLeft = containerRef.current.scrollLeft;
      containerRef.current.scrollTo({
        left: currentScrollLeft + scrollDistance,
        behavior: "smooth",
      });
    }
  };

  const { setTitle } = useContext(FilterContext);

  return (
    <div className="container">
        <div className='header-section'>
            <h3>{title}</h3>
            <div>
            View all
            <NavLink to="/filter" className="nav-standard nav-collection"><i onClick={() => {setTitle(title)}} class="fa-solid fa-angle-right"></i></NavLink>
            </div>     
          </div>
        <div className="item-carousel" ref={containerRef}>
          {
            itemList.map(item => (<CollectionItem key={item.id} item={item} />))
          }            
        </div>
        <div className='carousel-snap-container'>
            <button className='carousel-btn fa-solid fa-chevron-left' onClick={scrollLeft}></button>
            <button className='carousel-btn fa-solid fa-chevron-right' onClick={scrollRight}></button>
          </div>
    </div>
  )
}

export default Collection