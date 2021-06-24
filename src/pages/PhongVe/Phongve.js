import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPITicketBox } from "../../redux/actions/BoxAction/Boxaction";
import "./Phongve.css";

export default function Phongve(props) {
  const maLichChieu = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPITicketBox(maLichChieu));
  }, []);

  const danhSachGhe = useSelector((state) => state.TicketReducer?.danhSachGhe);
  const thongTinPhim = useSelector(
    (state) => state.TicketReducer?.thongTinPhim
  );
  console.log(danhSachGhe);
  console.log(thongTinPhim);
  return (
    <div className="PhongVe_Container">
      <div className="PhongVe_Header">
        <div className="PhongVe_Header_Info">
          <div className="PhongVe_Header_Detail">
            <div className="PhongVe_Header_Detail_DatVe">
              <p className="uppercase">
                <span className="mx-1 text-lg">01</span>Chọn ghế & Thanh Toán
              </p>
              <p className="uppercase">
                <span className="mx-1 text-lg">02</span>Kết Quả Đặt Vé
              </p>
            </div>
            <div className="PhongVe_Header_Detail_UserInfo flex">
              <div className="PhongVe_UserLogo">
                <img
                  className="UserLogo_img"
                  src="https://i.pravatar.cc/150?u=virgofa88"
                  alt="userLogo"
                />
              </div>
              <span>User Account</span>
            </div>
          </div>
        </div>
      </div>
      <div className="PhongVe_SideBar">
        <div className="PhongVe_SideBar_Info">
          <div className="SideBar_Infor SideBar_Infor_TotalPrice">
            <p>0 đ</p>
          </div>
          <div className="SideBar_Infor SideBar_Infor_RapChieu">
            <div>
              <span>C18</span>
              <span>Home</span>
            </div>
            <p>CGV - Aeon Bình Tân</p>
            <p>23/6/2021 - 12:01 - Rạp 4</p>
          </div>
          <div className="SideBar_Infor SideBar_Infor_Ghe">
            <span>Ghế</span>
            <span>0 đ</span>
          </div>
          <div className="SideBar_Infor SideBar_Infor_Combo">
            <span>
              <img src="../../img/Combo.png" alt="ComboLogo" />
              Chọn Combo
            </span>
            <span>0 đ</span>
          </div>
        </div>
        <div className="PhongVe_SideBar_Btn">
          <button className="SideBar_Btn">
            <span>Đặt Vé</span>
          </button>
        </div>
      </div>
    </div>
  );
}
