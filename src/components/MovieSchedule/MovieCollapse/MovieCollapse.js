import React from "react";
import "./MovieCollapse.css";
import { Collapse } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

import { Link } from "react-router-dom";
import FailLoginModal from "../../Failed_Login_Modal/FailLoginModal";
import { MODAL_OK } from "../../../redux/constants/Constants";
const { Panel } = Collapse;

export const MovieCollapse = memo((props) => {
  const dispatch = useDispatch();
  const MovieListBaseBox = useSelector(
    (state) => state.MovieScheduleReducer?.MovieListBaseBox
  );
  // console.log("Movie Collapse");
  //Kiểm tra tình trạng đăng nhập, để cho phép đi vô phòng vé hay không
  const { userAccount } = useSelector((state) => state.UserReducer);

  return (
    <div>
      {/* **** Failed-Login-Modal here */}
      <FailLoginModal />
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
                        {userAccount.taiKhoan?.trim() !== undefined ? (
                          <Link
                            className="Time_Link"
                            to={`/chitietphongve/${ngay.maLichChieu}`}
                          >
                            <CalendarOutlined />
                            <span className="__time ml-2">
                              {ngay.ngayChieuGioChieu.substr(11, 5)}
                            </span>
                          </Link>
                        ) : (
                          <button
                            onClick={() => {
                              dispatch({
                                type: MODAL_OK,
                              });
                            }}
                            className="Time_Link_NoLogin Time_Link"
                            target="_blank"
                          >
                            <CalendarOutlined />
                            <span className="__time ml-2">
                              {ngay.ngayChieuGioChieu.substr(11, 5)}
                            </span>
                          </button>
                        )}
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
