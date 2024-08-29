"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import

const ProductDetails = ({ params }) => {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const totalPosts = 20; // Replace this with the total number of products if known

  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const productJson = await fetch(`https://fakestoreapi.com/products/${id}`);
      const product = await productJson.json();
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleNavigation = (newId) => {
    if (newId > 0 && newId <= totalPosts) {
      router.push(`/product/${newId}`);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', border: '1px solid black',textAlign:"center" ,width:"50%",margin:"auto" }}>
      <img
        src={product.image}
        alt={product.title}
        style={{width:"200px", height: '200px' }}
      />
      <hr/>
      <h1>{product.title}</h1>
      
      <p>{product.description}</p>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => handleNavigation(Number(id) - 1)}
          disabled={Number(id) <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => handleNavigation(Number(id) + 1)}
          disabled={Number(id) >= totalPosts}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;


{/* <div style={{ padding: '20px', border: '1px solid black',textAlign:"center" ,width:"50%",margin:"auto"}}>
      
<img src={product.image} alt={product.title} style={{width:"30%", height: '30%' }} />
<h1>{product.title}</h1>
<p>{product.description}</p>
</div> */}