import Navigation from '../../partials/navigation/Navigation'
import './Search.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../contact/Contact';


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
     <Contact/>      
    <Navigation className={showCategories ? 'navigation open' : 'navigation'} />
     <div className='category-search-page'>
        <div className='top-navbar-grid'>
            <div className='top-navbar-menu-block' onClick ={handleMenuToggle}>
                <i className="fa-classic fa-bars-staggered"></i>
            </div>
            <div className='top-navbar-search'>
                <input placeholder= "&#x1F50E;&#xFE0E; Search..."/>
            </div>
           
                </div>
            <div className='top-navbar-cart'>
                <i class="fa-light fa-bag-shopping"></i>
            </div> 
            <div className="contact-search-page">
            <div className='top-navbar-email'onClick={handleDropdownToggle}>
                <a href="mailto:example@example.com">
                    <i className="fa-solid fa-envelope"></i>
                    </a>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <p>Location: Stockholm, Solna</p>
                            <p>141 22 Stockholm, Sweden</p>
                            <p>Phone Number: 123-456-789</p>
                            <p>Email: example@example.com</p>
                            </div>
                    )}
        </div>
        {showCategories ? (
        <div className={`category-grid-links ${showCategories ? 'open' : ''}`}>
            <div className='category-links'><a href='/men'>Men</a></div>
            <div className='category-links'><a href='/women'>Women</a></div>         
            <div className='category-links'><a href='/kids'>Kids</a></div>            
            <div className='category-links'><a href='/interior'>Interior</a></div>            
            <div className='category-links'><a href='/outdoor'>Outdoor</a></div>  
        </div>
        ): null}

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
  <a href="/dresses" className ="category-block-link">
    <div className='category-block-text'>DRESSES</div>
  </a>
</div>
<div className='category-block-1'>
  <a href="/dresses" className ="category-block-link">
    <div className='category-block-text'>PANTS</div>
  </a>
</div>
<div className='category-block-2'>
  <a href="/dresses" className ="category-block-link">
    <div className='category-block-text'>ACCESORIES</div>
  </a>
</div>
<div className='category-block-1'>
  <a href="/dresses" className ="category-block-link">
    <div className='category-block-text'>SHOES</div>
  </a>
</div>
<div className='category-block-1'>
  <a href="/dresses" className ="category-block-link">
    <div className='category-block-text'>T-SHIRTS</div>
  </a>
</div>
        </div>
    </div>
    </div>
    </>
  );
}

export default Search