import Navigation from '../../partials/navigation/Navigation'
import './Search.css';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../contact/Contact';
import {NavLink} from 'react-router-dom';
import dressesImage from '../../../assets/images/dresses.jpg';
import pantsImage from '../../../assets/images/pants.jpg';
import accImage from '../../../assets/images/accesories.jpg';
import shoeImage from '../../../assets/images/shoes.jpg';
import tshirtImage from '../../../assets/images/tshirts.jpg';
import { ApiContext } from '../../../contexts/ApiProvider';
import { ProductContext } from "../../../contexts/ProductProvider"



const Search = () => {

    const {getAllProductsAsync} = useContext(ApiContext);
    const {setProducts} = useContext(ProductContext)
    const [showCategories, setShowCategories] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMenuToggle = () => {
        setShowCategories(!showCategories);
      };
    const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    };

    const handleProducts = async (category) => {
      console.log(category)
      let products = await getAllProductsAsync();
      let filterProducts = products.filter(item => item.tags == category);
      setProducts(filterProducts)

      console.log(products)
      console.log(filterProducts)

      // const handleProducts  = async (filterType, filterValue) => {
      //   console.log(filterType, filterValue);
      //   let products = await getAllProductsAsync();
      //   let filterProducts;
      
      //   if(filterType === 'tags'){
      //     filterProducts = products.filter(item => item.tags == filterValue);
      //   }
      //   else if(filterType == 'categories'){
      //     filterProducts = products.filter(item => item.categories == filterValue);
      //   }
      //   setProducts(filterProducts);
      //   console.log(products);
      //   console.log(filterProducts);
      // };
      
      
  }

  return (
     <>     
    <Navigation />
     <div className='category-search-page'>
        <div className='top-navbar-grid'>
            <div className='top-navbar-menu-block' onClick ={handleMenuToggle}>
              <Contact/> 
            </div>
            <div className='top-navbar-search'>
                <input placeholder= "&#x1F50E;&#xFE0E; Search..."/>
            </div>
                </div>

            <div className='top-navbar-cart' style={{ justifySelf: 'end' }}>
                <i class="fa-light fa-bag-shopping"></i>
            </div> 
         
        <div className='category-grid-links'>
            <div className='category-links' onClick={() => handleProducts('men')}>
              <NavLink to="/filter" className="category-block-link">Men</NavLink>
              </div>
            <div className='category-links' onClick={() => handleProducts('woman')}>
              <NavLink to="/filter" className="category-block-link">Woman</NavLink>
              </div>         
            <div className='category-links' onClick={() => handleProducts('kids')}>
              <NavLink to="/filter" className="category-block-link">Kids</NavLink>
              </div>            
            <div className='category-links' onClick={() => handleProducts('interior')}>
              <NavLink to="/filter" className="category-block-link">Interior</NavLink>
              </div>            
            <div className='category-links' onClick={() => handleProducts('outdoor')}>
              <NavLink to="/filter" className="category-block-link">Outdoor</NavLink></div>  
        </div>

        <div className='category-page-grid'>
            <div className ='category-block-text'>Men</div>
            <div className ='category-block-text'>Women</div>
            <div className ='category-block-text'>Kids</div>
            <div className ='category-block-text'>Interior</div>
            <div className ='category-block-text'>Outdoor</div>

            {/*<div className='category-block-1'>
  <a href='/dresses'>
    <div className='category-block-text'>DRESSES</div>
  </a>
</div>*/}

{/*replace the href attribute with the actual URL of the page you want to navigate to. */}
<div onClick={() => {handleProducts("dresses")}} className='category-block-1'>
  <NavLink to="/filter" className ="category-block-link">
    <img src={dressesImage} alt="Dresses"/>
    <div className='category-block-text'>Dresses</div>
  </NavLink>
</div>

<div onClick={() => {handleProducts("pants")}} className='category-block-1'>
  <NavLink to="/filter" className ="category-block-link">
    <img src={pantsImage} alt="Pants"/>
    <div className='category-block-text'>PANTS</div>
  </NavLink>
</div>

<div onClick={() => {handleProducts("accessories")}} className='category-block-2'>
  <NavLink to="/filter" className ="category-block-link">
  <img src={accImage} alt="Acc"/>
    <div className='category-block-text'>ACCESORIES</div>
  </NavLink>
</div>

<div onClick={() => {handleProducts("shoes")}} className='category-block-1'>
  <NavLink to="/filter" className ="category-block-link">
  <img src={shoeImage} alt="Shoes"/>
    <div className='category-block-text'>SHOES</div>
  </NavLink>
</div>

<div onClick={() => {handleProducts("t-shirt")}} className='category-block-1'>
  <NavLink to="/filter"  className ="category-block-link">
  <img src={tshirtImage} alt="Tshirt"/>
  <div className='category-block-text'>T-SHIRTS</div>
  </NavLink>
  
  
</div>
        </div>
    </div>
    </>
  );
}

export default Search