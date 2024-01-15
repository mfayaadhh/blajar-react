import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import CategoriesContainer from "./CategoriesContainer";

export default function ContentContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  });

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="hero-image">
          <div className="hero-text">
            <h1>This is Hero</h1>
          </div>
        </div>
        <CategoriesContainer />
        <div className="container-products">
          {products.map((product) => {
            return (
              <div key={product.id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}