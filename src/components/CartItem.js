import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CartItem.css";

const CartItem = (props) => {
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    setQuantity(props.product.quantity);
  }, []);

  return (
    <div className="cart-item-div">
      {props.product.item ? (
        <div>
          <Link to={`/shop/${props.product.item._id}`}>
            <img
              // className="product-image"
              src={props.product.item.product_image_md}
              alt={props.product.item.product_name}
            />
            <p>Price: ${props.product.item.product_price}</p>
            <p>
              Total: $
              {props.product.item.product_price * props.product.quantity}
            </p>
          </Link>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              props.handleItemQuantChange(props.product.item, quantity);
            }}
          >
            <label>
              Quantity
              <input
                className="cart-input"
                type="number"
                min={0}
                value={quantity}
                onChange={(event) => {
                  setQuantity(Number(event.target.value));
                }}
              ></input>
            </label>
            <input type="submit" value="Change" />
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default CartItem;
