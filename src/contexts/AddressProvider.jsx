import { createContext, useState } from "react";
export const AddressContext = createContext();

const AddressProvider = (props) => {

    const [editAdress, setEditAdress] = useState({});

    const handleEditAdress = async (adress) => {
         await setEditAdress(adress);
    }

    return (
        <>
            <AddressContext.Provider value={{ handleEditAdress, editAdress }}>
                {props.children}
            </AddressContext.Provider>
        </>
    )

}

export default AddressProvider;