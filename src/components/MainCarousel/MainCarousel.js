import React from "react";
import { Carousel } from "antd";
import "../MainCarousel/MainCarousel.css";
import HomeTool from "./HomeTool/HomeTool";

export default function MainCarousel() {
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <div className="mainCarousel">
      <Carousel arrows fade swipe effect="scrollx">
        <div>
          <div style={contentStyle} className="group relative">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2021/04/mortal-kombat-16177818818286.png"
              alt=""
            />
            <a
              data-vbtype="video"
              data-autoplay="true"
              href="https://youtu.be/gqcpChNYH10"
              className="btn btn_playtrailer venobox overlay_hover absolute "
            >
              <img
                className="w-12 lg:w-full"
                src="../../img/play-video.png"
                alt="playbtn"
              />
            </a>
          </div>
        </div>
        <div>
          <div style={contentStyle} className="group relative">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png"
              alt=""
            />

            <a
              data-vbtype="video"
              data-autoplay="true"
              href="https://youtu.be/gqcpChNYH10"
              className="btn btn_playtrailer venobox overlay_hover absolute "
            >
              <img
                className="w-12 lg:w-full"
                src="../../img/play-video.png"
                alt="playbtn"
              />
            </a>
          </div>
        </div>
        <div>
          <div style={contentStyle} className="group relative">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png"
              alt=""
            />
            <a
              data-vbtype="video"
              data-autoplay="true"
              href="https://youtu.be/gqcpChNYH10"
              className="btn btn_playtrailer venobox overlay_hover absolute "
            >
              <img
                className="w-12 lg:w-full"
                src="../../img/play-video.png"
                alt="playbtn"
              />
            </a>
          </div>
        </div>
        <div>
          <div style={contentStyle} className="group relative">
            <img
              className="w-full"
              src="https://s3img.vcdn.vn/123phim/2021/04/nguoi-nhan-ban-seobok-16177781610725.png"
              alt=""
            />
            <a
              data-vbtype="video"
              data-autoplay="true"
              href="https://youtu.be/gqcpChNYH10"
              className="btn btn_playtrailer venobox overlay_hover absolute "
            >
              <img
                className="w-12 lg:w-full"
                src="../../img/play-video.png"
                alt="playbtn"
              />
            </a>
          </div>
        </div>
      </Carousel>
      <HomeTool />
    </div>
  );
}
