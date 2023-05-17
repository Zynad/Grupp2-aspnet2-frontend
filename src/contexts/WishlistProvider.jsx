import { createContext, useState } from "react";
export const WishlistContext = createContext();

const WishlistProvider = (props) => {

const [wishlist, setWishlist] = useState([]);

const handleWishlist = async (product) => {
    await setWishlist([...wishlist, product]);
}

const deleteWishlist = async (id) => {

    const filterWishlist = wishlist.filter((item) => {
        if(item.id !== id){
            return item;
        }
    });

    setWishlist(filterWishlist)

} 

    return (
        <>
        <WishlistContext.Provider value = { { handleWishlist, wishlist, deleteWishlist } }>
         {props.children}
        </WishlistContext.Provider>
        </>
    )
}

export default WishlistProvider;