import React from "react";
import "./Marketing.css";
import { Carousel } from "antd";

export default function Marketing() {
  return (
    <div className="Mkt_container mt-10">
      <div className="Marketing_Container_1 ">
        <div className="Marketing_Container_2 md:grid md:grid-cols-2 my-2">
          <div className="Marketing_top text-white m-auto">
            <h1 className="mkt_top_h1 text-xl md:text-3xl text-center">
              Ứng dụng tiện lợi dành cho <br />
              người yêu điện ảnh
            </h1>
            <p className="mkt_top_p1 my-10 text-sm md:text-xl text-center">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <a
              href="#"
              className="mkt_top_a text-sm md:text-base text-center block"
            >
              <span className="mkt_top_span">App miễn phí - Tải về ngay</span>
            </a>

            <p className="mkt_top_p2 text-sm md:text-xl text-center mt-10 ">
              TIX có hai phiên bản{" "}
              <a href="" className="underline text-white">
                iOS
              </a>{" "}
              &{" "}
              <a className="underline text-white" href="">
                Android
              </a>
            </p>
          </div>
          <div className="Marketing_bottom text-white relative">
            <img
              className="IphoneX absolute"
              src="./img/ipx.png"
              alt="IphoneX"
            />
            <Carousel autoplay="true" dots>
              <div className="Mkt_Slider Mkt_Slider_1">
                <img
                  className="mtk_slider_img mtk_slider_img_1"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp2.jpg"
                  alt="SlideIPX1"
                />
              </div>
              <div className="Mkt_Slider Mkt_Slider_2">
                <img
                  className="mtk_slider_img mtk_slider_img_2"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp3.jpg"
                  alt="SlideIPX2"
                />
              </div>
              <div className="Mkt_Slider Mkt_Slider_3">
                <img
                  className="mtk_slider_img mtk_slider_img_3"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp4.jpg"
                  alt="SlideIPX2"
                />
              </div>
              <div className="Mkt_Slider Mkt_Slider_4">
                <img
                  className="mtk_slider_img mtk_slider_img_4"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp3.jpg"
                  alt="SlideIPX2"
                />
              </div>
              <div className="Mkt_Slider Mkt_Slider_5">
                <img
                  className="mtk_slider_img mtk_slider_img_4"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp5.jpg"
                  alt="SlideIPX2"
                />
              </div>
              <div className="Mkt_Slider Mkt_Slider_5">
                <img
                  className="mtk_slider_img mtk_slider_img_4"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp7.jpg"
                  alt="SlideIPX2"
                />
              </div>
              <div className="Mkt_Slider Mkt_Slider_6">
                <img
                  className="mtk_slider_img mtk_slider_img_4"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp1.jpg"
                  alt="SlideIPX2"
                />
              </div>
              <div className="Mkt_Slider Mkt_Slider_6">
                <img
                  className="mtk_slider_img mtk_slider_img_4"
                  src="https://cybersoft-movie-phutran.web.app/imgs/slideApp8.jpg"
                  alt="SlideIPX2"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
