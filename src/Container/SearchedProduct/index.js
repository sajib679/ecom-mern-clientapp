import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { searchFocused } from "../../actions";
import { AiFillCloseCircle } from "react-icons/ai";
import "./styles.css";
const SearchedProductStore = ({ searchedProduct }) => {
  const ref = useRef();

  const history = useHistory();
  const dispatch = useDispatch();
  const { focused, searchTermLength } = useSelector((state) => state.search);

  if (searchedProduct?.length > 0) {
    return (
      <>
        <div
          ref={ref}
          className="shadow p-3 mb-5 bg-white rounded"
          style={{
            zIndex: 1,
            position: "fixed",
            background: "white",
            left: "15%",
            right: "15%",
            display: searchTermLength > 1 ? "inline-block" : "none",
          }}
        >
          <span
            onClick={() => {
              dispatch(searchFocused(false, 0));
            }}
            style={{
              position: "relative",
              float: "right",
              cursor: "pointer",
              top: -10,
              right: -10,
            }}
          >
            <AiFillCloseCircle size={24} color="grey" />
          </span>

          {searchedProduct.length > 0 &&
            searchedProduct.map((product) => {
              return (
                <div
                  className="d-table-cell"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history.push(`/${product.slug}/${product._id}/p`);
                  }}
                  key={product._id}
                >
                  <div className="product-container">
                    <div className="productImg-container">
                      <img
                        src={`http://localhost:2000/public/${product.productPictures[0].img}`}
                        alt=""
                      ></img>
                    </div>
                    <div className="product-info">
                      <div>{product.name}</div>
                      <div>
                        <div>{product.price}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  } else {
    return (
      <div
        className="shadow p-3 mb-5 bg-white rounded"
        style={{
          zIndex: 1,
          position: "fixed",
          background: "white",
          left: "15%",
          right: "15%",
          width: "auto",
          display: searchTermLength > 1 ? "inline-block" : "none",
        }}
      >
        No Product to show
      </div>
    );
  }
};

export default SearchedProductStore;
