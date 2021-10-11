import React from "react";
import products from "../products";
import { useParams } from "react-router-dom";

function Detail() {
  let cookie;
  const slug = useParams().productSlug;
  const product = products.find((product) => product.slug === slug);
  return (
    <div className="detail">
      <div>
        <h5>{product.name}</h5>
        <img src={product.image} alt="cookie" />
        <p>{product.price} KD</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default Detail;
