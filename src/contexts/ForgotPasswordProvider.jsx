import { createContext, useState } from "react";
export const ForgotPasswordContext = createContext();

const ForgotPasswordProvider = (props) => {

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = event.target.elements.email.value;
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