import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../actions";
import Layout from "../../Components/Layout";
import Card from "../../Components/UI/Card";
import { imageUrl } from "../../urlConfig";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { Breed } from "../../Components/MaterialUi";

/**
 * @author
 * @function OrderPage
 **/

const OrderPage = (props) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getOrders());
    }
  }, [auth.authenticate]);

  console.log(user);

  return (
    <Layout>
      {auth.authenticate ? (
        <div style={{ maxWidth: "1160px", margin: "5px auto" }}>
          <Breed
            breed={[
              { name: "Home", href: "/" },
              { name: "My Account", href: "/account" },
              { name: "My Orders", href: "/account/orders" },
            ]}
            breedIcon={<IoIosArrowForward />}
          />
          {user.orders.map((order) => {
            return order.items.map((item) => (
              <Card style={{ display: "block", margin: "5px 0" }}>
                <Link
                  to={`/order_details/${order._id}`}
                  className="orderItemContainer"
                >
                  <div className="orderImgContainer">
                    <img
                      className="orderImg"
                      src={imageUrl(item.productId.productPictures[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="orderRow">
                    <div className="orderName">{item.productId.name}</div>
                    <div className="orderPrice">
                      <BiRupee />
                      {item.payablePrice}
                    </div>
                    <div>{order.paymentStatus}</div>
                  </div>
                </Link>
              </Card>
            ));
          })}
        </div>
      ) : (
        <Card
          style={{ display: "flex", margin: "5px 0", justifyContent: "center" }}
        >
          <div>
            <h1 style={{ textAlign: "center", padding: "20px  0" }}>
              Please Login to See Your Orders
            </h1>
          </div>
        </Card>
      )}
    </Layout>
  );
};

export default OrderPage;
