import React from 'react'
import HeroSection from '../components/HomePage/HeroSection'
import GroceryCategory from '../components/HomePage/GroceryCategory'
import InStockProd from '../components/HomePage/InStockProd'
import BestSellers from '../components/HomePage/BestSellers'
import NewsProd from '../components/HomePage/NewsProd'
import Footer from '../components/HomePage/Footer'
import NewProdSec from '../components/HomePage/NewProdSec'


function Home() {
    return (
        <>
            <HeroSection />
            <GroceryCategory />
            <NewProdSec/>
            <InStockProd />
            <BestSellers />
            <NewsProd />
            <Footer />
        </>
    )
}

export default Home