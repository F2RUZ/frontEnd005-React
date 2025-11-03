import React from "react";
import ProductsItem from "./ProductsItem";
import Loader from "./Loader";

const ProductList = ({ product }) => {
  console.log(product);

  return (
    <div>
      <h1>ProductList</h1>

      <div className="d-flex flex-wrap container">
        {product.length > 0 ? (
          product.map((item, index) => <ProductsItem key={index} {...item} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ProductList;
