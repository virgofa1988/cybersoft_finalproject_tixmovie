import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIHomeToolDateList } from "../../../../redux/actions/HomeToolAction/HomeToolAction";
import { selectedDate } from "../../../../redux/constants/Constants";
import "./WatchDate.css";

export default function WatchDate() {
  const dispatch = useDispatch();
  //Tạo state quản lý Date người dùng chọn để render lại UI
  let [WatchDate, setDate] = useState({});
  //Lấy thông tin Date khi người dùng chọn từ dropdown list
  const selectedDateReducer = useSelector(
    (state) => state.HomeToolReducer.SelectedDate
  );
  //Lấy thông tin Box để kiểm tra người dùng đã nhập vào phim và Box
  const selectedBoxReducer = useSelector(
    (state) => state.HomeToolReducer.SelectedBox
  );

  // console.log("Date From Redux is ", selectedDateReducer);
  //Khi Người dùng thay đổi Date chọn sẽ cập nhật lại state để render ra giao diện
  useEffect(() => {
    //Tạo object ngày mới chỉ có giá trị ngày cần
    let selectedDateUpdate = {
      watchDay: selectedDateReducer.watchDay,
    };
    setDate((WatchDate = selectedDateUpdate));
    // console.log("component didupdate");
  }, [selectedDateReducer]);
  //----------------------------------------//
  // Lấy danh sách Date từ redux để render ra dropdownlist
  const DateListHomeTool = useSelector(
    (state) => state.HomeToolReducer.DateList
  );

  //Tạo ra mảng ngày chiếu, loại bỏ các ngày giống nhau
  // Xử lý mảng phim gốc bằng cách giữ lại ngayChieuvaGioChieu
  let FilteredDateList = [];
  DateListHomeTool.map((filteredDate, index) =>
    FilteredDateList.push(filteredDate.ngayChieuGioChieu.slice(0, 10))
  );

  //Loại bỏ ngày trùng nhau (Remove Duplicated Items in Array) sử dụng hàm Set()
  let uniquedFilteredDateList = [...new Set(FilteredDateList)];
  // console.log(uniquedFilteredDateList);

  ////Render List Date
  const renderDateListHomeTool = () => {
    return uniquedFilteredDateList.map((ReducerDate, index) => {
      return (
        <li
          onClick={() => {
            dispatch({
              type: selectedDate,
              selectedDate: {
                watchDay: ReducerDate,
              },
            });
          }}
          key={index}
          className="hover:bg-blue-400 hover:text-white cursor-pointer rounded-lg py-1 px-4 "
        >
          {ReducerDate}
        </li>
      );
    });
  };
  return (
    <div className="w-full px-2 group border-r-2 text-lg ">
      <div className="DateHomeTool cursor-pointer mx-4">
        <span>{WatchDate.watchDay}</span>
      </div>
      <ul className="selectDateList z-10 absolute my-4 rounded-lg bg-white invisible group-hover:visible shadow-lg py-6 px-2 transition-all duration-300">
        {selectedBoxReducer.tenCumRap !== "Rạp" ? (
          renderDateListHomeTool()
        ) : (
          <li className="bg-red-400 z-10 text-white cursor-pointer rounded-lg py-1 px-4">
            Vui Lòng Chọn Phim và Rạp
          </li>
        )}
      </ul>
    </div>
  );
}
