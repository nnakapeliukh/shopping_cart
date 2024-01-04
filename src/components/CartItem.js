import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CartItem.css";

const CartItem = (props) => {
  const [quantity, setQuantity] = useState({});

  console.log(props);
  useEffect(() => {
    setQuantity(props.product.quantity);
  }, [props.product.quantity]);

  return (
    <div className="cart-item-div">
      {props.product.item ? (
        <div>
          <Link to={`/shop/${props.product.item.id}`}>
            <img
              src={props.product.item.image}
              alt={props.product.item.title}
              className="product-image"
            />
            <p>Price: ${props.product.item.price}</p>
            <p>
              Total: $
              {props.product.item.price * props.product.quantity}
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
