import { useState, useEffect, createContext } from "react";
export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shipping, setShipping] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);


    const addProductToCart = (product, price, size, color, quantity) => {
    const newProduct = { ...product,  size: size,  color: color, quantity: quantity};
      setShoppingCart([...shoppingCart, newProduct]);
      let i = 0
      while (i < quantity) {
      setTotalPrice(prevTotalPrice => prevTotalPrice + price);
      i++;
      }
      
    console.log(totalPrice)
      
  };

  const removeProductFromCart = (product, price) => {
    const filterProducts = shoppingCart.filter((element) => {
      if (element.id !== product.id) {
        return element;
      }
    });

    setShoppingCart(filterProducts);
    setTotalPrice(totalPrice - price);
  };



  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          addProductToCart,
          shoppingCart,
          totalPrice,
          removeProductFromCart,
        }}
      >
        {props.children}
      </ShoppingCartContext.Provider>
    </>
  );
};

export default ShoppingCartProvider;
