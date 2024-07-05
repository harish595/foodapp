import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Routes} from "react-router-dom"
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Placeholder from './pages/placeorder/Placeholder'
import PageNotFound from './components/pagenotfound/PageNotFound'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/loginpopup/LoginPopUp'
const App = () => {
  const[showLogin , setShowLogin]=useState(false); 
  return (
   <>
   {showLogin === true?<LoginPopUp setShowLogin={setShowLogin}/>:<></> }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeholder/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App
