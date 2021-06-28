import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPITicketBox } from "../../redux/actions/BoxAction/Boxaction";
import "./Phongve.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { CHON_GHE } from "../../redux/constants/Constants";
import { MyDate } from "../../components/Date/Date";

const currentDate = new Date();

export default function Phongve(props) {
  const maLichChieu = props.match.params.id;
  const dispatch = useDispatch();

  const danhSachGhe = useSelector((state) => state.TicketReducer?.danhSachGhe);
  const DayGheChon = useSelector((state) => state.TicketReducer?.DayGheChon);
  const TongTienVe = useSelector((state) => state.TicketReducer?.TongTienVe);
  const thongTinPhim = useSelector(
    (state) => state.TicketReducer?.thongTinPhim
  );
  useEffect(() => {
    dispatch(getAPITicketBox(maLichChieu));
  }, []);

  // console.log(danhSachGhe);
  console.log(thongTinPhim);

  //Xử lý hàm chọn ghế
  const chonGhe = (ghe) => {
    // console.log(soGhe);
    //Add property isChosing to check if user is chosing Ghe
    const chosingGhe = { ...ghe, isChosing: false };
    dispatch({
      type: CHON_GHE,
      chosingGhe: chosingGhe,
    });
  };

  return (
    <div className="PhongVe_Container">
      <div className="PhongVe_Header">
        <div className="PhongVe_Header_Info">
          <div className="PhongVe_Header_Detail">
            <div className="PhongVe_Header_Detail_DatVe_Mobile">
              <p className="uppercase">
                <span className="mx-1 text-lg">01</span>Chọn ghế
              </p>
            </div>
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
          {/* Thông Tin Tổng Tiền Vé */}
          <div className="SideBar_Infor SideBar_Infor_TotalPrice">
            <p>{TongTienVe.toLocaleString()} đ</p>
          </div>

          {/* Thông Tin Về Rạp Chiếu */}
          <div className="SideBar_Infor SideBar_Infor_RapChieu">
            <div>
              <span className="rateC">C18</span>
              <span className="font-semibold text-lg ml-2">
                {thongTinPhim.tenPhim}
              </span>
            </div>
            <p>{thongTinPhim.tenCumRap}</p>
            <p>
              {MyDate(currentDate)} - {thongTinPhim.tenRap}
            </p>
          </div>

          {/* Thông Tin Ghế Đặt */}
          <div className="SideBar_Infor SideBar_Infor_Ghe">
            <span className="flex flex-wrap">
              Ghế:{""}
              {DayGheChon.map((ghe, index) => {
                return <p key={index}> {ghe},</p>;
              })}{" "}
            </span>
            <span>{TongTienVe.toLocaleString()} đ</span>
          </div>

          {/* Thông Tin Combo */}
          <div className="SideBar_Infor SideBar_Infor_Combo">
            <span>
              <img src="../../img/Combo.png" alt="ComboLogo" />
              Chọn Combo
            </span>
            <span>0đ</span>
          </div>

          {/* Thẻ form email */}
          <div className="SideBar_Infor SideBar_Infor_Form form-email">
            <input
              type="text"
              name="email"
              autoComplete="off"
              placeholder="example@gmail.com"
              required
            />
            <label className="label-name" for="email">
              <span className="content-name">Email</span>
            </label>
          </div>

          {/* Thẻ form cho Phone */}
          <div className="SideBar_Infor SideBar_Infor_Form form-phone">
            {/* Thẻ input phải nằm trước label để sử dụng kĩ thuật focus / valid vào thẻ input thì thay đổi vị trí label (và label phải nằm sau input để có thể +) */}
            <input type="text" name="phone" autoComplete="off" required />
            <label className="label-name" for="phone">
              <span className="content-name">Phone</span>
            </label>
          </div>

          {/* Thẻ form mã giảm giá */}
          <div className="SideBar_Infor SideBar_Infor_Form form-maGiamGia">
            <input
              type="text"
              name="maGiamGia"
              autoComplete="off"
              required
              placeholder="Nhập Tại Đây"
            />
            <label className="label-name" for="maGiamGia">
              <span className="content-name">Mã giảm giá</span>
            </label>
            {DayGheChon.length !== 0 ? (
              <button style={{ backgroundColor: "#4cb050" }}>
                <span>Áp dụng</span>
              </button>
            ) : (
              <button style={{ backgroundColor: "#9b9b9b" }}>
                <span>Áp dụng</span>
              </button>
            )}
          </div>

          {/* Dịch Vụ Thanh Toán */}
          <div className="SideBar_Infor SideBar_Infor_Payment mb-10">
            <p className="italic text-gray-600 mt-4">Hình thức thanh toán</p>
            {DayGheChon.length !== 0 ? (
              <div className="Payment_Option_Container w-full">
                <div className="Payment_Option_Wrapper animate-animated animate__bounceInRight">
                  {/* Zalo */}
                  <label
                    for="payment_option"
                    className="payment_option_1 payment_option"
                  >
                    <span className="radio-icon mr-4">
                      <input
                        type="radio"
                        name="payment_option"
                        id="payment_option"
                      />
                      <span className="checkMark"></span>
                    </span>
                    <span className="radio-info radio-zalo">
                      <div className="radio-info-container info-container-zalo ">
                        <img
                          src="https://cybersoft-movie-phutran.web.app/static/media/methodZalo.317fab65.jpg"
                          alt="zaloPay"
                        />
                        <p className="mb-0">
                          Thanh toán qua ZaloPay{" "}
                          <span className="text-red-600 block">
                            x3 vé CGV 79k/vé cho tất cả khách hàng
                          </span>
                        </p>
                      </div>
                    </span>
                  </label>
                  {/* Credit Card */}
                  <label
                    for="payment_option2"
                    className="payment_option_2  payment_option"
                  >
                    <span className="radio-icon mr-4">
                      <input
                        type="radio"
                        name="payment_option"
                        id="payment_option2"
                      />
                      <span className="checkMark"></span>
                    </span>
                    <span className="radio-info radio-zalo">
                      <div className="radio-info-container info-container-credit ">
                        <img
                          src="https://image.pngaaa.com/819/176819-middle.png"
                          alt="creditCard"
                        />
                        <p className="mb-0">Visa, Master, JCB</p>
                      </div>
                    </span>
                  </label>
                  {/* ATM */}
                  <label
                    for="payment_option3"
                    className="payment_option_3  payment_option"
                  >
                    <span className="radio-icon mr-4">
                      <input
                        type="radio"
                        name="payment_option"
                        id="payment_option3"
                      />
                      <span className="checkMark"></span>
                    </span>
                    <span className="radio-info radio-zalo">
                      <div className="radio-info-container info-container-atm ">
                        <img
                          src="https://previews.123rf.com/images/robertindiana/robertindiana1811/robertindiana181100100/112190736-here-is-an-atm-card-which-is-shown-with-a-debit-card-which-is-often-thought-to-be-the-same-as-an-atm.jpg"
                          alt="atmCard"
                        />
                        <p className="mb-0">Thẻ Nội Địa ATM</p>
                      </div>
                    </span>
                  </label>
                  {/* Thanh Toán Tại Cửa Hàng Tiện Ích */}
                  <label
                    for="payment_option4"
                    className="payment_option_4  payment_option"
                  >
                    <span className="radio-icon mr-4">
                      <input
                        type="radio"
                        name="payment_option"
                        id="payment_option4"
                      />
                      <span className="checkMark"></span>
                    </span>
                    <span className="radio-info radio-zalo">
                      <div className="radio-info-container info-container-payhoo ">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk19TGgPbcr3EJYDzIILWxwn9o3GYL0p6dZWeq6g4Jc6ZCHXvb7NaPc8isQ5yrO0Otw3A&usqp=CAU"
                          alt="creditCard"
                        />
                        <p className="mb-0">Thanh Toán Tại Cửa Hàng Tiện Ích</p>
                      </div>
                    </span>
                  </label>
                </div>
              </div>
            ) : (
              <div className="Payment_Notice text-red-600 animate-animated animate-bounce">
                <p className="italic text-xs ">
                  Vui lòng chọn ghế để hiển thị phương thức thanh toán
                </p>
              </div>
            )}
          </div>
          {/* Notification */}
          <div className="SideBar_Infor SideBar_Infor_Notification text-center">
            <ExclamationCircleOutlined
              style={{ color: "red", fontSize: "0.8rem" }}
            />
            <p className="text-xs">
              Vé đã mua không thể đổi hoặc hoàn tiền Mã vé sẽ được gửi qua tin
              nhắn <span className="text-yellow-500">ZMS</span> (tin nhắn Zalo)
              và <span className="text-yellow-500">Email</span> đã nhập.
            </p>
          </div>
        </div>
        <div className="PhongVe_SideBar_Btn">
          {DayGheChon.length !== 0 ? (
            <button
              className="SideBar_Btn "
              style={{
                background: "linear-gradient(223deg,#b4ec51 0,#429321 100%)",
              }}
            >
              <span>Đặt Vé</span>
            </button>
          ) : (
            <button
              className="SideBar_Btn"
              style={{ backgroundColor: "#afafaf" }}
            >
              <span>Đặt Vé</span>
            </button>
          )}
        </div>
      </div>
      <div className="PhongVe_Content">
        <div className="PhongVe_Content_Container">
          <div className="PhongVe_ExitWay"> </div>
          <div className="PhongVe_DayGhe">
            <div className="PhongVe_DayGhe_Content">
              <div className="PhongVe_DayGhe_Main">
                <div className="PhongVe_DayGhe_RapInfo">
                  <div className="RapInfo_Rap">
                    <img
                      src="https://cybersoft-movie-phutran.web.app/static/media/cinema1.26525304.png"
                      alt="CGV"
                    />
                    <div className="RapInfo_Rap_Detail">
                      <p>{thongTinPhim.tenRap}</p>
                      <p>{thongTinPhim.ngayChieu}</p>
                    </div>
                  </div>
                  <div className="RapInfo_Time">
                    <span>Thời gian giữ ghế</span>
                    <p>10:00</p>
                  </div>
                </div>
                <div className="PhongVe_DayGhe_GheInfo">
                  <img src="../img/screen.png" alt="screen" />
                  <div className="PhongVe_DayGhe_Ghe">
                    <div className="DayGhe_Container flex flex-wrap">
                      {danhSachGhe.map((ghe, index) => {
                        if (ghe.daDat) {
                          return (
                            <div className="DayGhe_Ghe">
                              <button
                                className=" gheBTN relative"
                                key={index}
                                disabled
                                style={{ cursor: "not-allowed" }}
                              >
                                <i className="fas fa-couch text-gray-200 text-3xl">
                                  <span className="GheInfo_soGhe">
                                    {ghe.tenGhe}
                                  </span>
                                </i>
                              </button>
                            </div>
                          );
                        } else {
                          let gheThuongStyle = "";
                          let gheVipStyle = "";
                          {
                            if (ghe.chosingGhe) {
                              gheVipStyle = `fas fa-couch text-green-600 text-3xl`;
                              gheThuongStyle = `fas fa-couch text-green-600 text-3xl`;
                            } else {
                              gheVipStyle = `fas fa-couch text-yellow-600 text-3xl`;
                              gheThuongStyle = `fas fa-couch text-gray-600 text-3xl`;
                            }
                          }

                          return (
                            <div className="DayGhe_Ghe ">
                              {ghe.loaiGhe === "Thuong" ? (
                                <button
                                  onClick={() => {
                                    chonGhe(ghe);
                                  }}
                                  className=" gheBTN relative"
                                  key={index}
                                >
                                  <i className={gheThuongStyle}>
                                    <span className="GheInfo_soGhe">
                                      {ghe.tenGhe}
                                    </span>
                                  </i>
                                </button>
                              ) : (
                                <button
                                  onClick={() => {
                                    chonGhe(ghe);
                                  }}
                                  className=" gheBTN gheVIP relative"
                                  key={index}
                                >
                                  <i className={gheVipStyle}>
                                    <span className="GheInfo_soGhe">
                                      {ghe.tenGhe}
                                    </span>
                                  </i>
                                </button>
                              )}
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="PhongVe_DayGhe_LoaiGhe">
                  <div className="LoaiGhe_Wrapper grid grid-cols-2 md:grid-cols-4">
                    <div className="DayGhe_Ghe">
                      <button className="gheBTN" disabled>
                        <i className="fas fa-couch text-gray-200 text-2xl"></i>
                      </button>
                      <p>Ghế đã đặt</p>
                    </div>
                    <div className="DayGhe_Ghe">
                      <button className="gheBTN" disabled>
                        <i className="fas fa-couch text-yellow-600 text-2xl"></i>
                      </button>
                      <p>Ghế VIP</p>
                    </div>
                    <div className="DayGhe_Ghe">
                      <button className="gheBTN" disabled>
                        <i className="fas fa-couch text-gray-600 text-2xl"></i>
                      </button>
                      <p>Ghế thường</p>
                    </div>
                    <div className="DayGhe_Ghe">
                      <button className="gheBTN" disabled>
                        <i className="fas fa-couch text-green-600 text-2xl"></i>
                      </button>
                      <p>Ghế đang chọn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
