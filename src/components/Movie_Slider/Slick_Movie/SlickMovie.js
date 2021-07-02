import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Slick_Movie.css";
export default function SlickMovie(props) {
  return (
    <div className="movie_item m-2 relative h-full md:h-72 lg:h-96 group cursor-pointer">
      <Link to={`/filmdetail/${props.Phim.maPhim}`}>
        <div className="img-bg h-5/6 md:h-3/4">
          <img
            className="w-full h-full rounded-lg"
            src={props.Phim.hinhAnh}
            alt="hinhSlider"
          />
        </div>
      </Link>
      <div className="movie_info text-left mt-2 group-hover:invisible ">
        <div className="movie_name">
          <div className="h-full p-1">
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
        <button className="btn btnMuaVe text-white text-lg font-semibold">
          Mua Vé
        </button>
      </div>
    </div>
  );
}
