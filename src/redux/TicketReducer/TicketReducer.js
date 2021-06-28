import { CHON_GHE, TICKET_BOX_DETAIL } from "../constants/Constants";

const initialState = {
  danhSachGhe: [],
  thongTinPhim: {},
  danhSachGheChon: [],
  TongTienVe: 0,
  DayGheChon: [],
};

export const TicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case TICKET_BOX_DETAIL: {
      //Tách ghế Vip
      let arrGheVip = action.tickKetBoxDetail.danhSachGhe.filter(
        (gheVip) => gheVip.loaiGhe === "Vip"
      );
      //Tách ghế Thường
      let arrGheUpdate = action.tickKetBoxDetail.danhSachGhe.filter(
        (gheThuong) => gheThuong.loaiGhe === "Thuong"
      );
      //Merge Ghế Vip vào vị trí index thứ 48 trở đi
      arrGheUpdate.splice(48, 0, ...arrGheVip);

      state.danhSachGhe = arrGheUpdate;
      state.thongTinPhim = action.tickKetBoxDetail.thongTinPhim;
      console.log("Reducer", arrGheUpdate);

      return { ...state };
    }
    case CHON_GHE: {
      // console.log("Reducer So Ghe", action.ghe);

      //Thay Đổi Trạng Thái Đã Đặt Của Ghế
      let updateDanhSachGhe = [...state.danhSachGhe];

      // console.log("Update Danh Sach Ghe isChosing", updateDanhSachGhe);
      const index = updateDanhSachGhe.findIndex(
        (ghe) => ghe.maGhe === action.chosingGhe.maGhe
      );
      if (index !== -1 && updateDanhSachGhe[index].chosingGhe === true) {
        updateDanhSachGhe[index].chosingGhe = false;
      } else {
        updateDanhSachGhe[index].chosingGhe = true;
      }
      state.danhSachGhe = updateDanhSachGhe;
      // console.log(state.danhSachGhe);

      //Đưa ghế chọn vào mảng danhSachGheChon
      const index_1 = state.danhSachGheChon.findIndex(
        (ghe) => ghe.maGhe === action.chosingGhe.maGhe
      );
      if (index_1 !== -1) {
        state.danhSachGheChon.splice(index_1, 1);
        state.DayGheChon.splice(index_1, 1);
      } else {
        state.danhSachGheChon.push(action.chosingGhe);
        state.DayGheChon.push(action.chosingGhe.tenGhe);
      }

      //Tính Tổng Tiền Vé
      state.TongTienVe = state.danhSachGheChon.reduce((tong, ghe) => {
        return (tong += ghe.giaVe);
      }, 0);

      return { ...state };
    }
    default:
      return state;
  }
};
