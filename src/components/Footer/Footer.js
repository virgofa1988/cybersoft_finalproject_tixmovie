import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer_container py-5 text-white">
      <div className="footer_section">
        <div className="footer_mobile_top lg:px-52 flex flex-row">
          <div className="footer_mobile_top_left w-1/2 md:w-1/3 flex flex-col md:flex-row flex-wrap  text-center md:text-left">
            <p className="w-full">TIX</p>
            <div className="footer_mobile_top_left_left md:w-1/2">
              <ul className="footer_mobile_top_left_list mb-0">
                {/* <li>TIX</li> */}
                <li>FAQ</li>
                <li className="my-2">Brand Guidelines</li>
              </ul>
            </div>
            <div className="footer_mobile_top_left_right md:w-1/2">
              <ul className="mb-0 footer_mobile_top_left_list">
                <li></li>
                <li>Thoả Thuận Sử Dụng</li>
                <li className="my-2">Chính Sách Bảo Mật</li>
              </ul>
            </div>
          </div>
          <div className="footer_mobile_top_center md:w-1/3 hidden md:block ">
            <h1 className="text-white ml-3 text-center">Đối Tác</h1>
            <div className="doiTacList">
              <div className="doiTacListrow flex mb-2">
                <a href="">
                  <img src="https://i.ibb.co/qdFj9dC/cgv.png" alt="cgv" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/0Fr9MgB/bhd.png" alt="cgv" />
                </a>
                <a href="">
                  <img
                    src="https://i.ibb.co/qDbGdBX/galaxycine.png"
                    alt="cgv"
                  />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/cwmKXYS/cinestar.png" alt="cgv" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/hRDFsvL/lotte.png" alt="cgv" />
                </a>
              </div>
              <div className="doiTacListrow flex mb-2">
                <a href="">
                  <img src="https://i.ibb.co/JzFt1TK/megags.png" alt="cgv" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/dmwqNLN/bt.jpg" alt="cgv" />
                </a>
                <a href="">
                  <img
                    src="https://i.ibb.co/M8bQP1D/dongdacinema.png"
                    alt="cgv"
                  />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/KDS2fJS/TOUCH.png" alt="cgv" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/mCFM7CQ/cnx.jpg" alt="cgv" />
                </a>
              </div>
              <div className="doiTacListrow flex mb-2">
                <a href="">
                  <img src="https://i.ibb.co/z7R48VW/STARLIGHT.png" alt="cgv" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/QQRSvht/dcine.png" alt="cgv" />
                </a>
                <a href="">
                  <img
                    src="https://i.ibb.co/mJCB5jQ/zalopay-icon.png"
                    alt="cgv"
                  />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/m4KjWCb/payoo.jpg" alt="cgv" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/r3nPSyr/VCB.png" alt="cgv" />
                </a>
              </div>
              <div className="doiTacListrow flex mb-2">
                <a href="">
                  <img src="https://i.ibb.co/CmLW0Pm/AGRIBANK.png" alt="cgv" />
                </a>
                <a href="">
                  <img
                    src="https://i.ibb.co/cx8DVwB/VIETTINBANK.png"
                    alt="cgv"
                  />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/x5QtPkL/IVB.png" alt="cgv" />
                </a>
                <a href="">
                  <img src="https://i.ibb.co/k9VvcZf/123go.png" alt="cgv" />
                </a>
                <a href="">
                  <img
                    src="https://static-znews.zadn.vn/images/logo-zing-home.svg"
                    alt="cgv"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_mobile_top_right w-1/2 md:w-1/3 flex flex-col md:flex-row">
            <div className="footer_mobile_bottom_left md:w-1/2 mx-auto text-center mb-2">
              <h1 className="w-full text-white">MOBILE APP</h1>
              <a
                className="mx-2"
                target="_blank"
                href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
              >
                <img
                  className="bottom_left_img"
                  src="../../img/Apple.png" //.. Đầu là ra khỏi folder Footer, cái tiếp theo ra khỏi folder "Component"
                  alt="applestore"
                />
              </a>
              <a
                className="mx-2"
                target="_blank"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                <img
                  className="bottom_left_img"
                  src="../../img/GoogleStore.png"
                  alt="GoogleStore"
                />
              </a>
            </div>
            <div className="footer_mobile_bottom_right text-center md:w-1/2 mx-auto">
              <h1 className="w-full text-white">SOCIAL</h1>
              <a
                className="mx-2"
                className="mx-1"
                target="_blank"
                href="https://www.facebook.com/tix.vn/"
              >
                <img
                  className="bottom_left_img"
                  src="../../img/facebook.png"
                  alt="facebook"
                />
              </a>
              <a
                className="mx-2"
                target="_blank"
                href="https://zalo.me/tixdatve"
              >
                <img
                  className="bottom_left_img"
                  src="../../img/zalo.png"
                  alt="zalo"
                />
              </a>
            </div>
          </div>
        </div>
        <hr style={{ opacity: "0.2" }} className="my-3" />
        <div className="footer_mobile_bottom text-center">
          <div className="footer_mobile_bottom_left">
            <div className="zion_picture my-2">
              <img width="80px" src="./img/zion.jpg" alt="zion" />
            </div>
            <div className="tix_contact">
              <h3 className="text-white">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </h3>
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <p>
                Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br /> đăng
                ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch
                và đầu tư Thành phố Hồ Chí Minh
              </p>
              <p>
                Số Điện Thoại (Hotline): 1900 545 436 <br /> Email:{" "}
                <a href="emailto:support@tix.vn" className="text-red-600">
                  support@tix.vn
                </a>
              </p>
            </div>
          </div>
          <div className="footer_mobile_bottom_right">
            <img
              width="130px"
              src="https://cybersoft-movie-phutran.web.app/static/media/confirm.f3d3b02c.png"
              alt="boCongThuong"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
