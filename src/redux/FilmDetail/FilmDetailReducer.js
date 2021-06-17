import { getFilmDetail } from "../constants/Constants";

const initialState = {
  PhimDetail: {},
  TheLoaiPhim: [
    { maNhom: "GP01", theLoai: "Phim Hành Động", filmMark: "C16" },
    { maNhom: "GP02", theLoai: "Phim Hành Động", filmMark: "C16" },
    { maNhom: "GP03", theLoai: "Phim Hài Hước", filmMark: "P" },
    { maNhom: "GP04", theLoai: "Phim Tình Cảm", filmMark: "C13" },
    { maNhom: "GP05", theLoai: "Phim Viễn Tưởng", filmMark: "C13" },
    { maNhom: "GP06", theLoai: "Phim Hoạt Hình", filmMark: "P" },
    { maNhom: "GP07", theLoai: "Phim Lịch Sử", filmMark: "P" },
    { maNhom: "GP08", theLoai: "Phim Sinh Tồn", filmMark: "C13" },
    { maNhom: "GP09", theLoai: "Phim Hành Động", filmMark: "C16" },
    { maNhom: "GP10", theLoai: "Phim Thiếu Nhi", filmMark: "P" },
    { maNhom: "GP11", theLoai: "Phim Hoạt Hình", filmMark: "P" },
    { maNhom: "GP12", theLoai: "Phim Tình Cảm", filmMark: "C16" },
    { maNhom: "GP13", theLoai: "Phim Hành Động", filmMark: "C16" },
    { maNhom: "GP14", theLoai: "Phim Kinh Dị", filmMark: "C18" },
    { maNhom: "GP15", theLoai: "Phim Hành Động", filmMark: "C16" },
  ],
};

export const FilmDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case getFilmDetail: {
      //Tìm xem phim gửi lên thuộc nhóm nào ở trên, lấy index để tí đưa vào loaiPhim cho state.
      // console.log(action.PhimDetail);

      let index = state.TheLoaiPhim.findIndex(
        (phim) => phim.maNhom === action.PhimDetail.maNhom
      );

      let updatePhimDetail = {
        ...action.PhimDetail,
        thoiLuong:
          action.PhimDetail.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]
            .thoiLuong,
        loaiPhim: state.TheLoaiPhim[index].theLoai,
        filmMark: state.TheLoaiPhim[index].filmMark,
      };
      // console.log("Update Phim co Thoi Luong", updatePhimDetail);
      state.PhimDetail = updatePhimDetail;
      return { ...state };
    }
  }
  return { ...state };
};
