import { createContext, useState } from "react";
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'
export const ApiContext = createContext();

const ApiProvider = (props) => {
    
// GET ALL PRODUCTS
const getAllProductsAsync = async () => {
    const response = await fetch('https://grupp2-aspnet2-inl-master.azurewebsites.net/api/Products/All?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c');
    const data = await response.json();
    return data;
}

// GET PRODUCT BY ID
const getProductByIdAsync = async (id = "") => {
    const response = await fetch(`https://grupp2-aspnet2-inl-master.azurewebsites.net/api/Products/Get?${id}&key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c`);
    const data = await response.json();
    return data;
}

// Get Products by category 
const getProductsByCategory = async (category) => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type' : 'application/json' }
        };

    const response = await fetch (`https://grupp2-aspnet2-inl-master.azurewebsites.net/api/Products/SalesCategory?salescategory=${category}&key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c`, requestOptions)
    const data = await response.json();
    return data;
}

// Get Products by filter
const getProductsByFilters = async (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
        };
    const response = await fetch('https://grupp2-aspnet2-inl-master.azurewebsites.net/api/Products/Filter?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    return await response.json();
}

// PUT
const putAsync = async (url = '', data = {}, handlePut) => { 
    const requestOptions = {
         method: 'PUT',
         headers: { 'Content-Type' : 'application/json'},
         body: JSON.stringify(data)
         };
         await fetch(url, requestOptions)
         .then((response) => {
         if(!response.ok){
              handlePut("false")
              throw new Error(response.status);
           }
         else {
             handlePut("true")
          }
          })
         .catch(() => {
           handlePut("false")
         });    
    };

// REGISTRATION
const registrationAsync = async (url = '', data = {}, handleRegistration) => {    
 const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type' : 'application/json'},
       body: JSON.stringify(data)
       };
       await fetch(url, requestOptions)
       .then((response) => {
        if(!response.ok){
            handleRegistration("false")
            throw new Error(response.status);
        }
        else {
            handleRegistration("true")
        }
       })
      .catch(() => {
        handleRegistration("false")
      });        
    };


// LOGIN
const loginAsync = async (url = '', data = {}, handleLogin, validation) => { 
    const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type' : 'application/json'},
         body: JSON.stringify(data)
         };
         await fetch(url, requestOptions)
         .then ((response => {
            if (!response.ok){
                validation("The username or password is incorrect")
                handleLogin("false") 
            }
            else {
                const res = response.text()
                .then (data => {   
                    validation("");
                    handleLogin("true");
                    const token = data;                  
                    Cookies.set('token', token)
                    // const decode = jwt(token);
                    // const getToken = Cookies.get('token');                                        
                 })}}))
          .catch(() => {
                 validation("The username or password is incorrect")
                 handleLogin("false")
            })     
        };


    // LOG OUT
    const logoutAsync = async () => {
        const token = Cookies.get('token');
        const requestOptions = {
            method: 'POST',
            headers: { 'Authorization' : `Bearer ${ token }` }
            };
            const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Account/Logout?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
            if(response.statusText == "OK") { return true } else { return false }
    };


    // Login Facebook
    const loginFacebook = async (url = '', data = {}, handleLogin, validation) => {
        //const token = Cookies.get('token');
        const requestOptions = {
            method: 'POST',
            headers: { /*'Authorization': `Bearer ${token}`, */'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        await fetch(url, requestOptions)
            .then((response => {
                if (!response.ok) {
                    validation("The username or password is incorrect")
                    handleLogin("false")
                }
                else {
                    const res = response.text()
                        .then(data => {
                            validation("");
                            handleLogin("true");
                            const token = data;
                            Cookies.set('token', token)
                            // const decode = jwt(token);
                            // const getToken = Cookies.get('token');                                        
                        })
                }
            }))
            .catch(() => {
                validation("The username or password is incorrect")
                handleLogin("false")
            })   
    }


    // GET PROFILE
  const getProfile = async () => {
       const token = Cookies.get('token');
       const requestOptions = {
          method: 'GET',
          headers: { 'Authorization' : `Bearer ${ token }` }
          };
        const response = await fetch ('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/account/getprofile?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions);
        const data = await response.json();
        return data;
}

// Recover Password
const recoverPassword = async (password = {}) => {
    const token = Cookies.get('token');
    const requestOptions = {
        method: 'POST',
        headers: { 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(password)
        };
    const response = await fetch ('https://grupp2-aspnet2-inl-alex-test.azurewebsites.net/api/account/recoverpassword?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    if(response.statusText == "OK") { return true } else { return false }
}

// Get Adress
const getAddress = async () => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Address/GetUserAddresses?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions);
    const data = await response.json();
    return data;
}

// Register Address
const registerAddress = async (adress = {}) => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(adress)
    }
    const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Address/RegisterAddress?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    if (response.ok){ return true }
    return false;
}

// Delete Address
const removeAddress = async (id) => {
    const token = Cookies.get('token');
    console.log(token)
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch(`https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Address/RemoveAddress/${id}?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c`, requestOptions)
    if(response.ok){
        return true;
    }
}

// Update Address 
const updateAddress = async (address) => {
    const token = Cookies.get('token');
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(address)
    }

    const response = await fetch ('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Address/UpdateAddress?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    if(response.ok)
        return true
}

// ADD CREDIT CARD

const registerCreditCard = async (creditCard = {})=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(creditCard)
    }
    const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Payment/RegisterCreditCard?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    if (response.ok){ return true }
    return false;
}

