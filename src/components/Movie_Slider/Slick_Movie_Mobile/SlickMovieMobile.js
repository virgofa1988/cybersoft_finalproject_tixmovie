import React from "react";
import { useSelector } from "react-redux";
import "./SlickMovieMobile.css";

export default function SlickMovieMobile() {
  const MobileFilmList = useSelector(
    (state) => state.MobileFilmListReducer.MobileFilmListReducer
  );
  //   console.log(MobileFilmList);
  return MobileFilmList.filter((film) => film.show === true).map(
    (film, index) => {
      return (
        <div
          className="grid grid-cols-1 m-2 relative cursor-pointer"
          key={index}
        >
          <img className="w-full" src={film.hinhAnh} alt={film.tenPhim} />
          <span className="movie_rating absolute w-10 lg:w-16 text-white p-1 rounded-md">
            <p className="text-center text-xl font-bold mb-0">{film.rating}</p>
            <p className="movie_stars flex mb-0">
              <img
                className="w-2 h-2 lg:w-3 lg:h-3"
                src="./img/star1.png"
                alt
              />
              <img
                className="w-2 h-2 lg:w-3 lg:h-3"
                src="./img/star1.png"
                alt
              />
              <img
                className="w-2 h-2 lg:w-3 lg:h-3"
                src="./img/star1.png"
                alt
              />
              <img
                className="w-2 h-2 lg:w-3 lg:h-3"
                src="./img/star1.png"
                alt
              />
            </p>
          </span>
          {film.ageType === "P" ? (
            <span className="movie_ageTypeP absolute">{film.ageType}</span>
          ) : (
            <span className="movie_ageTypeC absolute">{film.ageType}</span>
          )}
        </div>
      );
    }
  );
}
