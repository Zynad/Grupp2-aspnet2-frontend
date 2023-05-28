import { NavLink, useLocation } from "react-router-dom";
import "./profile.css"
import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../contexts/ApiProvider";
import { AddressContext } from "../../../../contexts/AddressProvider";
import EditAddress from "./EditAddress";


const Address = () => {
    const { getAddress, removeAddress } = useContext(ApiContext);
    const { handleEditAdress, handleChosenAddress } = useContext(AddressContext);
    const [address, setAddress] = useState([]);
    const [deleteResult, setDeleteResult] = useState(1);
    const [navigationSource, setNavigationSource] = useState('');
    const location = useLocation();
  
    useEffect(() => {
      setNavigationSource(getNavigationSource());
    }, []);

    const getNavigationSource = () => {
           return location.pathname;
    };
   
    useEffect (() => { handleGetAdress()}, [deleteResult]);

    const handleGetAdress = async () => {     
        const response = await getAddress();
        setAddress(response.map((item) => ({...item.address, id: item.id, title: item.title})))
    }
    
    const declareAddress = (id) => {
        const filteredAddress = address.filter((address) => address.id === id);
        const chosenAddress = filteredAddress.length > 0 ? filteredAddress[0] : null;
        handleChosenAddress(chosenAddress);
    }

    const updatingAddress = async (address) => {
     await handleEditAdress(address)
    }

    const deleteAddress = async (id) => {
      if(await removeAddress (id)){
        setDeleteResult(deleteResult + deleteResult + 1)
      }
    }

  
  
    const renderContent = () => {
    switch (navigationSource) {
      case '/address':
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
          <i class="fa-sharp fa-solid fa-location-dot address-icon"></i>
          <span className="profile-text">{item.title}</span>
          <div className="profile-addresses-text">{item.streetName}, {item.postalCode}, {item.city}</div>
         </div>

          <div className="col profile-arrow">
          <i id="delete-icon" className="fa-sharp fa-regular fa-xmark" onClick={() => {deleteAddress(item.id)}}></i>
          <NavLink className="nav-standard" onClick={() => {updatingAddress(item)}} to='/editaddress' > <i className="fa-thin fa-pen"></i> </NavLink>
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
        );
      case '/checkout':
        return (
        <> 
        <div className="container my-5">

        <div className="row">
          <div className="col-4"><NavLink className="nav-standard" to="/checkout"><i className="fa-solid fa-angle-left"></i></NavLink></div>
          <div className="col-4 adress-title">Shipping Details</div>
          <div className="col-4"></div>
          </div>


        <div className="row profile-content mb-5">
          <hr className="mb-4 mt-4" />
          {address.map((item) => (
          <>   

          <div className="col">
          <i class="fa-sharp fa-solid fa-location-dot address-icon"></i>
          <span className="profile-text">{item.title}</span>
          <div className="profile-addresses-text">{item.streetName}, {item.postalCode}, {item.city}</div>
         </div>

          <div className="col profile-arrow">
          <i className="fa-sharp fa-regular fa-circle" onClick={() => {declareAddress(item.id)}}></i>
          </div>

          <hr className="mb-4 mt-4"/>
          </>    
         ))}  
        </div>
      
       

        </div>
        </>
  );
      default:
        return <div>Default content</div>;
    }
  };
 
    return <div>{renderContent()}</div>;


}

export default Address;