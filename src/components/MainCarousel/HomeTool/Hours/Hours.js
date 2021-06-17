import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedDate,
  selectedHour,
} from "../../../../redux/constants/Constants";
import "./Hours.css";

export default function Hours() {
  const dispatch = useDispatch();
  //Tạo state quản lý Hours người dùng chọn để render lại UI
  let [WatchHours, setHours] = useState({});
  //Lấy thông tin Hours khi người dùng chọn từ dropdown list để render UI
  const selectedHoursReducer = useSelector(
    (state) => state.HomeToolReducer.SelectedHours
  );
  //Lấy thông tin Date để kiểm tra người dùng đã nhập vào Date trước khi render ra Hours
  const selectedDateReducer = useSelector(
    (state) => state.HomeToolReducer.SelectedDate
  );

  // console.log("Hours From Redux is ", selectedHoursReducer);
  //Khi Người dùng thay đổi Hours chọn sẽ cập nhật lại state để render ra giao diện
  useEffect(() => {
    //Tạo object ngày mới chỉ có giá trị ngày cần
    let selectedHoursUpdate = {
      watchHour: selectedHoursReducer.watchHour,
    };
    setHours((WatchHours = selectedHoursUpdate));
    // console.log("component didupdate");
  }, [selectedHoursReducer]);
  //----------------------------------------//
  // Lấy danh sách Date để render ra dropdownlist
  const HourListHomeTool = useSelector(
    (state) => state.HomeToolReducer.HoursList
  );
  //   console.log(HourListHomeTool);
  ////Render List Date

  const renderHourListHomeTool = () => {
    return HourListHomeTool.map((ReducerHour, index) => {
      return (
        <li
          onClick={() => {
            dispatch({
              type: selectedHour,
              SelectedHours: {
                watchHour: ReducerHour.ngayChieuGioChieu.slice(11, 16),
                isHourPicked: true,
              },
            });
          }}
          key={index}
          className="hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg py-1 px-4 "
        >
          {ReducerHour.ngayChieuGioChieu.slice(11, 16)}
        </li>
      );
    });
  };
  return (
    <div className="w-full px-2 group border-r-2 text-lg ">
      <div className="HoursHomeTool cursor-pointer mx-2">
        <span>{WatchHours.watchHour}</span>
      </div>
      <ul className="selectHoursList z-10 absolute my-4 rounded-lg bg-white invisible group-hover:visible shadow-lg py-6 px-2 transition-all duration-300">
        {selectedDateReducer.watchDay !== "Chọn Ngày" ? (
          renderHourListHomeTool()
        ) : (
          <li className="bg-red-400 text-white cursor-pointer rounded-lg py-1 px-4">
            Vui Lòng Chọn Phim, Rạp và Ngày
          </li>
        )}
      </ul>
    </div>
  );
}
