import React, { useEffect, Fragment, useRef, useState } from "react";
import Header from "../../components/Header/Header";
import { Dialog, Transition } from "@headlessui/react";
import { Tabs, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userAction/useraction";
import { NavLink } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { stubTrue } from "lodash";
// import "./Userinfo.css";
const { TabPane } = Tabs;

export default function Userinfo() {
  //Formik
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      email: "",
      soDt: "",
      maNhom: "GP01",
      maLoaiNguoiDung: "KhachHang",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().required("**Please enter UserName"),
      matKhau: Yup.string()
        .required("**Please enter your Password**")
        .min(6, "Password should be at least 6 characters")
        .max(32, "Password should be at least 32 Characters"),
      hoTen: Yup.string().required("**Please enter Full Name"),
      email: Yup.string()
        .required("**Please enter your email")
        .email("Invalid Email"),
      soDt: Yup.string()
        .required("**Please enter your mobile phone")
        .matches(phoneRegExp, "Invalid Mobile Phone"),
    }),
    onSubmit: (values) => {
      console.log("Values SignUp UserAccount", values);
      // dispatch(userSignupAPI(values));
    },
  });

  function callback(key) {
    console.log(key);
  }
  const dispatch = useDispatch();

  //Lấy taiKhoan để xác nhận User đã login và truyền vào hàm call api
  const { taiKhoan } = useSelector((state) => state.UserReducer.userAccount);
  // console.log("Tài Khoản", taiKhoan);

  //Call API Để Lấy Thông Tin Tài Khoản Sau Khi User Đã Đăng Nhập Thành Công, data gửi lên API là {taiKhoan:"string"}
  useEffect(() => {
    dispatch(getUserInfo({ taiKhoan: taiKhoan }));
  }, []);

  //Sau Khi Call API đã có dữ liệu user đc đưa vào store trên redux, ta lấy về để sử dụng
  const userInfo = useSelector((state) => state.UserReducer.userInfo);
  console.log("User Information at UI", userInfo);

  //Open/close Nav Button
  let [trigger, setTrigger] = useState(stubTrue);
  const openNav = (trigger) => {
    const navBar1 = document.querySelector(".__userinfo .ant-tabs-nav");
    const navBar2 = document.querySelector(
      ".userInfor__mainMenu .ant-tabs-nav"
    );
    // console.log("Trigger", trigger);
    if (trigger) {
      navBar1.style.cssText = "left: 0!important; transition: all 0.5s";
      navBar2.style.cssText =
        "left: 0!important; top:0%important;transition: all 0.5s";
      setTrigger((trigger = !trigger));
    } else {
      navBar1.style.cssText = "left: -100%!important;transition: all 0.5s";
      navBar2.style.cssText = "left: -100%!important;transition: all 0.5s";
      setTrigger((trigger = !trigger));
    }
  };

  //Start Change Password
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //End Change Password

  return (
    <Fragment>
      <Header />
      <div className="__userinfo">
        <div className="userinfo__btnMenu">
          <button
            className=" absolute right-0 md:hidden btnMenu z-50"
            onClick={() => openNav(trigger)}
          >
            <RightSquareOutlined />
          </button>
        </div>
        <Tabs
          defaultActiveKey="key"
          large
          onChange={callback}
          type="card"
          tabPosition="left"
          animated
          size="large"
          addIcon
        >
          <TabPane
            key="2"
            tab={
              <span className="userinfo__menu">
                <UserOutlined />
                Thông Tin Cá Nhân
              </span>
            }
          >
            <div className="userInfor__mainMenu">
              <Tabs
                defaultActiveKey="key"
                large
                // onChange={callback}
                type="card"
                tabPosition="left"
                animated
                size="large"
                addIcon
              >
                <TabPane
                  key="1"
                  tab={
                    <span className="userinfo__menu">
                      <IdcardOutlined />
                      Thông Tin Tài Khoản
                    </span>
                  }
                  className="userinfo__mainMenu"
                >
                  <div>
                    <hr style={{ width: "95%", marginBottom: "1rem" }} />
                    <div className="userName grid md:grid-cols-7 h-26">
                      <div className="user__icon  md:col-span-1">
                        <IdcardOutlined
                          style={{ fontSize: "3rem", color: "white" }}
                        />
                      </div>
                      <div className="user__Name  md:col-span-6">
                        <h1>
                          Tên Khách Hàng:{" "}
                          <span className="text-red-600">{userInfo.hoTen}</span>
                        </h1>
                        <p className="text-gray-400">
                          Họ và tên chủ tài khoản, cũng là tên của tài khoản
                          hiển thị trên website.
                        </p>
                        <p className="text-gray-400">
                          Bạn có thể thay đổi ở phần thay đổi thông tin cá nhân
                        </p>
                      </div>
                    </div>
                    <hr style={{ width: "95%", marginBottom: "1rem" }} />
                    <div className="userName grid md:grid-cols-7 h-26">
                      <div className="user__icon md:col-span-1">
                        <LoginOutlined
                          style={{ fontSize: "3rem", color: "white" }}
                        />
                      </div>
                      <div className="user__Name md:col-span-6">
                        <h1>
                          Tài Khoản:{" "}
                          <span className="text-red-600">
                            {userInfo.taiKhoan}
                          </span>
                        </h1>
                        <p className="text-gray-400">
                          Họ và tên chủ tài khoản, cũng là tên của tài khoản
                          hiển thị trên website.
                        </p>
                      </div>
                    </div>
                    <hr style={{ width: "95%", marginBottom: "1rem" }} />
                    <div className="userName grid md:grid-cols-7 h-26">
                      <div className="user__icon md:col-span-1">
                        <LockOutlined
                          style={{ fontSize: "3rem", color: "white" }}
                        />
                      </div>
                      <div className="user__Name md:col-span-4">
                        <h1>
                          Mật Khẩu:{" "}
                          <span className="text-red-600">**********</span>
                        </h1>
                        <p className="text-gray-400">
                          Mật khẩu cần được kết hợp bởi nhiều chữ cái, số và ký
                          tự đặc biệt để bảo mật tài khoản.
                        </p>
                      </div>
                      <div className="user__Btn md:col-span-2 m-auto">
                        <button className="btnMuaVeFilm ">Thay Đổi</button>
                      </div>
                    </div>
                    <hr style={{ width: "95%", marginBottom: "1rem" }} />
                    <div className="userName grid md:grid-cols-7 h-26">
                      <div className="user__icon col-span-1">
                        <PhoneOutlined
                          style={{ fontSize: "3rem", color: "white" }}
                        />
                      </div>
                      <div className="user__Name md:col-span-6">
                        <h1>
                          Số Điện Thoại:{" "}
                          <span className="text-red-600">{userInfo.soDT}</span>
                        </h1>
                        <p className="text-gray-400">
                          Họ và tên chủ tài khoản, cũng là tên của tài khoản
                          hiển thị trên website.
                        </p>
                        <p className="text-gray-400">
                          Bạn có thể thay đổi ở phần thay đổi thông tin cá nhân
                        </p>
                      </div>
                    </div>
                    <hr style={{ width: "95%", marginBottom: "1rem" }} />
                    <div className="userName grid md:grid-cols-7 h-26">
                      <div className="user__icon md:col-span-1">
                        <MailOutlined
                          style={{ fontSize: "3rem", color: "white" }}
                        />
                      </div>
                      <div className="user__Name md:col-span-6">
                        <h1>
                          Email:{" "}
                          <span className="text-red-600">{userInfo.email}</span>
                        </h1>
                        <p className="text-gray-400">
                          Email có thể được sử dụng để thay đổi mật khẩu khi
                          không có công cụ bảo mật nào khác được bật.
                        </p>
                        <p className="text-gray-400">
                          Cũng như nhận các tin tức hoạt động của tài khoản.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane
                  className="userinfo__mainMenu"
                  key="2"
                  tab={
                    <span className="userinfo__menu">
                      <LockOutlined />
                      Thay Đổi Mật Khẩu
                    </span>
                  }
                >
                  <div className="Password__Form md:w-3/4 md:mt-10">
                    <Form
                      {...layout}
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        label="Mật Khẩu Hiện Tại"
                        name="oldPassword"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>

                      <Form.Item
                        label="Mật Khẩu Mới"
                        name="newPassword"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item
                        label="Xác Nhận Mật Khẩu Mới"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>

                      <Form.Item>
                        <Button type="danger" htmlType="submit">
                          Thay Đổi
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </TabPane>
                <TabPane
                  className="userinfo__mainMenu"
                  key="3"
                  tab={
                    <span className="userinfo__menu">
                      <EditOutlined />
                      Thay Đổi Thông Tin Cá Nhân
                    </span>
                  }
                >
                  <Form.Item
                    label="Mật Khẩu Mới"
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                </TabPane>
              </Tabs>
            </div>
          </TabPane>
          <TabPane
            key="1"
            tab={
              <span className="userinfo__menu">
                <BookOutlined />
                Thông Tin Đặt Vé
              </span>
            }
          ></TabPane>
        </Tabs>
      </div>
    </Fragment>
  );
}
