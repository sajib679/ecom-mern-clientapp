import React from "react";
import { Button, Row } from "react-bootstrap";
import "./styles.css";

const ProductsCard = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <Row className="d-flex justify-content-between">
            <div style={{ fontSize: 20, fontWeight: 500 }}>
              {props.title && props.title}
            </div>
            <Button onClick={props.onclick}>View All</Button>
          </Row>
        </div>
        <div className="card-body">{props.children}</div>
      </div>
    </>
  );
};

export default ProductsCard;
