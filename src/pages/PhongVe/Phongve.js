import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPITicketBox } from "../../redux/actions/BoxAction/Boxaction";
import "./Phongve.css";
import { ExclamationCircleOutlined } from "@ant-design/icons";

export default function Phongve(props) {
  const maLichChieu = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAPITicketBox(maLichChieu));
  }, []);

  let [isGheChosed, setGheState] = useState(false);
  // let isGheChosed = true;
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
              <button
                onClick={() => {
                  setGheState(!isGheChosed);
                }}
              >
                Click to Test
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="PhongVe_SideBar">
        <div className="PhongVe_SideBar_Info">
          {/* Thông Tin Tổng Tiền Vé */}
          <div className="SideBar_Infor SideBar_Infor_TotalPrice">
            <p>0 đ</p>
          </div>

          {/* Thông Tin Về Rạp Chiếu */}
          <div className="SideBar_Infor SideBar_Infor_RapChieu">
            <div>
              <span>C18</span>
              <span>Home</span>
            </div>
            <p>CGV - Aeon Bình Tân</p>
            <p>23/6/2021 - 12:01 - Rạp 4</p>
          </div>

          {/* Thông Tin Ghế Đặt */}
          <div className="SideBar_Infor SideBar_Infor_Ghe">
            <span>Ghế</span>
            <span>0 đ</span>
          </div>

          {/* Thông Tin Combo */}
          <div className="SideBar_Infor SideBar_Infor_Combo">
            <span>
              <img src="../../img/Combo.png" alt="ComboLogo" />
              Chọn Combo
            </span>
            <span>0 đ</span>
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
            {isGheChosed ? (
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
            {isGheChosed ? (
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
          {isGheChosed ? (
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
                      <p>Thông Tin Rạp Ở Đây</p>
                      <p>Giờ Chiếu Rạp Ở Đây</p>
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
                    <div className="DayGhe_Container grid grid-cols-12">
                      {danhSachGhe.map((ghe, index) => {
                        return (
                          <div className="col-span-1">
                            {ghe.loaiGhe === "Thuong" ? (
                              <button
                                className="bg-gray-600 gheBTN"
                                key={index}
                              >
                                {ghe.tenGhe}
                              </button>
                            ) : (
                              <button
                                className="bg-yellow-600 gheBTN gheVIP"
                                key={index}
                              >
                                {ghe.tenGhe}
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="PhongVe_DayGhe_LoaiGhe"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
