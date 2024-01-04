import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CartImage from "../img/Cart.png";

const Header = (props) => {
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    let totalItems = 0;
    for (let item of props.cartItems) {
      totalItems += Number(item.quantity);
    }
    setItemsInCart(totalItems);
  }, [props.cartItems]);

  return (
    <div className="header-div">
      <h1 className="main-title">My Store</h1>
      <ul className="header-lists">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/shop">Shop</Link>
        </li>
      </ul>

      <Link className="cart-link" to="/cart">
        <div className="cart-icon-div">
          <img className="cart-img" width="80px" src={CartImage} alt="cart" />
          <h3 style={{color:'white'}}>{itemsInCart}</h3>
        </div>
      </Link>
      <div className="background-credits">
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@mikepetrucci">
            Mike Petrucci
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com">
            Unsplash
          </a>
        </span>
      </div>
    </div>
  );
};

export default Header;
