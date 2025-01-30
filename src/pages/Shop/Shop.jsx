import React from 'react'
import Header from '../../components/Hedaer/Header'
import Footer from '../../components/Footer/Footer'
import Shoping from '../../components/Shop/Shop'
import ProductDescription from '../../components/Desc/Desc'
import Releted from '../../components/Releted/Releted'

const Shop = () => {
  return (
    <>
    <Header/>
    <Shoping/>
    <ProductDescription/>
    <Releted/>
    <Footer/>
    </>
  )
}

export default Shop