import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./Products"; // استيراد الزر

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  if (!products) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="text-center border p-4 rounded-lg shadow-lg">
          <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto" />
          <h2 className="text-2xl font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-2">${product.price}</p>
        </div>
      ))}
    </div>
  );

}

export default Products;
