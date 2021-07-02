import React from "react";

import { Route, Redirect } from "react-router";
import { USER_LOGIN } from "../../redux/constants/Constants";

import { Fragment } from "react";

const Auth = ({ path, Component }) => {
  return (
    <Fragment>
      <Route
        path={path}
        exact
        render={(routeProps) => {
          if (localStorage.getItem(USER_LOGIN)) {
            return <Component {...routeProps} />;
          }
          alert("Bạn Chưa Đăng Nhập...");
          return <Redirect to="/login" />;
        }}
      ></Route>
    </Fragment>
  );
};

export default Auth;
