import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiProvider";
export const RegistrationContext = createContext();

const RegistrationProvider = (props) => {

  const {registrationAsync} = useContext(ApiContext);
  const [registrationResult, setRegistrationResult] = useState("");

  const handleRegistration = (response) => {
    setRegistrationResult(response);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value
    const phone = event.target.elements.phone.value

    const data = {firstName : firstName, lastName : lastName, email : email, password : password, phoneNumber : phone}
    const url = "https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/account/register?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c";

    await registrationAsync(url, data, handleRegistration);
  };

  return (
    <>
      <RegistrationContext.Provider value={{ handleSubmit, registrationResult }}>
        {props.children}
      </RegistrationContext.Provider>
    </>
  );
};

export default RegistrationProvider;
