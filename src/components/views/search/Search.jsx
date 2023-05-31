import Navigation from '../../partials/navigation/Navigation'
import './Search.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../contact/Contact';
import {NavLink} from 'react-router-dom';
import dressesImage from '../../../assets/images/dresses.jpg';
import pantsImage from '../../../assets/images/pants.jpg';
import accImage from '../../../assets/images/accesories.jpg';
import shoeImage from '../../../assets/images/shoes.jpg';
import tshirtImage from '../../../assets/images/tshirts.jpg';


const Search = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMenuToggle = () => {
        //console.log('Menu toggled');
        setShowCategories(!showCategories);
      };
    const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
    };

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
            <div className='category-links'><a href='/men'>Men</a></div>
            <div className='category-links'><a href='/women'>Women</a></div>         
            <div className='category-links'><a href='/kids'>Kids</a></div>            
            <div className='category-links'><a href='/interior'>Interior</a></div>            
            <div className='category-links'><a href='/outdoor'>Outdoor</a></div>  
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
<div className='category-block-1'>
  <NavLink to="/dresses" className ="category-block-link">
    <img src={dressesImage} alt="Dresses"/>
    <div className='category-block-text'>Dresses</div>
  </NavLink>
</div>

<div className='category-block-1'>
  <NavLink to="/pants" className ="category-block-link">
    <img src={pantsImage} alt="Pants"/>
    <div className='category-block-text'>PANTS</div>
  </NavLink>
</div>
<div className='category-block-2'>
  <NavLink to="/accesories" className ="category-block-link">
  <img src={accImage} alt="Acc"/>
    <div className='category-block-text'>ACCESORIES</div>
  </NavLink>
</div>
<div className='category-block-1'>
  <NavLink to="/shoes" className ="category-block-link">
  <img src={shoeImage} alt="Shoes"/>
    <div className='category-block-text'>SHOES</div>
  </NavLink>
</div>
<div className='category-block-1'>
  <a href="/tshirts" className ="category-block-link">
  <img src={tshirtImage} alt="Tshirt"/>
    <div className='category-block-text'>T-SHIRTS</div>
  </a>
</div>
        </div>
    </div>
    </>
  );
}

export default Search