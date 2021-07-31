import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { imageUrl } from "../../urlConfig";

const Index = ({ images, navigateTo }) => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      stopOnHover
      dynamicHeight={false}
      showThumbs={false}
    >
      {images?.length > 0 &&
        images.map((img, index) => (
          <a href={navigateTo} key={index}>
            <div className="wrapper-img-div">
              <img
                className="carousel-img-div"
                src={imageUrl(img.img)}
                alt=""
              />
              <p className="legend">{img.legend}</p>
            </div>
          </a>
        ))}
    </Carousel>
  );
};

export default Index;
