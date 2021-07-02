import React from "react";
import Header from "../../components/Header/Header";
import { Tabs, Radio } from "antd";
import {
  AppleOutlined,
  BookOutlined,
  EditOutlined,
  IdcardOutlined,
  LockOutlined,
  LoginOutlined,
  MailOutlined,
  PhoneOutlined,
  RightSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./UserinfoLayout.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userAction/useraction";
import Table_ThongTinVeDat from "../../components/Table_ThongTinDatVe/Table_ThongTinVeDat";
const { TabPane } = Tabs;

export default function UserinfoLayout() {
  const dispatch = useDispatch();
  //Lấy taiKhoan để xác nhận User đã login và truyền vào hàm call api
  const { taiKhoan } = useSelector((state) => state.UserReducer.userAccount);
  // console.log("Tài Khoản", taiKhoan);

  //Call API Để Lấy Thông Tin Tài Khoản Sau Khi User Đã Đăng Nhập Thành Công, data gửi lên API là {taiKhoan:"string"}
  useEffect(() => {
    dispatch(getUserInfo({ taiKhoan: taiKhoan }));
  }, []);

  function callback(key) {
    console.log(key);
  }

  //Sau Khi Call API đã có dữ liệu user đc đưa vào store trên redux, ta lấy về để sử dụng
  const userInfo = useSelector((state) => state.UserReducer.userInfo);
  console.log("User Information at UI", userInfo);

  return (
    <div className="userInfoLayout">
      <Header />
      {/* //User Information */}
      <div className="userInfoLayout_Body">
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          tabPosition="left"
          type="card"
          large
          animated
        >
          <TabPane
            tab={
              <div className="userinfo__menu">
                <UserOutlined style={{ fontSize: "2rem" }} />
                Thông Tin Cá Nhân
              </div>
            }
            key="1"
          >
            <div>
              <hr style={{ width: "95%", marginBottom: "1rem" }} />
              <div className="userName flex h-26">
                <div className="user__icon  ">
                  <IdcardOutlined
                    style={{ fontSize: "3rem", color: "rgba(220, 38, 38)" }}
                  />
                </div>
                <div className="user__Name ">
                  <h1>
                    Tên Khách Hàng:{" "}
                    <span className="text-red-600">{userInfo.hoTen}</span>
                  </h1>
                  <p className="text-gray-400">
                    Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị
                    trên website.
                  </p>
                  <p className="text-gray-400">
                    Bạn có thể thay đổi ở phần thay đổi thông tin cá nhân
                  </p>
                </div>
              </div>
              <hr style={{ width: "95%", marginBottom: "1rem" }} />
              <div className="userName flex h-26">
                <div className="user__icon ">
                  <LoginOutlined
                    style={{ fontSize: "3rem", color: "rgba(220, 38, 38)" }}
                  />
                </div>
                <div className="user__Name">
                  <h1>
                    Tài Khoản:{" "}
                    <span className="text-red-600">{userInfo.taiKhoan}</span>
                  </h1>
                  <p className="text-gray-400">
                    Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị
                    trên website.
                  </p>
                </div>
              </div>
              <hr style={{ width: "95%", marginBottom: "1rem" }} />
              <div className="userName flex h-26">
                <div className="user__icon ">
                  <LockOutlined
                    style={{ fontSize: "3rem", color: "rgba(220, 38, 38)" }}
                  />
                </div>
                <div className="user__Name">
                  <h1>
                    Mật Khẩu: <span className="text-red-600">**********</span>
                  </h1>
                  <p className="text-gray-400">
                    Mật khẩu cần được kết hợp bởi nhiều chữ cái, số và ký tự đặc
                    biệt để bảo mật tài khoản.
                  </p>
                </div>
                <div className="user__Btn m-auto">
                  <button className="btnMuaVeFilm ">Thay Đổi</button>
                </div>
              </div>
              <hr style={{ width: "95%", marginBottom: "1rem" }} />
              <div className="userName flex h-26">
                <div className="user__icon col-span-1">
                  <PhoneOutlined
                    style={{ fontSize: "3rem", color: "rgba(220, 38, 38)" }}
                  />
                </div>
                <div className="user__Name ">
                  <h1>
                    Số Điện Thoại:{" "}
                    <span className="text-red-600">{userInfo.soDT}</span>
                  </h1>
                  <p className="text-gray-400">
                    Họ và tên chủ tài khoản, cũng là tên của tài khoản hiển thị
                    trên website.
                  </p>
                  <p className="text-gray-400">
                    Bạn có thể thay đổi ở phần thay đổi thông tin cá nhân
                  </p>
                </div>
              </div>
              <hr style={{ width: "95%", marginBottom: "1rem" }} />
              <div className="userName flex h-26">
                <div className="user__icon">
                  <MailOutlined
                    style={{ fontSize: "3rem", color: "rgba(220, 38, 38)" }}
                  />
                </div>
                <div className="user__Name ">
                  <h1>
                    Email:{" "}
                    <span className="text-red-600">{userInfo.email}</span>
                  </h1>
                  <p className="text-gray-400">
                    Email có thể được sử dụng để thay đổi mật khẩu khi không có
                    công cụ bảo mật nào khác được bật.
                  </p>
                  <p className="text-gray-400">
                    Cũng như nhận các tin tức hoạt động của tài khoản.
                  </p>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <div className="userinfo__ThongTinVe userinfo__menu">
                <IdcardOutlined style={{ fontSize: "2rem" }} />
                Thông Tin Đặt Vé
              </div>
            }
            key="2"
          >
            <div className="ThongTinVeDat_Table">
              <div className="VeDat__Table">
                <Table_ThongTinVeDat userInfo={userInfo} />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
