import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const api = `https://dummyjson.com/products`;
    fetch(api)
      .then((res) => res.json())
      .then((data) => setproduct(data.products));
  }, []);

  return (
    <div>
      <ProductList product={product} />
    </div>
  );
};

export default App;
