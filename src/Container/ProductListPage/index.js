import React from "react";
import Layout from "../../Components/Layout";
import getParams from "../../utils/getParams";
import ProductPage from "./ProductPage";
import ProductStore from "./ProductStore";
import "./styles.css";

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    console.log(params);
    let productPageLayout = null;
    switch (params.type) {
      case "store":
        productPageLayout = <ProductStore {...props} />;
        break;
      case "page":
        productPageLayout = <ProductPage {...props} />;
        break;

      default:
        productPageLayout = null;
        break;
    }
    return productPageLayout;
  };
  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
