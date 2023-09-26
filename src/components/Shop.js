import { useEffect, useState } from "react";
import ShopItem from "./ShopItem";

const Shop = (props) => {
  const [shopItems, setShopItems] = useState([]);

  async function getData() {

    const rawItems = await fetch('https://fakestoreapi.com/products')
    
    const items = await rawItems.json();
    return await items;
  }

  useEffect(() => {
    getData().then((items) => {

      setShopItems(items);
    });
  }, []);

  return (
    <div className="shop-div">
      {shopItems !== undefined ? (
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
