import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from './Pages/Help';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Men from './Pages/Men'
import Women from './Pages/Women'
import EyeLens from './Pages/EyeLens'
import SunGlass from './Pages/SunGlass'
import ContactLens from './Pages/ContactLens'
import Kids from './Pages/Kids';
import Home from './Pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className='h-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/help' element={<Help />} />
            <Route path='/login' element={<Login />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/men' element={<Men />} />
            <Route path='/women' element={<Women />} />
            <Route path='/kids' element={<Kids />} />
            <Route path='/eyelens' element={<EyeLens />} />
            <Route path='/sunglass' element={<SunGlass />} />
            <Route path='/contactlens' element={<ContactLens />} />
            <Route />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App