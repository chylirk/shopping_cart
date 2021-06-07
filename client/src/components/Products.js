import React from "react";
import Product from "./Product";

const Products = (props) => {
  return (
    <div className="product-listing">
      <h2>Products</h2>
      {props.products.map((product) => {
        return (
          // separate Product component
          //   show product only, or product w/ form (logic, onClick, buttonDisplayState)
          <Product key={product.id} product={product} />
        );
      })}
    </div>
  );
};

export default Products;
