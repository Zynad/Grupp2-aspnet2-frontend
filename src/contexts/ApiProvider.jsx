import { createContext, useContext, useState } from "react";
export const ApiContext = createContext();

const ApiProvider = (props) => {

// POST REGISTER 
const registrationPost = async (url = '', data = {}, handleRegistration) => {    
 const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type' : 'application/json'},
       body: JSON.stringify(data)
       };
       await fetch(url, requestOptions)
       .then((response) => {
        if(!response.ok){
            throw new Error(response.status);
            handleRegistration("false")
        }
        else {
            handleRegistration("true")
        }
       })
      .catch((error) => {
        handleRegistration("false")
      });        
    };

    // POST LOGIN

    // PUT
    
    // GET ALL

    // GET BY ID

    
    return (
        <>
            <ApiContext.Provider value={{registrationPost}}>
                {props.children}
            </ApiContext.Provider>
        </>
    )
}

export default ApiProvider



 // async function postData (url = '', data = {}) {
    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: { 'Content-Type' : 'application/json' },
    //     body : JSON.stringify(data)
    // });
    // return response.json();
    // };