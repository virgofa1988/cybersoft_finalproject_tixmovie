import { CHON_GHE, TICKET_BOX_DETAIL } from "../constants/Constants";

const initialState = {
  //Danh Sách Ghế Load từ API về, có thêm isChosing để phân loại ghế đang lựa chọn
  danhSachGhe: [],
  //Chứa Thông Tin của Rạp và Phim đang hiển thị trong phòng vé
  thongTinPhim: {},
  //Danh Sach này chứa các ghế người dùng đang chọn nhưng chưa book, có thể thêm/remove lúc lựa chọn
  danhSachGheChon: [],
  TongTienVe: 0,
  //Dãy Ghế Chọn này chỉ lữu mảng chuổi là tên ghế để load ra PhongVe_SideBar tên các ghế đang đặt
  DayGheChon: [],
  //Dùng để hỗ trợ reset lại Modal Timer của thời gian giữ vé
  TimeReset_Modal: false,
  //Quản lý mảng ghế dùng để book vé khi gửi lên API cho đúng định dạng dữ Liệu
  danhSachGheDatVe: [],
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
      state.danhSachGheChon = [];
      state.TongTienVe = 0;
      state.DayGheChon = [];
      state.thongTinPhim = action.tickKetBoxDetail.thongTinPhim;
      // console.log("Reducer", arrGheUpdate);

      return { ...state };
    }
    case CHON_GHE: {
      //Thay Đổi Trạng Thái Của Ghế Ghi Đang Chọn
      let updateDanhSachGhe = [...state.danhSachGhe];
      //Tìm vị trí ghế đang chọn
      const index = updateDanhSachGhe.findIndex(
        (ghe) => ghe.maGhe === action.chosingGhe.maGhe
      );
      //Kiểm tra xem đã chọn chưa, nếu chọn rồi thì thay đổi thành chưa chọn
      if (index !== -1 && updateDanhSachGhe[index].chosingGhe === true) {
        updateDanhSachGhe[index].chosingGhe = false;

        //Nếu chưa chọn thay đổi thành đang chọn
      } else {
        updateDanhSachGhe[index].chosingGhe = true;
      }
      state.danhSachGhe = updateDanhSachGhe;
      // console.log(state.danhSachGhe);

      //Đưa ghế chọn vào mảng danhSachGheChon - Dùng để xử lý riêng mảng các ghế đang chọn, như tính tổng hay submit lên API để đặt mua
      //Tìm ghế trong mảng đang chọn
      const index_1 = state.danhSachGheChon.findIndex(
        (ghe) => ghe.maGhe === action.chosingGhe.maGhe
      );
      //Tìm Thấy thì bỏ đi
      if (index_1 !== -1) {
        state.danhSachGheChon.splice(index_1, 1);
        state.DayGheChon.splice(index_1, 1);
      } else {
        //Tìm không thấy thì push nó vô
        state.danhSachGheChon.push(action.chosingGhe);
        state.DayGheChon.push(action.chosingGhe.tenGhe);
      }

      //Tính Tổng Tiền Vé
      state.TongTienVe = state.danhSachGheChon.reduce((tong, ghe) => {
        return (tong += ghe.giaVe);
      }, 0);
      //Tạo mảng ghế đặt với các trường thuộc tính giống API yêu cầu gửi lên từ danhSachGheChon
      //Sử dụng hàm Map, và ES6 restParams để remove các Property(Key) không cần sử dụng
      //Ở đây là chỉ giữ lại 2 Keys là maGhe,giaVe
      const DayGheDatUpdate = state.danhSachGheChon.map(
        ({
          daDat,
          isChosing,
          loaiGhe,
          maRap,
          stt,
          taiKhoanNguoiDat,
          tenGhe,
          ...keepProperties
        }) => keepProperties
      );
      state.danhSachGheDatVe = DayGheDatUpdate;
      return { ...state };
    }

    default:
      return state;
  }
};
