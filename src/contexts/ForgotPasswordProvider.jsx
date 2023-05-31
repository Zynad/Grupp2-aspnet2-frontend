import { createContext, useContext } from 'react';
import { ApiContext } from "./ApiProvider"
export const ForgotPasswordContext = createContext();

const ForgotPasswordProvider = (props) => {

    const {forgotPassword} = useContext(ApiContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "https://grupp2-aspnet2-inl-master.azurewebsites.net/api/account/resetpassword?key=75e76fd2-f98d-42b5-96ab-9a0d2c20cf6c";
        const email = event.target.elements.email.value
        var bool = await forgotPassword(url, email)
        return bool;
    }

    return (
        <>
            <ForgotPasswordContext.Provider value={{handleSubmit}}>
                {props.children}
            </ForgotPasswordContext.Provider>
        </>
    )
}

export default ForgotPasswordProvider;