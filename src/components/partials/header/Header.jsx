import { NavLink } from "react-router-dom";
import "./header.css"


const Header = ({route, title}) => {

    return (
        <>
          <div className="row">
          <div className="col-4"><NavLink className="nav-standard" to={route}><i className="fa-solid fa-angle-left"></i></NavLink></div>
          <div className="col-4 header-title">{title}</div>  
          <div className="col-4 header-icon-content"><NavLink to="cart" className="nav-standard"><i className="fa-regular fa-bag-shopping"></i></NavLink></div>
          </div>
        </>
    )

}

export default Header;