import { createContext, useState } from "react";
export const WishlistContext = createContext();

const WishlistProvider = (props) => {

const [wishlist, setWishlist] = useState([]);

const handleWishlist = async (product) => {

    const filterWishList = wishlist.filter((item) => {
        if(item.id == product.id){
            return item;
        }
    })

    if (filterWishList.length < 1){
        await setWishlist([...wishlist, product]);
    }   
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