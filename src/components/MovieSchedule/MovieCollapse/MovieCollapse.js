import React from "react";
import "./MovieCollapse.css";
import { Collapse } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { memo } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const { Panel } = Collapse;

export const MovieCollapse = memo((props) => {
  const MovieListBaseBox = useSelector(
    (state) => state.MovieScheduleReducer?.MovieListBaseBox
  );
  // console.log("Movie Collapse");

  return (
    <div>
      <Collapse
        defaultActiveKey={["0"]}
        expandIconPosition="right"
        ghost="true"
      >
        {MovieListBaseBox?.map((movie, index) => {
          const ngayChieuGioChieuArr = movie.lstLichChieuTheoPhim;
          return (
            <Panel
              header={
                <div className="header_lichChieu flex">
                  <div className="header_picture">
                    <img
                      src={movie.hinhAnh}
                      alt={movie.tenPhim}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                  <div className="header_info">
                    <div className="header_info_top flex flex-row">
                      <p className="header_info_top_rate mr-2 mb-0">C</p>
                      <span className="header_info_top_name">
                        {movie.tenPhim}
                      </span>
                    </div>
                    <span className="header_info_bottom">
                      112 PHUT - TIX- 8.5 - IMDB-0
                    </span>
                  </div>
                </div>
              }
              key={index}
            >
              <div className="Content_Time">
                <p className="text-md tracking-widest uppercase font-bold">
                  2D Digital
                </p>
                <div className="Content_Time_Flex_Box flex flex-wrap">
                  {/* Render gio chieu o day */}
                  {ngayChieuGioChieuArr.map((ngay, index) => {
                    return (
                      <div
                        key={index}
                        className="Content_Time_Inside_Box flex-grow-0 max-w-1/4 flex "
                      >
                        <Link
                          className="Time_Link"
                          to={`/chitietphongve/${ngay.maLichChieu}`}
                        >
                          <CalendarOutlined />
                          <span className="__time ml-2">
                            {ngay.ngayChieuGioChieu.substr(11, 5)}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Panel>
          );
        })}
      </Collapse>
    </div>
  );
});
