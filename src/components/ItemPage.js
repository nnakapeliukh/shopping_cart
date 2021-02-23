import { useEffect, useState } from "react";
import "../styles/ItemPage.css";
const ItemPage = (props, { match }) => {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState("1");

  const baseURL = "https://dummyproducts-api.herokuapp.com";
  const ApiKey = "0QFpJVORqhJ5";

  const getData = async () => {
    const rawItems = await fetch(
      `${baseURL}/api/v1/products/${props.match.params.id}?apikey=${ApiKey}`
    );
    const items = await rawItems.json();
    setItem(items.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {item ? (
        <div className="item-page">
          <div className="i-image">
            {" "}
            <img src={item.product_image_lg} alt={item.product_name} />{" "}
          </div>
          <div className="i-content">
            <h1>{item.product_name}</h1>
            <p>{item.product_description}</p>
            <div className="add-to-cart-div">
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  props.handleItemSubmit(item, quantity);
                }}
              >
                <label>
                  Quantity
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(event) => {
                      setQuantity(event.target.value);
                    }}
                  ></input>
                </label>
                <input type="submit" value="Add to cart" />
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ItemPage;
