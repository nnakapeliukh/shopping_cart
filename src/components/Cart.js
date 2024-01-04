import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import ItemPage from "./ItemPage";

const Cart = (props) => {
  return (
    <div className="cart-div">
      {props.cartItems[0] !== undefined ? (
        
        props.cartItems.map((item) => {
          return (
            <CartItem
              key={item.id} 
              product={item}              
              handleItemQuantChange={props.handleItemQuantChange}
            />
          );
        })
      ) : (
        <h1 className="empty-cart">
          Your cart is empty. Visit our <Link to="/shop">store</Link> to find
          only the best goods.
        </h1>
      )}

      <div className="checkout-holder">
        {" "}
        <p>Checkout</p>
      </div>
    </div>
  );
};

export default Cart;
