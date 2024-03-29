import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Components/Layout";
import Card from "../../Components/UI/Card";
import { imageUrl } from "../../urlConfig";
import CartItem from "./CartItem";
import { addToCart, getCartItems, removeCartItem } from "../../actions";
import PriceDetails from "../../Components/PriceDetails";

import "./style.css";
import { MaterialButton } from "../../Components/MaterialUi";

/**
 * @author
 * @function CartPage
 **/

/*
Before Login
Add product to cart
save in localStorage
when try to checkout ask for credentials and 
if logged in then add products to users cart database from localStorage


*/

const CartPage = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
    }
  }, []);

  const onQuantityIncrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, price, img } = cartItems[_id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };

  const onRemoveCartItem = (_id) => {
    dispatch(removeCartItem({ productId: _id }));
  };

  if (props.onlyCartItems) {
    return (
      <>
        {Object.keys(cartItems).map((key, index) => (
          <CartItem
            key={index}
            cartItem={cartItems[key]}
            onQuantityInc={onQuantityIncrement}
            onQuantityDec={onQuantityDecrement}
          />
        ))}
      </>
    );
  }

  return (
    <Layout>
      {Object.keys(cart.cartItems).length !== 0 ? (
        <div className="cartContainer" style={{ alignItems: "flex-start" }}>
          <Card
            headerLeft={`My Cart`}
            headerRight={<div>Deliver to</div>}
            style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
          >
            {Object.keys(cartItems).map((key, index) => (
              <CartItem
                key={index}
                cartItem={cartItems[key]}
                onQuantityInc={onQuantityIncrement}
                onQuantityDec={onQuantityDecrement}
                onRemoveCartItem={onRemoveCartItem}
              />
            ))}

            <div
              style={{
                width: "100%",
                display: "flex",
                background: "#ffffff",
                justifyContent: "flex-end",
                boxShadow: "0 0 10px 10px #eee",
                padding: "10px 0",
                boxSizing: "border-box",
              }}
            >
              <div style={{ width: "250px" }}>
                <MaterialButton
                  title="PLACE ORDER"
                  onClick={() => props.history.push(`/checkout`)}
                />
              </div>
            </div>
          </Card>
          <PriceDetails
            totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
              return qty + cart.cartItems[key].qty;
            }, 0)}
            totalPrice={Object.keys(cart.cartItems).reduce(
              (totalPrice, key) => {
                const { price, qty } = cart.cartItems[key];
                return totalPrice + price * qty;
              },
              0
            )}
          />
        </div>
      ) : (
        <Card style={{ display: "flex", width: "auto" }}>
          <h1 style={{ textAlign: "center", padding: "20px 0" }}>
            No Products Added to Cart
          </h1>
        </Card>
      )}
    </Layout>
  );
};

export default CartPage;
