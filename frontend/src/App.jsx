import React from 'react'
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from './components/Footer/Footer';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/contact' element={<Contact/>} />

        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  )
}

export default App
