import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import SlickMovie from "../Slick_Movie/SlickMovie";
export default function Slickcarousel() {
  const dispatch = useDispatch();
  const PhimListAPI = useSelector(
    (state) => state.HomeToolReducer.PhimListHomeTool
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 200,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          rows: 1,
        },
      },
    ],
  };
  // console.log(PhimListAPI);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <Slider {...settings}>
      {PhimListAPI.map((phim, index) => {
        return <SlickMovie Phim={phim} key={index} />;
      })}
    </Slider>
  );
}
