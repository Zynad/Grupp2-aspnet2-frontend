import { NavLink } from "react-router-dom";
import "./profile.css"
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../contexts/ApiProvider";
import { AddressContext } from "../../../../contexts/AddressProvider";
import EditAddress from "./EditAddress";




const Address = () => {
    const { getAddress } = useContext(ApiContext);
    const { handleEditAdress} = useContext(AddressContext);
    const [address, setAddress] = useState([]);
    const [editAdress, setEditAdress] = useState(false);
   
    useEffect (() => { handleGetAdress()}, []);

    const handleGetAdress = async () => {     
        const response = await getAddress();
        setAddress(response.map((item) => ({...item.address, id: item.id, title: item.title})))
    }

    const updatingAdress = async (address) => {
     await handleEditAdress(address)
    }

 
   
    return (
        <> 
        <div className="container my-5">

        <div className="row">
          <div className="col-4"><NavLink className="nav-standard" to="/profile"><i className="fa-solid fa-angle-left"></i></NavLink></div>
          <div className="col-4 adress-title">My Address</div>
          <div className="col-4"></div>
          </div>


        <div className="row profile-content mb-5">
          <hr className="mb-4 mt-4"/>
          {address.map((item) => (
          <>   

          <div className="col">
          <i class="fa-sharp fa-solid fa-location-dot profile-icon"></i>
          <span className="profile-text">{item.title}</span>
          <div className="profile-addresses-text">{item.streetName}, {item.postalCode}, {item.city}</div>
         </div>

          <div className="col profile-arrow">
          <NavLink className="nav-standard" onClick={() => {updatingAdress(item)}} to='/editaddress' > <i class="fa-thin fa-pen"></i> </NavLink>
          </div>

          <hr className="mb-4 mt-4"/>
          </>    
         ))}  
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