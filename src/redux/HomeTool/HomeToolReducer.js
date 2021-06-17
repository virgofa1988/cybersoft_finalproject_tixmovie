import {
  getHomeToolPhimList,
  selectedPhim,
  getHomeToolBoxList,
  selectedBox,
  getHomeToolDateList,
  selectedDate,
  selectedHour,
} from "../constants/Constants";

const stateDefault = {
  //Phim
  PhimListHomeTool: [],
  SelectedPhim: { tenPhim: "Phim", maPhim: 0 },
  //Box
  BoxListHomeTool: [{ tenCumRap: "Rạp", maCumRap: "Rạp", lichChieuPhim: [] }],
  SelectedBox: { tenCumRap: "Rạp", maCumRap: "Rạp" },
  //Date
  DateList: [],
  SelectedDate: { watchDay: "Chọn Ngày" },
  //Hours
  HoursList: [],
  SelectedHours: { watchHour: "Giờ", isHourPicked: false },
};

export const HomeToolReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case getHomeToolPhimList: {
      return { ...state, PhimListHomeTool: action.PhimList };
    }
    case selectedPhim: {
      // console.log(action.selectedPhim);
      state.SelectedPhim = action.selectedPhim;
      return { ...state };
    }
    case getHomeToolBoxList: {
      // console.log(action.heThongRapChieu);
      let newBoxList = [];
      for (let HeThongRap of action.heThongRapChieu) {
        // console.log(HeThongRap.cumRapChieu); // 1 Mảng
        for (let CumRap of HeThongRap.cumRapChieu) {
          // console.log(CumRap);
          newBoxList.push({
            tenCumRap: CumRap.tenCumRap,
            maCumRap: CumRap.maCumRap,
            lichChieuPhim: CumRap.lichChieuPhim,
          });
        }
      }
      // console.log(newBoxList);
      return { ...state, BoxListHomeTool: newBoxList };
    }
    case selectedBox: {
      // console.log(action.selectedBox);
      state.SelectedBox = action.selectedBox;
      //Sau Khi người dùng chọn rạp mình có mã rạp nên tìm tới mã đó và lấy ra lịch chiếu phim
      const SelectedRapByUser = state.BoxListHomeTool.find(
        (Rap) => Rap.maCumRap === action.selectedBox.maCumRap
      );
      console.log(SelectedRapByUser);
      //Lấy danh sách ngày chiếu phim gán vào DateList
      state.DateList = SelectedRapByUser.lichChieuPhim;
      return { ...state };
    }
    case selectedDate: {
      //Render lại UI ngày người dùng đã chọn
      state.SelectedDate = action.selectedDate;
      //Sau Khi Có Ngày Đã Chọn, mình sẽ lọc ra khung giờ xem tương ứng trong ngày
      const watchDayByUser = state.DateList.filter(
        (selectedDay) =>
          selectedDay.ngayChieuGioChieu.slice(0, 10) ===
          action.selectedDate.watchDay
      );
      // console.log("Hours List in WatchDate ", watchDayByUser);
      state.HoursList = watchDayByUser;
      return { ...state };
    }
    case selectedHour: {
      console.log(action.isHourPicked);

      return { ...state, SelectedHours: action.SelectedHours };
    }
  }
  return { ...state };
};
