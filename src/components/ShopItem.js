import { Link } from "react-router-dom";
import "../styles/ShopItem.css";

const ShopItem = (props) => {
  return (
    <div className="item-div">
      {props ? (
        <Link to={`/shop/${props.item.id}`}>
          
          <img
            className="product-image"
            src={props.item.image}
            alt={props.item.title}
          />
          <p className="product-name">{props.item.title}</p>
          <p className="product-price">${props.item.price}</p>
          
        </Link>
      ) : (
        <h1>Empty</h1>
      )}
    </div>
  );
};

export default ShopItem;
