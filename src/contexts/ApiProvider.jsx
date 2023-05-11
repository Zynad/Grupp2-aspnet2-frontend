import { createContext, useContext, useState } from "react";
import jwt from 'jwt-decode'
import Cookies from 'js-cookie'


export const ApiContext = createContext();

const ApiProvider = (props) => {

   

// GET ALL
const getAllProductsAsync = async () => {
    const response = await fetch('https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Products/All?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c');
      if (response.ok) {
        const result = await response.json();
          console.log('Request success');
          console.log(result);
          
        return result;
    }
    else {
        return false;
    }
    
}

// GET BY ID
const getProductByIdAsync = async (id = "") => {
    const response = await fetch(`https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/Products/Get?${id}?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c`);
    const data = await response.json();
    return data;
}

// Registration
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

    
    return (
        <>
            <ApiContext.Provider value={{getAllProductsAsync, getProductByIdAsync, registrationAsync, loginAsync}}>
                {props.children}
            </ApiContext.Provider>
        </>
    )
}

export default ApiProvider


