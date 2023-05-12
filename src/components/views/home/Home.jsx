import React, { useContext } from 'react'
import Navigation from '../../partials/navigation/Navigation'
import Collection from '../../partials/shared/collection/Collection'
import WelcomeBanner from '../../partials/shared/banners/WelcomeBanner'
import SaleBanner from '../../partials/shared/banners/SaleBanner'
import { ApiContext } from '../../../contexts/ApiProvider'
import { useState, useEffect } from 'react'

const Home = () => {
  const { getAllProductsAsync } = useContext(ApiContext);
  const [bestSellerList, setBestSellerList] = useState([]);
  const [featuredList, setFeaturedList] = useState([]);
  const [loadState, setLoadState] = useState(false);


  

   const setHomeProducts = async () => {
        let data = await getAllProductsAsync();
        let bestSeller = data.filter(item => item.name == "shorts");
        let featured = data.filter(item => item.salesCategory == "new");
        setBestSellerList(data)  
        setFeaturedList(data)
        setLoadState(true);
        console.log(data);
        // console.log(bestSellerList[0]);
        // console.log(bestSeller[0]);
     
    }

  useEffect(() => {
    setHomeProducts()
  }, []);


  

  if (loadState) {
  return (
    <>
        <WelcomeBanner />
        <Collection title="Best sellers" itemList={bestSellerList} />
        <SaleBanner /> 
        <Collection title="Featured Products" itemList={featuredList} />
        <Navigation />
    </>
  )
}
  
}

export default Home