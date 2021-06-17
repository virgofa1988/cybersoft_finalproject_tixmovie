import React from "react";
import Box from "./Box/Box";
import Phimlist2 from "./Phim/Phimlist2";
import WatchDate from "./Date/WatchDate";
import Hours from "./Hours/Hours";
import { useSelector } from "react-redux";
export default function HomeTool() {
  //Kiểm tra xem đã chọn đủ các thông tin mua vé để thay đổi màu sắc cho Button
  const isHourPicked = useSelector(
    (state) => state.HomeToolReducer.SelectedHours.isHourPicked
  );
  let bgBtn_style = "rgb(50 59 63)"; // Mặc định màu xám
  if (isHourPicked) {
    bgBtn_style = "rgb(218 72 49)"; // Đổi về màu Cam khi chọn đủ thông tin
  }
  return (
    <div className="hidden lg:block">
      <div className="relative grid grid-cols-12 h-20 max-w-3/4 m-auto bottom-10 ">
        <div className="bg-white shadow-xl rounded-l-xl flex items-center justify-items-center col-span-3">
          <Phimlist2 />
        </div>
        <div className="bg-white shadow-xl flex items-center justify-items-center col-span-3">
          <Box />
        </div>
        <div className="bg-white shadow-xl flex items-center justify-items-center col-span-2">
          <WatchDate />
        </div>

        <div className="bg-white shadow-xl flex items-center justify-items-center">
          <Hours />
        </div>
        <div className="bg-white flex shadow-xl items-center justify-items-center rounded-r-xl col-span-3">
          <button
            className="hover:bg-gray-400 text-white font-bold py-2 px-4 rounded w-full mx-3"
            style={{ backgroundColor: bgBtn_style }}
          >
            Mua Vé Ngay
          </button>
        </div>
      </div>
    </div>
  );
}
