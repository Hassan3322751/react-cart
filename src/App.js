import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import './Shopping Cart/Cart.css';
import CartApplication from "./Shopping Cart/CartApplication.js"
import Home from "./Shopping Cart/Home.js"
import Cart from "./Shopping Cart/Cart.js"

function App() {
  return (
    <>
      <BrowserRouter>
       <CartApplication />
          <div className='bodyContent'>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;