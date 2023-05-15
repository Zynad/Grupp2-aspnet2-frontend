import {NavLink} from 'react-router-dom'
import {useState} from 'react';
import ProfilePicture from './ProfilePicture';

const EditProfile = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [validation, setValidation] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      if (firstName.length < 2 || lastName.length < 2 || email.length < 2 || phone.length < 2)
      {
        setValidation("Saving profile faild. Try again!") 
        return;
      }
      setValidation("");
      const profile = {firstName : firstName, lastName : lastName, email : email, phone : phone}
    }

  return (
    
<div className="container my-5">
  <div className="row">

  <div className="col-4"><NavLink className="nav-standard" to="/profile"><i className="fa-solid fa-angle-left"></i></NavLink></div>
  <div className="col-4 adress-title">Edit Profile</div>

  <div className="container profile-section mt-5">
     <ProfilePicture/>   
  </div>

<form onSubmit={handleSubmit}>

  <div className="col-lg-12 mt-5 input-wrapper">
    <label htmlFor="title">Firstname</label>
    <input name="title" value={firstName} onChange={(event) => setFirstName(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#firstName").innerHTML = "Not a valid title"
       } 
      else 
       {
         document.querySelector("#firstName").innerHTML = ""
       }}}>
    </input>
    <div id="firstName" className="text-danger ml-5"></div>
 </div>

 <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="lastName">Lastname</label>
    <input name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#lastName").innerHTML = "Not a valid lastname"
       } 
      else 
       {
         document.querySelector("#lastName").innerHTML = ""
       }}}>
    </input>
    <div id="lastName" className="text-danger ml-5"></div>
 </div>

 <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="email">Email</label>
    <input name="email" value={email} onChange={(event) => setEmail(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#email").innerHTML = "Not a valid email"
       } 
      else 
       {
         document.querySelector("#email").innerHTML = ""
       }}}>
    </input>
    <div id="email" className="text-danger ml-5"></div>
 </div>

 <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="phone">Phone number</label>
    <input name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#phone").innerHTML = "Not a valid phone number"
       } 
      else 
       {
         document.querySelector("#phone").innerHTML = ""
       }}}>
    </input>
    <div id="phone" className="text-danger ml-5"></div>
 </div>

 <div className="validation text-danger mt-3">{validation}</div>

 <button className="dark-btn-standard my-5" type="submit">Save Changes</button>

 </form>



</div>
</div>
        
)}


export default EditProfile;