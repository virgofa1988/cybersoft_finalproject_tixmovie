import React from "react";
import { Tabs } from "antd";
import "./MovieSlider.css";
import Slickcarousel from "./Slick_Carousel/Slickcarousel";
import SlickMovieMobile from "./Slick_Movie_Mobile/SlickMovieMobile";
import { useDispatch } from "react-redux";
import { showMoreMovieMobile } from "../../redux/constants/Constants";
const { TabPane } = Tabs;

export default function MovieSlider() {
  function callback(key) {
    console.log(key);
  }
  const dispatch = useDispatch();
  // let isShowMoreBtnClick = false;
  return (
    <div className="movie__slider" id="movie__slider">
      <Tabs
        defaultActiveKey="key"
        large
        onChange={callback}
        type="card"
        // tabBarGutter="40px"
      >
        <TabPane tab="Đang Chiếu" key="1" className="mx-10">
          <div className="container mx-auto md:block">
            <Slickcarousel />
          </div>
        </TabPane>
        <TabPane tab="Sắp Chiếu" key="2" className="mx-10">
          <div className="container mx-auto hidden md:block">
            <Slickcarousel />
          </div>
          <div className="md:hidden">
            <SlickMovieMobile />
            <button
              className="showMoreBtn"
              onClick={() => {
                dispatch({
                  type: showMoreMovieMobile,
                });
              }}
            >
              Show More
            </button>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
