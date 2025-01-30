import React from 'react'
import Header from '../../components/Hedaer/Header'
import Hero from '../../components/Hero/Hero'
import SideBar from '../../components/SideBar/SideBar'
import About from '../../components/About/About'
import Pagination from '../../components/Pagination/Pagination'
import BlogPosts from '../../components/BlogPosts/BlogPosts'
import Footer from '../../components/Footer/Footer'

const PublicPage = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <SideBar/>
    <Pagination/>
    <About/>
    <BlogPosts/>
    <Footer/>
    </>
  )
}

export default PublicPage 