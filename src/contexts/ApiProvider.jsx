import { createContext, useState } from "react";
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'
export const ApiContext = createContext();

const ApiProvider = (props) => {
    
// GET ALL PRODUCTS
const getAllProductsAsync = async () => {
    const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Products/All?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c');
    const data = await response.json();
    return data;
}

// GET PRODUCT BY ID
const getProductByIdAsync = async (id = "") => {
    const response = await fetch(`https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Products/Get?${id}?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c`);
    const data = await response.json();
    return data;
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
const loginAsync = async (url = '', data = {}, handleLogin) => { 
    const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type' : 'application/json'},
         body: JSON.stringify(data)
         };
         await fetch(url, requestOptions)
         .then ((response => {
            if (!response.ok){
                handleLogin("false")
                throw new Error(response.status);   
            }
            else {
                const res = response.text()
                .then (data => {   
                    const token = data;                  
                    Cookies.set('token', token)
                    handleLogin("true");
                    // const decode = jwt(token);
                    // const getToken = Cookies.get('token');                                        
                 })}}))
          .catch(() => {
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


    return (
        <>
            <ApiContext.Provider value={{ getAllProductsAsync, getProductByIdAsync, registrationAsync, loginAsync, logoutAsync, getProfile, recoverPassword }}>
                {props.children}
            </ApiContext.Provider>
        </>
    )
}

export default ApiProvider


