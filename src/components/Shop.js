import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const [shopItems, setShopItems] = useState([]);

  const baseURL = "https://dummyproducts-api.herokuapp.com";
  const ApiKey = "0QFpJVORqhJ5";

  async function getData() {
    const rawItems = await fetch(
      `${baseURL}/api/v1/products/random?apikey=${ApiKey}`
    );
    const items = await rawItems.json();
    return await items.data;
  }

  useEffect(() => {
    getData().then((items) => {
      setShopItems(items);
    });
  }, []);

  return (
    <div className="shop-div">
      {shopItems[0] !== undefined ? (
        shopItems.map((item, index) => {
          return <ShopItem item={item} key={index} />;
        })
      ) : (
        <h1>New Shop</h1>
      )}
    </div>
  );
};

export default Shop;
