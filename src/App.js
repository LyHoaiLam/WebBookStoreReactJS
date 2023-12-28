import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import React from 'react';
import '.././src/components/reset.css';
// import Product from './components/Products/Product/Product';
import Products from './components/Products/Product.tsx';
import ProducTrend from './components/ProductTrend/ProductTrend'






function App() {
  return (
    <div>
      <Navbar />
      <ProducTrend />
    

     
      <Products />
      <Footer />

      
    </div>
  );
}

export default App;
