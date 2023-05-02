import { createContext, useState, useEffect } from "react";
export const LoginContext = createContext();

const LoginProvider = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
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