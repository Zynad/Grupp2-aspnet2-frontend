import "./profile.css"
import Navigation from "../../../partials/navigation/Navigation";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { LoginContext } from "../../../../contexts/LoginProvider";


const Profile = () => {

    const {email, handleLogin, loginResult} = useContext(LoginContext);

    if (loginResult == "false"){
        return <Navigate to="/login"/>
    }

    return (
        <>
        <div className="container">

        <div className="mt-5 upper-profile-content">
         <span className="line-login"></span>
         <h2 className="heading-standard mt-3">namn</h2>
         <div className="standard-text">{email}</div>
         </div>

         <div className="row profile-content">
         <hr className="mt-5"/>       
            <div className="col">
            <i class="fa-sharp fa-regular fa-bag-shopping profile-icon"></i>
            <span className="profile-text">Order history</span>
            </div>
            <div className="col profile-arrow">
            <i class="fa-light fa-chevron-right"></i>
            </div>
        <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">          
         <div className="col">
            <i class="fa-light fa-credit-card-blank profile-icon"></i>
            <span className="profile-text">Payment method</span>
            </div>
            <div className="col profile-arrow">
            <i class="fa-light fa-chevron-right"></i>
            </div>
         <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">                   
         <div className="col">
         <i class="fa-regular fa-location-dot profile-icon"></i>
            <span className="profile-text">My adress</span>
            </div>
            <div className="col profile-arrow">
            <i class="fa-light fa-chevron-right"></i>
            </div>
         <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">         
         <div className="col">
            <i class="fa-light fa-gift profile-icon"></i>
            <span className="profile-text">My promocodes</span>
            </div>
            <div className="col profile-arrow">
            <i class="fa-light fa-chevron-right"></i>
            </div> 
         <hr className="mb-4 mt-4"/>
         </div>

         <div className="row profile-content">                      
         <div className="col log-out" onClick={(event) => {handleLogin("false")}}>
         <i class="fa-regular fa-right-from-bracket profile-icon"></i>
            <span className="profile-text">Sign out</span>
            </div>       
         <hr className="mt-4 mb-4"/>
         </div>
        </div>
            
        <Navigation />
        </>
    )

}

export default Profile;