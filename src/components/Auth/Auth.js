import React from "react";

import { Route, Redirect } from "react-router";
import { MODAL_OK, USER_LOGIN } from "../../redux/constants/Constants";

import { Fragment } from "react";

import { useDispatch } from "react-redux";
import FailLoginModal from "../Failed_Login_Modal/FailLoginModal";

const Auth = ({ path, Component }) => {
  const dispatch = useDispatch();

  const redirectLink = () => {
    return <Redirect to="/login" />;
  };
  return (
    <Fragment>
      <Route
        path={path}
        render={(routeProps) => {
          if (localStorage.getItem(USER_LOGIN)) {
            return <Component {...routeProps} />;
          }
          //Gọi Modal Thông Báo Chưa Đăng Nhập
          dispatch({
            type: MODAL_OK,
          });
          // alert("Bạn Chưa Đăng Nhập");
          // return <Redirect to="/login" />;
        }}
      />
      <FailLoginModal redirectLink={redirectLink} />
    </Fragment>
  );
};

export default Auth;
