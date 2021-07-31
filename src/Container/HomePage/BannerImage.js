import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Carousel from "../../Components/Carousol";
import { getAllBanner } from "../../actions";
const BannerImage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBanner());
  }, []);
  const banners = useSelector((state) => state.banner.banners);

  return (
    <Container>
      <Carousel images={banners[0]?.bannerImages} />
    </Container>
  );
};

export default BannerImage;
