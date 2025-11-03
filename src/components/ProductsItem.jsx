import React from "react";
import { Card } from "react-bootstrap";

const ProductsItem = ({ title, price, category, description, images, id }) => {
  return (
    <Card
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="w-25 d-flex text-center"
      key={title}
    >
      <h1>{title}</h1>
      <p>Price : {price}$ </p>
      <p>description : {description} </p>

      <img width={"100"} height={'100'} src={images[0]} alt="" loading="lazy" />
    </Card>
  );
};

export default ProductsItem;
