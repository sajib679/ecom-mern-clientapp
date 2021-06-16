import React, { useState } from "react";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rateValue, setRateValue] = useState();
  const [hoverRating, setHoverRating] = useState();
  return (
    <>
      <div style={{ color: "red", width: "20px", height: "20px" }}>
        {hoverRating}
      </div>
      <Rating
        emptySymbol={<FaStar color="grey" size={20} />}
        fullSymbol={<FaStar color="gold" size={20} />}
        fractions={10}
        onClick={(value) => setRateValue(value)}
        onHover={(value) => setHoverRating(value)}
        initialRating={rateValue}
      ></Rating>
    </>
  );
};

export default StarRating;
