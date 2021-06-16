import React from "react";
import "./style.css";

/**
 * @author
 * @function Card
 **/

const Card = ({ headerLeft, headerRight, children, ...rest }) => {
  return (
    <div className="card" {...rest}>
      {(headerLeft || headerRight) && (
        <div className="cardHeader">
          {headerLeft && (
            <div
              style={{
                alignSelf: "center",
                fontSize: "20px",
                fontWeight: "500",
              }}
            >
              {headerLeft}
            </div>
          )}
          {headerRight && headerRight}
        </div>
      )}

      {children}
    </div>
  );
};

export default Card;
