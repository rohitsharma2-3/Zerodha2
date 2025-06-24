import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './landing-page/Home/HomePage';
import SignUp from './landing-page/SignUp/SignUp';
import About from './landing-page/About/AboutPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './landing-page/Navbar';
import Footer from './landing-page/Footer';
import Products from './landing-page/Products/Products';
import Pricing from './landing-page/Pricing/PricePage';
import Support from './landing-page/Support/SupportPage';
import NotFound from './landing-page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/products' element={<Products />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/support' element={<Support />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
