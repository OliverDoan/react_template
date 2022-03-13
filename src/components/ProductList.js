import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
const ProductList = () => {
  const products = useSelector((state) => state);
  console.log(products);
  return (
    <>
      <div className="ui grid container">
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductList;