// GET ALL CREDIT CARDS
const getUserCreditCards = async ()=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'GET',
        headers: { 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Payment/GetUserCreditCards?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions);
    const data = await response.json();
    return data;
}

//REMOVE CREDIT CARD
const removeCreditCard = async (id)=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` }
    }
    const response = await fetch(`https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Payment/RemoveCreditCard/${id}?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c`, requestOptions);
    if(response.ok){
        return true;
    }
}


//CREATE A NEW ORDER
const createOrderAsync = async (order= {}) => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(order)
    }
    const response = await fetch('https://grupp2-aspnet2-inl-tobbe-test.azurewebsites.net/api/Order/CreateOrder?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    if (response.ok){ return true }
    return false;
    }
    

//GET REVIEWS BY ID    
const getReviewsByIdAsync = async (id = "") => {
    const response = await fetch(`https://grupp2-aspnet2-inl-master.azurewebsites.net/api/Review/GetByProductId?productId=${id}&key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c`);
    const data = await response.json();
    return data;
    console.log(data)
    }

// ADD REVIEW    
const addReviewAsync = async (review = {}) => {
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json', 'Authorization' : `Bearer ${ token }` },
        body: JSON.stringify(review)
    }
    const response = await fetch('https://grupp2-aspnet2-inl-master.azurewebsites.net/api/Review/AddReview?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    if (response.ok){ return true }
    return false;
    }

 
//VERIFY PHONE NUMBER
const verifyPhoneNumber = async (phone = {})=>{
    const token = Cookies.get('token')
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${ token }`},
        body: JSON.stringify(phone)
    }

    const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/account/ConfirmPhone?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c', requestOptions)
    const data = await response.json();
    return data;
}



    return (
        <>
            <ApiContext.Provider value={{ getAllProductsAsync, getProductByIdAsync, registrationAsync, loginAsync, logoutAsync, getProfile, recoverPassword, getAddress, registerAddress, removeAddress, updateAddress, loginFacebook, registerCreditCard, getUserCreditCards, removeCreditCard, getProductsByCategory, getProductsByFilters, verifyPhoneNumber, createOrderAsync, getReviewsByIdAsync, addReviewAsync }}>
                {props.children}
            </ApiContext.Provider>
        </>
    )
}



export default ApiProvider


