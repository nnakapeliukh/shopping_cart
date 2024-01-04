import "./App.css";
import { BrowserRouter, Switch, Route, } from "react-router-dom";
import Shop from "./components/Shop";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemPage from "./components/ItemPage";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    let newCartItem = { item: item, quantity: quantity };
    let isAlreadyInCart = false;
    let tempCart;
    if (cartItems[0] !== undefined) {
      tempCart = cartItems.map((mapItem) => {
        if (mapItem.item.id === item.id) {
          isAlreadyInCart = true;
          return {
            item: mapItem.item,
            quantity: Number(mapItem.quantity) + Number(quantity),
          };
        } else {
          return mapItem;
        }
      });
    }
    isAlreadyInCart
      ? setCartItems(tempCart)
      : setCartItems([...cartItems, newCartItem]);
  };

  const changeItemQuantity = (item, quantity) => {
    let tempCart = cartItems.flatMap((mapItem) => {
      if (mapItem.item.id === item.id) {
        if (Number(quantity) === 0) {
          return [];
        } else {
          return [
            {
              item: mapItem.item,
              quantity: Number(quantity),
            },
          ];
        }
      } else {
        return [mapItem];
      }
    });
    setCartItems(tempCart);
  };

  return (
    <BrowserRouter>
      <Header cartItems={cartItems}></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact>
          <Shop />
        </Route>

        <Route path="/cart">
          <Cart
            cartItems={cartItems}
            handleItemQuantChange={changeItemQuantity}
          />
        </Route>

        <Route
          path="/shop/:id"
          children={({ match }) => (
            <ItemPage
              cartID={123123}
              match={match}
              handleItemSubmit={addToCart}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
