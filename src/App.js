import React from "react";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import Footer from "./Footer";



function App() {
  return (
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:sku" element={<ProductDetail />} />
  </Routes>

<Footer />

</BrowserRouter>
  )
}
//front-end featuring header logo and title, what the farm has in stock with items populated, and footer indicating trademark

export default App;