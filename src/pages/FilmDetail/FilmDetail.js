import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";

import { getAPIFilmDetail } from "../../redux/actions/PhimAction/PhimAction";
import "./Filmdetail.css";

export default function FilmDetail(props) {
  //props.history,props.match,props.location (Khi Component load ra tu the Route)
  const dispatch = useDispatch();
  //Get maPhim from URL from params Props
  const maPhimURL = props.match.params.id; //id là mình đặt trên path của Detail
  //Call API to get FilmDetail from Server and dispatch to Redux- khi componentDidmount
  useEffect(() => {
    dispatch(getAPIFilmDetail(maPhimURL));
    console.log(FilmDetail);
  }, []);
  //Sau khi callAPI từ Action, action sẽ lấy data và dispatch lên Reducer, mình sử dụng useSelector để lấy state về binding dữ liệu
  const FilmDetail = useSelector((state) => state.FilmDetailReducer.PhimDetail);
  // console.log("Detail Film", FilmDetail);
  return (
    <Fragment>
      <Header />
      <div className="filmDetail">
        <div className="upDetail grid md:grid-cols-2">
          <div className="img-bg relative mx-auto border-8 my-4 border-white">
            <img
              className="h-72"
              src={FilmDetail.hinhAnh}
              alt={FilmDetail.tenPhim}
            />
            <div className="movie_rating absolute w-10 lg:w-16 text-white p-1 rounded-md">
              <p className="text-center text-xl font-bold mb-0">
                {FilmDetail.danhGia}
              </p>
              <p className="movie_stars flex mb-0">
                <img
                  className="w-2 h-2 lg:w-3 lg:h-3"
                  src="https://tix.vn/app/assets/img/icons/star1.png"
                  alt
                />
                <img
                  className="w-2 h-2 lg:w-3 lg:h-3"
                  src="https://tix.vn/app/assets/img/icons/star1.png"
                  alt
                />
                <img
                  className="w-2 h-2 lg:w-3 lg:h-3"
                  src="https://tix.vn/app/assets/img/icons/star1.png"
                  alt
                />
                <img
                  className="w-2 h-2 lg:w-3 lg:h-3"
                  src="https://tix.vn/app/assets/img/icons/star1.png"
                  alt
                />
              </p>
            </div>
            <div className="showHover">
              <div className="hoverDetail absolute">
                <a
                  data-vbtype="video"
                  data-autoplay="true"
                  href={FilmDetail.trailer}
                  className="btn btn_playtrailer venobox"
                >
                  <img
                    className="w-12 lg:w-16"
                    src="https://tix.vn/app/assets/img/icons/play-video.png"
                    alt="playbtn"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="infoMain text-white my-auto flex flex-col flex-wrap items-center md:text-xl">
            <div className="infoMain1">
              <span>{FilmDetail.ngayKhoiChieu?.substring(0, 10)}</span>
            </div>
            <div className="infoMain2">
              {FilmDetail.filmMark === "P" ? (
                <span className="filmMark P">{FilmDetail.filmMark}</span>
              ) : (
                <span className="filmMark C16">{FilmDetail.filmMark}</span>
              )}{" "}
              <span>{FilmDetail.tenPhim}</span>
            </div>
            <div className="infoMain1">
              <span>{FilmDetail.thoiLuong} Phút - 0 IMDB</span>
            </div>
            <div className=" mt-4 md:mt-6">
              <button className="btnTrailer">Trailer</button>
              <button className="btnMuaVeFilm mx-4 my-4">Mua Vé</button>
            </div>
          </div>
        </div>

        <div className="Bottom_Detail md:max-w-92pc lg:max-w-85pc container mx-auto px-4 grid md:grid-cols-2 text-white lg:text-xl">
          <div className="infoCast_Time md:px-10">
            <div className="infoCast_NgayKhoiChieu flex">
              <p className="flex-1 infoMain1">Ngày Công Chiếu: </p>
              <p className="flex-1">
                {FilmDetail.ngayKhoiChieu?.substring(0, 10)}
              </p>
            </div>
            <div className="infoCast_DaoDien flex">
              <p className="flex-1 infoMain1">Đạo Diễn</p>
              <p className="flex-1">Nguyễn Anh Tuấn</p>
            </div>
            <div className="infoCast_LoaiPhim flex">
              <p className="flex-1 infoMain1">Thể Loại</p>
              <p className="flex-1">{FilmDetail.loaiPhim}</p>
            </div>
            <div className="infoCast_NgonNgu flex">
              <p className="flex-1 infoMain1">Ngôn Ngữ</p>
              <p className="flex-1">Phụ Đề Tiếng Việt</p>
            </div>
          </div>
          <div className="infoCast_Content">
            <span className="font-semibold infoMain1">
              Nội Dung: <br />
            </span>
            <span className="text-justify">{FilmDetail.moTa}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
