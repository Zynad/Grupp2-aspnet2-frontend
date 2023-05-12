import { NavLink } from "react-router-dom";
import "./profile.css"


const Address = () => {

    return (
        <> 
        <div className="container my-5">

        <div className="row">
          <div className="col-4"><NavLink className="nav-standard" to="/profile"><i className="fa-solid fa-angle-left"></i></NavLink></div>
          <div className="col-4 adress-title">My Address</div>
          <div className="col-4"></div>
          </div>

          <div className="row profile-content">
         <hr className="mt-5"/>       
            <div className="col">
            <i class="fa-sharp fa-solid fa-location-dot profile-icon"></i>
            <span className="profile-text">Bla Bla</span>
            </div>
            <div className="col profile-arrow">
            <i class="fa-thin fa-pen"></i>
            </div>
        <hr className="mb-4 mt-4"/>
         </div>


         <div my-5 className="new-adress">
         <NavLink to="/addadress" className="nav-standard"><i class="fa-duotone fa-plus fa-xl"></i></NavLink>
         <div>Add a new adress</div>
         </div>

        </div>
        </>
    )

}

export default Address;