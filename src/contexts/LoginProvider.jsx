import { createContext, useContext, useState, useEffect } from "react";
export const LoginContext = createContext();

const LoginProvider = (props) => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.value;
    
    const data = {email : email, password : password, remember : remember}
    const url = ''


  };


  return (
    <>
      <LoginContext.Provider value={{ handleSubmit }}>
        {props.children}
      </LoginContext.Provider>
    </>
  );
};

export default LoginProvider;










  // async function postData (url = '', data = {}) {
  //   const response = await fetch(url, {
  //       method: 'POST',
  //       headers: { 'Content-Type' : 'application/json' },
  //       body : JSON.stringify(data)
  //   });
  //   return response.json();
  //   };