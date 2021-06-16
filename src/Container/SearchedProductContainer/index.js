import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import StarRating from "../../Components/Ratings";
import SearchedProductStore from "../SearchedProduct";
import { useDispatch, useSelector } from "react-redux";
const HomePage = () => {
  const Product = useSelector((state) => state.product.searchedProduct);
  const [searchedProduct, setSearchedProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setSearchedProduct(Product);
    console.log(searchedProduct);
  }, [Product, searchedProduct]);
  return (
    <>
      <Layout>
        <SearchedProductStore searchedProduct={searchedProduct} />
        <StarRating />
      </Layout>
    </>
  );
};

export default HomePage;
