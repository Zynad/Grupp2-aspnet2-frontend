import { useState, useEffect, createContext } from "react";
export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [shipping, setShipping] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

//   const ordersCollectionRef = collection(db, "orders");

  const addProductToCart = (product, price) => {
    setShoppingCart([...shoppingCart, product]);
      setTotalPrice(totalPrice + price);
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

//   const handlePostCart = async (
//     cart,
//     firstName,
//     lastName,
//     email,
//     personalNumber
//   ) => {
//     setShipping(
//       "Your order was successfully placed! The ordernumber will be sent to: " +
//         email
//     );

//     const products = cart.map((product) => {
//       return product.title + ", " + product.brand;
//     });

//     const productsId = cart.map((product) => {
//       return product.id;
//     });

   
//   };

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
