import { createContext, useContext } from 'react';
import { ApiContext } from "../contexts/ApiProvider"
export const ForgotPasswordContext = createContext();

const ForgotPasswordProvider = (props) => {

    const {postData} = useContext(ApiContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = "xd";
        const data = {email : event.target.elements.email.value}
        const response = await postData(url, data)
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