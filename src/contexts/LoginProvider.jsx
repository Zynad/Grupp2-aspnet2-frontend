import { createContext, useContext, useState } from "react";
import { ApiContext } from "./ApiProvider";
export const LoginContext = createContext();

const LoginProvider = (props) => {
  const [loginResult, SetLoginResult] = useState("");
  const {postData} = useContext(ApiContext);

  const handleRequest = (response) => {
    SetLoginResult(response);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.value; 

    const data = {email : email, password : password, remember : remember}
    const url = 'https://grupp2-aspnet2-inl-dev.azurewebsites.net/api/account/login?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c'

    // await postData(url, data, handleRequest);
    
  };
  
  return (
    <>
      <LoginContext.Provider value={{ handleSubmit, loginResult }}>
        {props.children}
      </LoginContext.Provider>
    </>
  );
};

export default LoginProvider;








