import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ShopItem.css";

const ShopItem = (props) => {
  return (
    <div className="item-div">
      {props.item ? (
        <Link to={`/shop/${props.item._id}`}>
          <img
            className="product-image"
            src={props.item.product_image_md}
            alt={props.item.product_name}
          />
          <p className="product-name">{props.item.product_name}</p>
          <p className="product-price">${props.item.product_price}</p>
          {/* <p className="product-material">
            Material: {props.item.product_material}
          </p> */}
        </Link>
      ) : (
        <h1>Empty</h1>
      )}
    </div>
  );
};

export default ShopItem;
