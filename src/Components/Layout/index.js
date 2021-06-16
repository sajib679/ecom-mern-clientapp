import React, { useEffect, useState } from "react";
import HomePage from "../../Container/HomePage";
import Header from "../Header";
import MenuHeader from "../MenuHeader";
import SearchedProductStore from "../../Container/SearchedProduct";
import { useDispatch, useSelector } from "react-redux";
const Layout = (props) => {
  const Product = useSelector((state) => state.product.searchedProduct);
  const { focused, searchTermLength } = useSelector((state) => state.search);

  const [searchedProduct, setSearchedProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    setSearchedProduct(Product);
    console.log(searchedProduct);
  }, [Product, searchedProduct]);
  return (
    <>
      <Header></Header>
      <MenuHeader></MenuHeader>
      <SearchedProductStore searchedProduct={searchedProduct} />

      {/* {focused && searchTermLength >= 2 && (
      )} */}
      {props.children}
    </>
  );
};

export default Layout;
