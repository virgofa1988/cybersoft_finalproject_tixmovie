import React from "react";
import "./Movieschedule_filmdetail.css";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { Collapse } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
const { TabPane } = Tabs;
const { Panel } = Collapse;
export default function Movieschedule_filmdetail() {
  const FilmDetail = useSelector((state) => state.FilmDetailReducer.PhimDetail);
  // console.log(FilmDetail);
  const { heThongRapChieu } = FilmDetail;
  const getBoxKey = (key) => {
    console.log(key);
  };

  return (
    <div className="movieScheduleFilmDetail py-10">
      <div className="movieScheduleFilmDetail_desktop  hidden md:block md:px-40">
        <Tabs
          defaultActiveKey="key"
          large
          onChange={getBoxKey}
          type="card"
          tabPosition="left"
          animated
          size="large"
          addIcon
        >
          {heThongRapChieu?.map((rap, index) => {
            // console.log(rap);
            return (
              <TabPane
                key={rap.maHeThongRap}
                tab={
                  <img
                    style={{ width: "4rem" }}
                    src={rap.logo}
                    alt={rap.maHeThongRap}
                  />
                }
              >
                <Collapse expandIconPosition="right">
                  {rap.cumRapChieu.map((cumRap, index) => {
                    // console.log(cumRap);
                    const lichChieuPhimArr = cumRap.lichChieuPhim;
                    return (
                      <Panel
                        header={
                          <div className="header_lichChieu flex">
                            <div className="header_picture">
                              <img
                                src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg"
                                alt="test"
                                className="w-full h-full rounded-md"
                              />
                            </div>
                            <div className="header_info">
                              <div className="header_info_top flex flex-row">
                                <span className="header_info_top_name">
                                  {cumRap.tenCumRap}
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
                          <div className="Content_Time_Flex_Box flex flex-wrap flex-col md:flex-row">
                            {lichChieuPhimArr.map((ngay, index) => {
                              return (
                                <div
                                  key={index}
                                  className="Content_Time_Inside_Box flex-grow-0  flex "
                                >
                                  <Link
                                    to={`/chitietphongve/${ngay.maLichChieu}`}
                                    className="Time_Link"
                                    target="_blank"
                                  >
                                    <CalendarOutlined />
                                    <span className="__time ml-2">
                                      {ngay.ngayChieuGioChieu}
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
              </TabPane>
            );
          })}
        </Tabs>
      </div>
      <div className="movieScheduleFilmDetail_mobile md:hidden">
        <Collapse expandIconPosition="right">
          {heThongRapChieu?.map((rap, index) => {
            // console.log(rap);
            return (
              <Panel
                header={
                  <div className="header_lichChieu flex">
                    <div className="header_picture">
                      <img
                        src={rap.logo}
                        alt="test"
                        className="w-full h-full rounded-md"
                      />
                    </div>
                    <div className="header_info">
                      <div className="header_info_top flex flex-row">
                        <span className="header_info_top_name">
                          {rap.tenHeThongRap.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                }
              >
                {rap.cumRapChieu.map((cumRap, index) => {
                  // console.log(cumRap);
                  const lichChieuPhimArr = cumRap.lichChieuPhim;
                  return (
                    <Collapse
                      // defaultActiveKey={["0"]}
                      expandIconPosition="right"
                      ghost="true"
                    >
                      <Panel
                        header={
                          <div className="header_lichChieu flex">
                            <div className="header_picture">
                              <img
                                src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-vincom-thao-dien-15379553942188.jpg"
                                alt="test"
                                className="w-full h-full rounded-md"
                              />
                            </div>
                            <div className="header_info">
                              <div className="header_info_top flex flex-row">
                                <span className="header_info_top_name">
                                  {cumRap.tenCumRap}
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
                          <div className="Content_Time_Flex_Box flex flex-wrap flex-col md:flex-row">
                            {lichChieuPhimArr.map((ngay, index) => {
                              // console.log(ngay.maLichChieu);
                              return (
                                <div
                                  key={index}
                                  className="Content_Time_Inside_Box flex-grow-0  flex "
                                >
                                  <Link
                                    className="Time_Link"
                                    to={`/chitietphongve/${ngay.maLichChieu}`}
                                  >
                                    <CalendarOutlined />
                                    <span className="__time ml-2">
                                      {ngay.ngayChieuGioChieu}
                                    </span>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </Panel>
                    </Collapse>
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
      </div>
    </div>
  );
}
