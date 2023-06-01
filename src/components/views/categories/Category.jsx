import Navigation from "../../partials/navigation/Navigation"
import TopHeader from "../../partials/shared/topHeader/TopHeader"
import React from 'react'
import "../../partials/shared/collection/collection.css"
import CollectionItem from '../../partials/shared/collectionItem/CollectionItem'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { FilterContext } from "../../../contexts/FilterProvider";
import { ProductContext } from '../../../contexts/ProductProvider'
import { ApiContext } from "../../../contexts/ApiProvider";
import { useRef } from "react"
import Collection from "../../partials/shared/collection/Collection"


const Category = () => {
  return(
    <>
      <Collection />
    </>
  )
  


   
  
}

export default Category