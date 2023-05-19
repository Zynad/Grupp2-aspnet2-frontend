import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiProvider";
export const LoginContext = createContext();

const LoginProvider = (props) => {
  const [loginResult, setLoginResult] = useState("");
  const [validation, setValidation] = useState("");
  const [email, setEmail] = useState("");
  const { loginAsync, getProfile } = useContext(ApiContext);
 
  const handleLogin = (response) => {
    setLoginResult(response);
  }

  const handleValidation = (response) => {
    setValidation(response)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    setEmail(email);
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.value; 

    const data = {email : email, password : password, remember : remember}
    const url = 'https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/account/login?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c'
    await loginAsync(url, data, handleLogin, handleValidation)
   

  };
  
  return (
    <>
      <LoginContext.Provider value={{ handleSubmit, loginResult, email, handleLogin, validation }}>
        {props.children}
      </LoginContext.Provider>
    </>
  );
};

export default LoginProvider;








