import { createContext, useContext } from 'react';
import { ApiContext } from "./ApiProvider"
export const ForgotPasswordContext = createContext();

const ForgotPasswordProvider = (props) => {

    const {} = useContext(ApiContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "";
        const data = {email : event.target.elements.email.value}
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