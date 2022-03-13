import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
const Layout = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<ProductList />} />

          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>

        {/* <Footer />
        <ProductViewModal /> */}
      </Router>
    </>
  );
};

export default Layout;
