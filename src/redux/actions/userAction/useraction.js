import axios from "axios";
import { history } from "../../../App";
import {
  ACCESS_TOKEN,
  ALL_USER_LIST,
  GET_USER_INFOR,
  SEARCH_USER_LIST,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from "../../constants/Constants";
import {
  ADD_USER_BY_ADMIN,
  GET_USER_INFO_API,
  GET_USER_LIST,
  UPDATE_USER_INFO,
  UPDATE_USER_INFO_API,
  USER_DAT_VE,
  USER_LOGIN_API,
  USER_SIGNUP_API,
} from "../../DomainAPI/domainAPI";

//User Login
export const userLoginAPI = (userAccount) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: USER_LOGIN_API,
        method: "POST",
        data: userAccount,
      });
      console.log("User Login", result.data);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        userAccount: result.data,
      });
      //Lưu tài khoản người dùng ở localstorage để khi F5 vẫn giữ trạng thái đăng nhập và
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      localStorage.setItem(
        ACCESS_TOKEN,
        JSON.stringify(result.data.accessToken)
      );
      history.push("/");
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//User Sign Up
export const userSignupAPI = (newUserAccount) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: USER_SIGNUP_API,
        method: "POST",
        data: newUserAccount,
      });

      dispatch({
        type: USER_SIGNUP_SUCCESS,
        newUserAccount: result.data,
      });
      alert(
        "YOUR ACCOUNT IS SUCCESSFULLY CREATED, PLEASE LOGIN TO ACCESS THE PAGE"
      );
      history.push("/login");
      console.log("New User Signup", result.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//Get User Information
export const getUserInfo = (taiKhoan) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: GET_USER_INFO_API,
        method: "POST",
        data: taiKhoan,
      });
      dispatch({
        type: GET_USER_INFOR,
        userInfo: result.data,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//User Update Information
export const updateUserInfo = (userInfo) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: UPDATE_USER_INFO_API,
        method: "PUT",
        data: userInfo,
        headers: {
          Authorization: "Bearer" + localStorage.getItem(ACCESS_TOKEN),
        },
      });
      console.log("User Action", result);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//User đặt vé
export const userDatVe = (thongTinVeDat) => {
  //Lấy token từ localStorage về và parse lại thành string.
  const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  // console.log(token);

  return async (dispatch) => {
    try {
      const result = await axios({
        url: USER_DAT_VE,
        method: "POST",
        data: thongTinVeDat,
        headers: {
          //Bearer phải có khoảng trắng cách ra
          Authorization: "Bearer " + token,
        },
      });
      alert(result.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//Lấy danh sách người dùng
export const layDanhSachNguoiDung = (currentPage = 1, postPerPage = 20) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${currentPage}&soPhanTuTrenTrang=${postPerPage}`,
        method: "GET",
      });
      console.log(result.data);
      dispatch({
        type: ALL_USER_LIST,
        allUserList: result.data,
      });
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//Xoá Người Dùng
export const removeUser = (taiKhoan) => {
  const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      alert(result.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};
//Cập Nhật Thông Tin Người Dùng
export const updateUser = (user) => {
  const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  return async (dispatch) => {
    try {
      const result = await axios({
        url: UPDATE_USER_INFO,
        method: "PUT",
        data: user,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      //Reset lại UI sau khi user mới được cập nhật
      dispatch(layDanhSachNguoiDung());
      console.log(result.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };
};

//Add user
export const addUserByAdmin = (user) => {
  const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  return async (dispatch) => {
    try {
      const result = await axios({
        url: ADD_USER_BY_ADMIN,
        method: "POST",
        data: user,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(result.data);
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data);
    }
  };
};

//Search User
export const searchUser = (keyword) => {
  const token = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDungPhanTrang?MaNhom=GP01&tuKhoa=${keyword}&soTrang=1&soPhanTuTrenTrang=20`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(result.data);
      //Cập nhật  lại danh sách userlist per page trên reducer
      dispatch({
        type: ALL_USER_LIST,
        allUserList: result.data,
      });
    } catch (err) {
      console.log(err.response?.data);
      alert(err.response?.data);
    }
  };
};
