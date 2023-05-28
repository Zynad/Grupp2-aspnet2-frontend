import React, { useContext } from 'react'
import Navigation from '../../partials/navigation/Navigation'
import Collection from '../../partials/shared/collection/Collection'
import WelcomeBanner from '../../partials/shared/banners/WelcomeBanner'
import SaleBanner from '../../partials/shared/banners/SaleBanner'
import { ApiContext } from '../../../contexts/ApiProvider'
import { useState, useEffect } from 'react'
import DetailedItem from '../../partials/shared/detailedItem/DetailedItem'
import ColorSelector from '../../partials/shared/colorSelector/ColorSelector'
import TopHeader from '../../partials/shared/topHeader/TopHeader'

const Home = () => {
  const { getAllProductsAsync } = useContext(ApiContext);
  const [bestSellerList, setBestSellerList] = useState([]);
  const [featuredList, setFeaturedList] = useState([]);
  const [loadState, setLoadState] = useState(false);

   const setHomeProducts = async () => {
        let data = await getAllProductsAsync();
        let bestSeller = data.filter(item => item.salesCategory === "Top");
        let featured = data.filter(item => item.salesCategory === "Featured");
        setBestSellerList(bestSeller)  
        setFeaturedList(featured)
        setLoadState(true);
        // console.log(data);
    }

  useEffect(() => {
    setHomeProducts()
  }, []);



  

  if (loadState) {
  return (
    <div className='home-container'>
        <TopHeader />
        <WelcomeBanner />
        <Collection title="Best sellers" itemList={bestSellerList} />
        <SaleBanner /> 
        <Collection title="Featured Products" itemList={featuredList} />
        <Navigation />
    </div>
  )
}
  
}

export default Home