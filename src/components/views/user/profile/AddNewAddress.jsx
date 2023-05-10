import { useState } from 'react'
import { NavLink } from "react-router-dom"
const AddNewAdress = () => {

  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");

  const handleSumit = async (event) => {

    event.preventDefault();
    
    if(title.length == 0 | adress.length == 0){
       // Skicka uppgifterna till API
    }

 };

return (
<form onSubmit={handleSumit}>
  <div className="container mt-5"> 

  <div className="row">
        <div className="col-4"><NavLink className="nav-standard" to="/Address"><i className="fa-solid fa-angle-left"></i></NavLink></div>
        <div className="col-4 adress-title">Add a new address</div>
        <div className="col-4"></div>
    </div>
      
    <div className="col-lg-12 mt-5 input-wrapper">
    <label htmlFor="title">Title</label>
    <input name="title" value={title} onChange={(event) => setTitle(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#title").innerHTML = "Not a valid title"
       } 
      else 
       {
         document.querySelector("#title").innerHTML = ""
       }}}>
    </input>
    <div id="title" className="text-danger ml-5"></div>
    </div>

    <div className="col-lg-12 mt-3 input-wrapper">
    <label htmlFor="adress">Adress</label>
    <input name="adress" value={adress} onChange={(event) => setAdress(event.target.value)} type="text" onKeyUp={(event) => {
      if (event.target.value.length <= 1) 
       {
         document.querySelector("#adress").innerHTML = "Not a valid adress"
       } 
      else 
       {
         document.querySelector("#adress").innerHTML = ""
       }}}>
    </input>
    <div id="adress" className="text-danger ml-5"></div>
    </div>

    <button className="dark-btn-standard my-5" type="submit">Save Adress</button>

 </div>
</form>
)}

export default AddNewAdress;