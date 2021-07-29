import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./Container/HomePage";
import CartPage from "./Container/CartPage/index";
import CheckoutPage from "./Container/CheckoutPage/index";
import OrderPage from "./Container/OrderPage/index";
import OrderDetailsPage from "./Container/OrderDetailsPage/index";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isUserLoggedIn, updateCart } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import ProductListPage from "./Container/ProductListPage";
import ProductDetails from "./Container/ProductListPage/ProductDetails";

function App() {
  const auth = useSelector((state) => state.auth);
  const Product = useSelector((state) => state.searchedProduct);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage}></Route>
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/account/orders" component={OrderPage} />
          <Route path="/order_details/:orderId" component={OrderDetailsPage} />
          <Route path="/:productSlug/:productId/p" component={ProductDetails} />
          <Route path="/:slug" component={ProductListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
