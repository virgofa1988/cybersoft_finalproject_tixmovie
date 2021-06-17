import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import LocationSelect from "./LocationSelect/LocationSelect";
import { useSelector } from "react-redux";
export default function Header() {
  //Lấy userAccount từ redux để kiểm tra xem user đã từng Login Chưa(Khi logIn thành Công đã lưu về localStorage)
  const { userAccount } = useSelector((state) => state.UserReducer);

  return (
    <nav className="relative flex items-center flex-wrap shadow px-4 text-gray-700">
      <div className="logo m-2 flex text-gray-700">
        <NavLink to="/" className="inline-flex items-center">
          <img
            width="50px"
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt="LogoTix"
          />
        </NavLink>
      </div>
      <button
        className="p-2 hover:bg-gray-200 rounded-md lg:hidden ml-auto nav-toggler inline-flex outline-none"
        data-target="#navigationLink"
      >
        <i className="material-icons">menu</i>
      </button>
      <div
        className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
        id="navigationLink"
      >
        <div className="center-navlink lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
          <a
            href="#"
            className="text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto"
          >
            <span>Tin Tức</span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto "
          >
            <span>Cụm Rạp</span>
          </a>
          <a
            href="#"
            className=" text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto "
          >
            <span>Tin Tức</span>
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-red-500 p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto "
          >
            <span>Ứng Dụng</span>
          </a>
        </div>
        <div className="right-navlink lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ">
          <div className="lg:border-r-2">
            {/* Giá trị ban đầu của userAccount trên Redux là Object rỗng nên sẽ undefine nếu chưa login successful */}
            {userAccount.taiKhoan?.trim() !== undefined ? (
              <NavLink
                to="/userinfo"
                className=" p-2 mx-3 lg:inline-flex lg:flex-row lg:w-auto flex"
              >
                {/* <img
                  width="20px"
                  className="rounded-full mr-2 hidden lg:block"
                  src="./img/avatar.png"
                  alt="avatar"
                /> */}

                <span className="login_location_style font-medium tracking-widest text-gray-600">
                  <span>Hello, </span>
                  {userAccount.taiKhoan}
                </span>
              </NavLink>
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
