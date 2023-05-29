import { useState, useEffect, createContext } from "react";
export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shipping, setShipping] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);


    const addProductToCart = (product, price, size, color, quantity) => {
    const newProduct = { ...product,  size: size,  color: color, quantity: quantity};
      setShoppingCart([...shoppingCart, newProduct]);
      let i = 0
      while (i < quantity) {
      setTotalPrice(prevTotalPrice => prevTotalPrice + price);
      i++;
      setTotalItems(prevTotalItems => prevTotalItems + 1);
      }
      console.log(totalItems)
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

  const updateCart = (product, price, change) => {
     setShoppingCart(prevData => {
      const updatedData = prevData.map(item => {
        if (item.id === product.id) {
          if (change === "-") {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return { ...item, quantity: item.quantity + 1 };
          }
        }
        return item;
      });
       return updatedData;
     });

   
  };

  const updatePrice = () => { 
    setTotalPrice(shoppingCart.map(item => {
      return item.price * item.quantity
    }))
  }
  




  return (
    <>
      <ShoppingCartContext.Provider
        value={{
          addProductToCart,
          shoppingCart,
          totalPrice,
          removeProductFromCart,
          totalItems,
          updateCart,
          updatePrice
        }}
      >
        {props.children}
      </ShoppingCartContext.Provider>
    </>
  );
};

export default ShoppingCartProvider;
