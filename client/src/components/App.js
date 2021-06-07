import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Products from "./Products";
import AddProductForm from "./AddProductForm";
import dummyData from "../lib/data";

// Qs for Surgeon General:
//  what is the htmlFor error about?

// display add button when clicking within product
// component that decides whether to render AddProduct button or the Form

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dummyData);
  }, []);

  return (
    <div id="app">
      <header>
        <h1>The Shop!</h1>
        <Cart products={data} />
      </header>
      <main>
        <Products products={data} />
        <AddProductForm />
      </main>
    </div>
  );
};

export default App;
