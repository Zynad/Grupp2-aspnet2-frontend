import React from 'react'
import Navigation from '../../partials/navigation/Navigation'
import Collection from '../../partials/shared/collection/Collection'
import WelcomeBanner from '../../partials/shared/banners/WelcomeBanner'
import SaleBanner from '../../partials/shared/banners/SaleBanner'

const Home = () => {
  return (
      <>
        <WelcomeBanner />
        <Collection title="Best sellers" />
        <SaleBanner /> 
        <Collection title="Featured Products" />
        <Navigation />
    </>
  )
}

export default Home