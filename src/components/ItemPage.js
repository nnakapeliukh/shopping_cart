import { useEffect, useState } from "react";
import "../styles/ItemPage.css";
const ItemPage = (props, { match }) => {
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState("1");

  const baseURL = "https://fakestoreapi.com/products/";
  // console.log("props ",props);
  // console.log("match", {match});
  // console.log('url',`${baseURL}${props.match.params.id}`)
  const getData = async () => {
    const rawItems = await fetch(
      `${baseURL}${props.match.params.id}`
    );
    rawItems.json().then((json) => {
      setItem(json);
    });
    
    console.log("items", item);
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
            <img src={item.image} alt={item.title} />{" "}
          </div>
          <div className="i-content">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
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
