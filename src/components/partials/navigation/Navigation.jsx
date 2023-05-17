import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navigation.css";

const Navigation = () => {
  return (
      <div className='footer-nav'>
      <nav>
            <NavLink className="link" to="/"><i className="fa-2xs fa-light fa-house"></i></NavLink>
            <NavLink className="link" to="/search"><i className="fa-2xs fa-light fa-search"></i></NavLink>
            <NavLink className="link" to="/shoppingcart"><i className="fa-2xs fa-light fa-bag-shopping"></i></NavLink>
            <NavLink className="link" to="/favorites"><i className="fa-2xs fa-light fa-heart"></i></NavLink>
            <NavLink className="link" to="/login"><i className="fa-2xs fa-light fa-circle-user"></i></NavLink>              
        </nav>
      </div>
  )
}

export default Navigation