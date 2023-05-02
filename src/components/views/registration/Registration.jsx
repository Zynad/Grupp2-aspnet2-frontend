import "../registration/registration.css"
import { NavLink } from 'react-router-dom'
import { useContext, useState } from "react";
import { RegistrationContext } from "../../../contexts/RegistrationProvider";

const Registration = () => {
  const {handleSubmit} = useContext(RegistrationContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (

    <div class="container mt-5">

          <div class="row">
          <div class="col-4"><NavLink to="/"><i className="fa-solid fa-angle-left nav-standard"></i></NavLink></div>
          <div style={{textAlign : 'center'}} class="col-4">Sign Up</div>
          <div class="col-4"></div>
          </div>

         <div class="top-registration mt-5">
         <span class="line-login"></span>
         <h1 class="heading-standard mt-3">Sign Up</h1>
         </div>

    <form onSubmit={handleSubmit}>
      <div class="row">
      
      <div class="col-lg-6 mt-3 input-wrapper">
      <label for="firstName">Firstname</label>
      <input name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"></input>
      </div>
      
      <div class="col-lg-6 mt-3 input-wrapper">
      <label for="lastName">Lastname</label>
      <input name="lastName" value={lastName} onChange={(e) => setLastname(e.target.value)} type="text"></input>
      </div>
      
      <div class="col-lg-6 mt-3 input-wrapper">
      <label for="email">Email</label>
      <input name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} type="text"></input>
      </div>

      <div class="col-lg-6 mt-3 input-wrapper">
      <label for="phone">Phone</label>
      <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="text"></input>
      </div>
      
      <div class="col-lg-6 mt-3 input-wrapper">
      <label for="password">Password</label>
      <input name="password" value={password} onChange={(e) => setPassword(e.target.value)} type="password"></input>
      </div>
      
      <div class="col-lg-6 mt-3 input-wrapper">
      <label for="confirmPassword">Confirm Password</label>
      <input name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password"></input>
      </div>
      
      <div class="col-lg-12 mt-5">
      <button class="dark-btn-standard" type="submit">SIGN UP</button>
      </div>

      </div>
      </form>  

       <div class="row">
      <div class="mt-3 box-registration col-lg-12">Already have an account? <NavLink to="/" className="nav-standard">Sign In.</NavLink></div>
      <div class="mt-5 box-registration col-lg-12">

      <i class="fa-brands fa-facebook icon-standard" style={{color: '#00235B'}}></i>
      <i class="fa-brands fa-google-plus-g icon-standard" style={{color: '#FF6969'}}></i>
      <i class="fa-brands fa-twitter icon-standard" style={{color: '#6DA9E4'}}></i>
      </div>
      </div>

    </div>
  );
};

export default Registration;
