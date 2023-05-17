import React from 'react'
import { createContext, useState } from "react";
export const ProductContext = createContext();


const ProductProvider = (props) => {
  const [item, setItem] = useState({});

    const designateDetailedItem = async (item) => {
         await setItem(item);
    }

    return (
        <>
            <ProductContext.Provider value={{ designateDetailedItem, item }}>
                {props.children}
            </ProductContext.Provider>
        </>
    )
}

export default ProductProvider