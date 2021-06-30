import axios from "axios";
import { history } from "../../../App";
import {
  ACCESS_TOKEN,
  GET_USER_INFOR,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_SIGNUP_SUCCESS,
} from "../../constants/Constants";
import {
  GET_USER_INFO_API,
  UPDATE_USER_INFO_API,
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
      //   console.log("User Login", result.data);
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
