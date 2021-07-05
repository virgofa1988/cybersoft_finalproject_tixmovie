import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import LocationSelect from "./LocationSelect/LocationSelect";
import { useSelector } from "react-redux";
import {
  ACCESS_TOKEN,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
} from "../../redux/constants/Constants";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
export default function Header() {
  //Lấy userAccount từ redux để kiểm tra xem user đã từng Login Chưa(Khi logIn thành Công đã lưu về localStorage)

  const dispatch = useDispatch();
  const logOut = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(ACCESS_TOKEN);
    //Sau Khi logout gửi lên object rỗng để update lại reducer, điều này giúp các component sử dụng props userAccount sẽ tự reload
    dispatch({
      type: USER_LOGIN_SUCCESS,
      userAccount: {},
    });
  };

  const { userAccount } = useSelector((state) => state.UserReducer);
  return (
    <nav
      className="relative flex items-center flex-wrap shadow px-4 text-gray-700"
      id="navBar"
    >
      <div className="logo m-2 flex text-gray-700">
        <NavLink to="/" className="inline-flex items-center">
          <img
            width="50px"
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt="LogoTix"
          />
        </NavLink>
      </div>
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="toggle-checkbox absolute block w-16 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer lg:hidden"
      />
      <label
        for="toggle"
        id="inputMenuLabel"
        className="text-base absolute text-gray-700 lg:hidden select-none"
      >
        Menu
      </label>
      {/* Toggle Testing */}
      <div
        className={`hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigationLink"
      >
        <div className="center-navlink lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <a
            href="#movie__slider"
            className="text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto"
          >
            <span>Lịch Chiếu</span>
          </a>
          <a
            href="#movieSchedule"
            className="text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto "
          >
            <span>Cụm Rạp</span>
          </a>
          <a
            href="#news_section"
            className=" text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto "
          >
            <span>Tin Tức</span>
          </a>
          <a
            href="#Mkt_container"
            className="text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto "
          >
            <span>Ứng Dụng</span>
          </a>
        </div>
        <div className="right-navlink lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ">
          <div className="lg:border-r-2">
            {/* Giá trị ban đầu của userAccount trên Redux là Object rỗng nên sẽ undefine nếu chưa login successful */}
            {userAccount.taiKhoan?.trim() !== undefined ? (
              <div id="right-navlink_accountName" className="relative">
                <NavLink
                  to="/userinfo"
                  className=" p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto flex"
                >
                  <span className="login_location_style font-medium tracking-widest text-gray-600">
                    <span>Hello, </span>
                    {userAccount.taiKhoan}
                  </span>
                </NavLink>
                <div className={` hidden shadow-xl`} id="right-navlink_logout">
                  {userAccount.maLoaiNguoiDung === "QuanTri" ? (
                    <NavLink
                      className="p-2 text-gray-700 font-semibold inline-block"
                      to="/admin"
                    >
                      Administration
                    </NavLink>
                  ) : (
                    ""
                  )}
                  <span
                    onClick={() => {
                      logOut();
                    }}
                    className="text-gray-700 p-2 inline-block font-semibold relative"
                  >
                    Đăng xuất
                    <LogoutOutlined />
                  </span>
                </div>
              </div>
            ) : (
              <NavLink
                to="/login"
                className=" p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto flex"
              >
                <img
                  width="20px"
                  className="rounded-full mr-2 hidden lg:block"
                  src="https://tix.vn/app/assets/img/avatar.png"
                  alt="avatar"
                />

                <span className="login_location_style">Đăng Nhập</span>
              </NavLink>
            )}
          </div>
          <LocationSelect />
        </div>
      </div>
    </nav>
  );
}
