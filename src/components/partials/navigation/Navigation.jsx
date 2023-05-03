import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./navigation.css";

const Navigation = () => {
  return (
      <div class='footer-nav'>
        <nav>
            <NavLink className="link" to="/home"><i className="fa-regular fa-light fa-house fa-beat"></i></NavLink>
            <NavLink className="link" to="/search"><i className="fa-regular fa-light fa-search fa-beat"></i></NavLink>
            <NavLink className="link" to="/cart"><i className="fa-regular fa-light fa-bag-shopping fa-beat"></i></NavLink>
            <NavLink className="link" to="/favorites"><i className="fa-regular fa-light fa-heart fa-beat"></i></NavLink>
            <NavLink className="link" to="/login"><i className="fa- regular fa-light fa-circle-user fa-beat"></i></NavLink>              
        </nav>
      </div>
  )
}

export default Navigation