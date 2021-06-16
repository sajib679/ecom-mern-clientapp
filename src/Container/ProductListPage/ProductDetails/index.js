import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getProductsById } from "../../../actions";
import Layout from "../../../Components/Layout";
import { Card, Row, Col } from "react-bootstrap";
import { imageUrl } from "../../../urlConfig";
import { MaterialButton } from "../../../Components/MaterialUi";
import { IoMdCart, IoIosAddCircle } from "react-icons/io";
import "./style.css";
const ProductDetails = (props) => {
  const { productId } = props.match.params;
  console.log(productId);
  const product = useSelector((state) => state.product.productDetails);
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  useEffect(() => {
    dispatch(getProductsById(productId));
  }, [productId]);

  return (
    <Layout>
      {product !== null && (
        <Card
          className="p-5 m-5 align-content-center"
          style={{ maxWidth: "90%" }}
        >
          <Row className="mb-4">
            <Col sm={12} md={6}>
              {product.productPictures !== undefined && (
                <>
                  <Row>
                    <Card.Img
                      style={{ width: "auto", height: "400px" }}
                      src={imageUrl(
                        image ? image : product.productPictures[0].img
                      )}
                    ></Card.Img>
                  </Row>
                  <Row>
                    {product.productPictures.map((img) => (
                      <div
                        className="m-2"
                        style={{ outline: "none" }}
                        onClick={() => setImage(img.img)}
                        key={img.img}
                      >
                        <Card.Img
                          style={{
                            width: "auto",
                            height: "80px",
                          }}
                          src={imageUrl(img.img)}
                        ></Card.Img>
                      </div>
                    ))}
                  </Row>
                </>
              )}
            </Col>
            <Col sm={12} md={6}>
              <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle> {product.price} </Card.Subtitle>
              <Card.Text>{product.quantity}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              {/* <Card.Subtitle>{product.category.name}</Card.Subtitle> */}
            </Col>
          </Row>
          <Row className="justify-content-between align-content-center flex-row">
            <Col sm={12} md={6}>
              <MaterialButton
                title="ADD TO CART"
                bgColor="#ff9f00"
                textColor="#ffffff"
                style={{
                  padding: "5px",
                }}
                icon={<IoMdCart />}
                onClick={() => {
                  const { _id, name, price } = product;
                  const img = product.productPictures[0].img;
                  dispatch(addToCart({ _id, name, price, img }));
                }}
              />
            </Col>
            <Col sm={12} md={6}>
              <MaterialButton
                title="BUY NOW"
                bgColor="#fb641b"
                textColor="#ffffff"
                style={{
                  padding: "5px",
                }}
                icon={<IoIosAddCircle />}
                onClick={() => {
                  const { _id, name, price } = product;
                  const img = product.productPictures[0].img;
                  dispatch(addToCart({ _id, name, price, img }));
                  props.history.push(`/cart`);
                }}
              />
            </Col>
          </Row>
        </Card>
      )}
    </Layout>
  );
};

export default ProductDetails;
