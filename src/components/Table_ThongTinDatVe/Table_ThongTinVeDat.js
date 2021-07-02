import React from "react";
import Userinfo from "../../pages/Userinfo/Userinfo";

export default function Table_ThongTinVeDat(props) {
  const { userInfo } = props;
  console.log(userInfo.thongTinDatVe);

  return (
    <table className="table-auto" id="ThongTinVeDatId_Table">
      <thead>
        <tr>
          <th>Tên Phim</th>
          <th>Ngày Đặt</th>
          <th>Thời Lượng Phim</th>
          <th>Rạp</th>
          <th>Số Ghế</th>
          <th>Mã Vé</th>
          <th>Giá Vé</th>
        </tr>
      </thead>
      <tbody>
        {userInfo.thongTinDatVe?.map((veDat, index) => {
          return (
            <tr key={index}>
              <td>{veDat.tenPhim}</td>
              <td>{veDat.ngayDat.substring(0, 10)}</td>
              <td>{veDat.thoiLuongPhim}</td>
              <td>{veDat.danhSachGhe[0].tenHeThongRap}</td>
              <td>
                <div className="flex flex-wrap flex-row justify-center">
                  {veDat.danhSachGhe.map((ghe, index) => {
                    return (
                      <div
                        key={index}
                        className="p-2 text-white m-2 bg-red-400 font-semibold shadow-xl"
                      >
                        {ghe.tenGhe}
                      </div>
                    );
                  })}
                </div>
              </td>
              <td>{veDat.maVe}</td>
              <td>{veDat.giaVe.toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
