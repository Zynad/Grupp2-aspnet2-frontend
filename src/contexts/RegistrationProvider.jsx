import { createContext, useState, useEffect } from "react";
export const RegistrationContext = createContext();

const RegistrationProvider = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value
    const confirmPassword = event.target.elements.confirmPassword.value
  };

  return (
    <>
      <RegistrationContext.Provider value={{ handleSubmit }}>
        {props.children}
      </RegistrationContext.Provider>
    </>
  );
};

export default RegistrationProvider;
