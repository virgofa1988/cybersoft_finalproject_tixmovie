import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Phimlist.css";
import { selectedPhim } from "../../../../redux/constants/Constants";
import { getAPIHomeToolPhimList } from "../../../../redux/actions/HomeToolAction/HomeToolAction";
export default function Phimlist2() {
  const dispatch = useDispatch();
  //Tạo state quản lý phim người dùng chọn để render lại UI
  let [Phim, setPhim] = useState({ tenPhim: "Phim", maPhim: 0 });
  //Lấy thông tin phim khi người dùng chọn từ dropdown list
  const SelectedPhimReducer = useSelector(
    (state) => state.HomeToolReducer.SelectedPhim
  );
  //Load Danh Sach Phim
  useEffect(() => {
    dispatch(getAPIHomeToolPhimList());
    // console.log("component didmount");
  }, []);
  // console.log("Phim From Redux is ", SelectedPhimReducer);
  //Khi Người dùng thay đổi phim chọn sẽ cập nhật lại state để render ra giao diện
  useEffect(() => {
    setPhim((Phim = SelectedPhimReducer));
    // console.log("component didupdate");
  }, [SelectedPhimReducer]);
  //----------------------------------------//
  // Lấy danh sách Phim để render ra dropdownlist
  const PhimListHomeTool = useSelector(
    (state) => state.HomeToolReducer.PhimListHomeTool
  );
  ////Render List Phim
  const renderPhimListHomeTool = () => {
    return PhimListHomeTool.map((phim, index) => {
      return (
        <li
          onClick={() => {
            dispatch({
              type: selectedPhim,
              selectedPhim: { tenPhim: phim.tenPhim, maPhim: phim.maPhim },
            });
          }}
          key={index}
          className="hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg py-1 px-4 transition-all duration-400"
        >
          {phim.tenPhim}
        </li>
      );
    });
  };

  return (
    <div className="w-full px-2 group border-r-2 text-lg ">
      <div className="PhimHomeTool cursor-pointer mx-4 t">
        <span>
          {Phim.tenPhim.length > 25
            ? Phim.tenPhim.substring(0, 25) + "..."
            : Phim.tenPhim}
        </span>
      </div>
      <ul className="selectPhimList z-10 absolute my-4 rounded-lg bg-white invisible group-hover:visible shadow-lg py-6 px-2 transition-all duration-500 border-t-2">
        {renderPhimListHomeTool()}
      </ul>
    </div>
  );
}
