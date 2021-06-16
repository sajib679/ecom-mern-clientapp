/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductPage } from "../../../actions";
import getParams from "../../../utils/getParams";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Container } from "react-bootstrap";
import ProductsCard from "../../../Components/ProductsCard";
import "./styles.css";

const ProductPage = (props) => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.product.page);
  useEffect(() => {
    const params = getParams(props.location.search);
    dispatch(getProductPage(params));
  }, []);

  return (
    <div>
      <Container fluid>
        <h3>{page.pageTitle}</h3>
        <Carousel
          autoPlay
          infiniteLoop
          stopOnHover
          dynamicHeight={false}
          showThumbs={false}
        >
          {page.bannersImage &&
            page.bannersImage.map((img, index) => (
              <a href={img.navigateTo} key={index}>
                <div style={{ height: "40vh", objectFit: "contain" }}>
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={img.img}
                    alt=""
                  />
                  <p className="legend">Legend 1</p>
                </div>
              </a>
            ))}
        </Carousel>

        <div>
          <ProductsCard title="Latest Product">
            {page.productsImage &&
              page.productsImage.map((img, index) => (
                <div className="product-container" key={index}>
                  <a href={img.navigateTo}>
                    <img
                      className="productImg-container"
                      src={img.img}
                      alt=""
                    />
                  </a>
                  <p className="legend">Legend 1</p>
                </div>
              ))}
          </ProductsCard>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
