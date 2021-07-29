import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByslug } from "../../../actions";
import ProductsCard from "../../../Components/ProductsCard";
import { Link } from "react-router-dom";
import "./styles.css";
import { imageUrl } from "../../../urlConfig";
const ProductStore = (props) => {
  const initialState = {
    under5k: "Under 5,000 Tk.",
    under10k: "Under 10,000 Tk.",
    under15k: "Under 15,000 Tk.",
    under20k: "Under 20,000 Tk.",
    above20k: "Above 20,000 Tk.",
  };
  const [price, setPrice] = useState(initialState);

  const product = useSelector((state) => state.product);
  const slug = props.match.params.slug;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByslug(slug));
  }, []);
  return (
    <>
      {Object.keys(product.productsByPrice).map((items, index) => {
        console.log(items, index);
        return (
          product.productsByPrice[items].length > 0 && (
            <ProductsCard key={index} title={`${slug}  ${price[items]}`}>
              {product.productsByPrice[items].map((product) => {
                return (
                  <Link
                    to={`/${product.slug}/${product._id}/p`}
                    key={product._id}
                  >
                    <div className="product-container">
                      <div className="productImg-container">
                        <img
                          src={imageUrl(product.productPictures[0].img)}
                          alt=""
                        ></img>
                      </div>
                      <div className="product-info">
                        <div>{product.name}</div>
                        <div>
                          <span>{product.reviews}</span>
                          <span>{product.quantity}</span>
                          <div>{product.price}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </ProductsCard>
          )
        );
      })}
      ;
    </>
  );
};

export default ProductStore;
