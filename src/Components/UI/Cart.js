import React from "react";
import { IoIosCart } from "react-icons/io";

/**
 * @author
 * @function Cart
 **/

const Cart = ({ count }) => {
  return (
    <div className="cart">
      <span style={{ margin: "0 5px", color: "#2874f0" }}>Cart</span>
      <div style={{ fontSize: "18px", position: "relative" }}>
        {count > 0 && (
          <span
            style={{
              position: "absolute",
              background: "red",
              width: "20px",
              height: "20px",
              borderRadius: "6px",
              fontSize: "12px",
              border: "1px solid #fff",
              textAlign: "center",
              alignSelf: "center",
              top: "-12px",
              right: "-6px",
            }}
          >
            {count}
          </span>
        )}
        <span style={{ color: "#2874f0" }}>
          <IoIosCart />
        </span>
      </div>
    </div>
  );
};

export default Cart;
