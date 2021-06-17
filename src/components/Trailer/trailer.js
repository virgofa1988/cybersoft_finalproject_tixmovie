import React from "react";
import { Fragment } from "react";

export default function trailer(props) {
  return (
    <Fragment>
      <div className="img-bg" style={{ height: "75%" }}>
        <img
          className="w-full h-full rounded-lg"
          src={props.Phim.hinhAnh}
          alt
        />
      </div>
      <div className="movie_info text-left mt-2 group-hover:invisible ">
        <div className="movie_name">
          <div className="h-full py-1">
            <span className="P">P</span>
            <span className="capitalize ml-2 font-semibold lg:font-bold text-base h-full ">
              {props.Phim.tenPhim}
            </span>
          </div>
        </div>
        <div className="movie_length lg:text-lg text-base">120 Phút</div>
      </div>
      <span className="movie_rating absolute w-10 lg:w-16 text-white p-1 rounded-md">
        <p className="text-center text-xl font-bold mb-0">
          {props.Phim.danhGia}
        </p>
        <p className="movie_stars flex mb-0">
          <img className="w-2 h-2 lg:w-3 lg:h-3" src="./img/star1.png" alt />
          <img className="w-2 h-2 lg:w-3 lg:h-3" src="./img/star1.png" alt />
          <img className="w-2 h-2 lg:w-3 lg:h-3" src="./img/star1.png" alt />
          <img className="w-2 h-2 lg:w-3 lg:h-3" src="./img/star1.png" alt />
        </p>
      </span>
      <div className="showHover invisible group-hover:visible ">
        <div className="hoverDetail absolute">
          <a
            data-vbtype="video"
            data-autoplay="true"
            href={props.Phim.trailer}
            className="btn btn_playtrailer venobox"
          >
            <img
              className="w-12 lg:w-16"
              src="./img/play-video.png"
              alt="playbtn"
            />
          </a>
        </div>
      </div>
    </Fragment>
  );
}
