import Announcement from '../components/Announcement'
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import EmailingList from '../components/EmailingList'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <EmailingList/>
      <Footer/>
    </div>
  )
}

export default Home