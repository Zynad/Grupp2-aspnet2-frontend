import React from 'react'
import "./collection.css"
import CollectionItem from '../collectionItem/CollectionItem'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { FilterContext } from "../../../../contexts/FilterProvider";
import { ProductContext } from '../../../../contexts/ProductProvider'
import { ApiContext } from "../../../../contexts/ApiProvider";

const Collection = ({ title, itemList }) => {

  const { setProducts } = useContext(ProductContext);
  const { getProductsByCategory } = useContext(ApiContext);

  const { setTitle } = useContext(FilterContext);

  const handleProducts = async () => {
  const splitTitle = title.split(' ');
  if(splitTitle[0] == 'Best'){ 
      setProducts(await getProductsByCategory('Top'))
      return;
  }
  setProducts(await getProductsByCategory(splitTitle[0]))
  }

  return (
    <div className="container">
      <div className='header-section'>
          <h3>{title}</h3>
          <div>
           View all
          <NavLink to="/filter" className="nav-standard nav-collection"><i onClick={() => {setTitle(title); handleProducts()}} className="fa-solid fa-angle-right"></i></NavLink>
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