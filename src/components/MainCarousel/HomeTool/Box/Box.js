import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIHomeToolBoxList } from "../../../../redux/actions/HomeToolAction/HomeToolAction";
import { selectedBox } from "../../../../redux/constants/Constants";
import "./Box.css";

export default function Box() {
  const dispatch = useDispatch();
  //Tạo state quản lý Box người dùng chọn để render lại UI
  let [Box, setBox] = useState({ tenCumRap: "Rạp", maCumRap: "Rạp" });
  //Lấy thông tin Box khi người dùng chọn từ dropdown list
  const selectedBoxReducer = useSelector(
    (state) => state.HomeToolReducer.SelectedBox
  );
  //Lấy thông tin Phim để kiểm tra trước khi cho chọn Box
  const selectedPhimReducer = useSelector(
    (state) => state.HomeToolReducer.SelectedPhim
  );
  //Load Danh Sach Box
  useEffect(() => {
    dispatch(getAPIHomeToolBoxList(selectedPhimReducer.maPhim));
    // console.log("component didmount");
  }, [selectedPhimReducer]);
  // console.log("Box From Redux is ", selectedBoxReducer);
  //Khi Người dùng thay đổi Box chọn sẽ cập nhật lại state để render ra giao diện
  useEffect(() => {
    setBox((Box = selectedBoxReducer));
    // console.log("component didupdate");
  }, [selectedBoxReducer]);
  //----------------------------------------//
  // Lấy danh sách Box để render ra dropdownlist
  const BoxListHomeTool = useSelector(
    (state) => state.HomeToolReducer.BoxListHomeTool
  );
  ////Render List Box
  const renderBoxListHomeTool = () => {
    return BoxListHomeTool.map((Box, index) => {
      return (
        <li
          onClick={() => {
            dispatch({
              type: selectedBox,
              selectedBox: {
                tenCumRap: Box.tenCumRap,
                maCumRap: Box.maCumRap,
              },
            });
          }}
          key={index}
          className="hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg py-1 px-4"
        >
          {Box.tenCumRap}
        </li>
      );
    });
  };

  return (
    <div className="w-full px-2 group border-r-2 text-lg ">
      <div className="BoxHomeTool cursor-pointer mx-4 t">
        <span>
          {Box.tenCumRap.length > 19
            ? Box.tenCumRap.substring(0, 26) + "..."
            : Box.tenCumRap}
        </span>
      </div>
      <ul className="selectBoxList z-10 absolute my-4 rounded-lg bg-white invisible group-hover:visible shadow-lg py-6 px-2 transition-all duration-300">
        {selectedPhimReducer.maPhim !== 0 ? (
          renderBoxListHomeTool()
        ) : (
          <li className="bg-red-400 text-white cursor-pointer rounded-lg py-1 px-4">
            Vui Lòng Chọn Phim
          </li>
        )}
      </ul>
    </div>
  );
}
