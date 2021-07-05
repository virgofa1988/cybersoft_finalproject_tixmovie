import React, { useEffect, useState } from "react";
import "./MovieSchedule.css";
import { Tabs, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  // getAPIBoxDetailList,
  getAPIBoxList,
  getMovieSchedule,
} from "../../redux/actions/BoxAction/Boxaction";
import { MovieCollapse } from "./MovieCollapse/MovieCollapse";
import { BOX_CODE, MOVIE_LIST_BASE_BOX } from "../../redux/constants/Constants";

const { TabPane } = Tabs;

export default function MovieSchedule() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAPIBoxList());
    //Tự động Lấy key default BHDStar để call API lấy dữ liệu địa chỉ từng rạp cho giao diện của boxListDetail
    getBoxKey();
    // console.log("Movie Schedule Component Did Mount");
  }, []);
  // console.log("Movie Schedule Component");

  //Get All Box List
  const boxList = useSelector((state) => state.MovieScheduleReducer?.BoxList);

  //Call API to get Box list via maHeThongRap from Tab
  const getBoxKey = (maHeThongRap = "BHDStar") => {
    dispatch(getMovieSchedule(maHeThongRap));
    // console.log(maHeThongRap);
  };
  //Get it from Reducer
  const boxListDetail = useSelector(
    (state) => state.MovieScheduleReducer?.ScheduleBoxList
  );

  // console.log("Box List Detail", boxListDetail[0]?.maCumRap);
  //Tạo ra maCumRap mặc định khi user thay đổi maHeThongRap, cứ lấy cụm rạp đầu tiên
  let defaultmaCumRap = boxListDetail[0]?.maCumRap;

  useEffect(() => {
    getSchedule();
  }, [boxListDetail, boxList]);

  const getSchedule = (boxCode = defaultmaCumRap) => {
    // console.log(boxCode);
    //boxCode này là khi ng dùng chọn vào từng rạp theo từng địa chỉ ví dụ BHD 3/2. Dựa vào tham số này để tìm ra danh sách phim tương ứng
    dispatch({
      type: BOX_CODE,
      boxCode: boxCode,
    });
  };

  return (
    <div className="movieSchedule hidden md:block" id="movieSchedule">
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
        {boxList.map((box, index) => {
          return (
            <TabPane
              key={box.maHeThongRap}
              tab={
                <img
                  style={{ width: "4rem" }}
                  src={box.logo}
                  alt={box.biDanh}
                />
              }
            >
              <div className="movie_BoxList" key={index}>
                <Tabs
                  defaultActiveKey="key"
                  large
                  onChange={getSchedule}
                  type="card"
                  tabPosition="left"
                  animated
                  size="large"
                  addIcon
                >
                  {boxListDetail.map((boxDetail, index) => {
                    return (
                      <TabPane
                        key={boxDetail.maCumRap}
                        tab={
                          <div className="flex mx-2 cumRap_Items" key={index}>
                            <div className="cumRap_logo w-3/12 h-full ">
                              <img
                                style={{ width: "100%" }}
                                src={box.logo}
                                alt={box.biDanh}
                              ></img>
                            </div>

                            <div className="cumRap_info h-full w-9/12 text-left pl-2 ">
                              <p className="cumRap_Item cumRap_info_ten text-sm text-gray-500 mb-0 overflow-hidden overflow-ellipsis">
                                {boxDetail.tenCumRap}
                              </p>
                              <p className="cumRap_Item cumRap_info_diaChi text-xs text-gray-400 mb-0 overflow-hidden  overflow-ellipsis">
                                {boxDetail.diaChi}
                              </p>
                              <a
                                className="cumRap_Item cumRap_info_chiTiet text-sm text-red-500"
                                href="#"
                              >
                                [Chi Tiết]
                              </a>
                            </div>
                          </div>
                        }
                      >
                        <MovieCollapse />
                      </TabPane>
                    );
                  })}
                </Tabs>
              </div>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}
