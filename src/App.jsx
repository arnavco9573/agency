import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Newslettter from './components/Newslettter'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Services/>
      <About/>
      <Products/>
      <Blog/>
      <Newslettter/>
      <MyFooter/>
    </>
  )
}

export default App
