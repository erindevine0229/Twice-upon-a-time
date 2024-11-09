import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/floral' element={<Categories category='floral'/>}/>
        <Route path='/furniture' element={<Categories category='furniture'/>}/>
        <Route path='/table' element={<Categories category='table'/>}/>
        <Route path='/fabrics' element={<Categories category='fabrics'/>}/>
        <Route path='/signs' element={<Categories category='signs'/>}/>
        <Route path='/misc' element={<Categories category='misc'/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element = {<Product/>}/>
        </Route> 
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App