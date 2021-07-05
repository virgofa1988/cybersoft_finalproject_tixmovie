import React from "react";
import { USER_LOGIN } from "../../redux/constants/Constants";
import { Fragment } from "react";
import { Route, Redirect } from "react-router";
const AdminAuth = ({ path, Component }) => {
  const userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
  // console.log(userLogin);
  return (
    <Fragment>
      <Route
        path={path}
        exact
        render={(routeProps) => {
          if (localStorage.getItem(USER_LOGIN)) {
            if (userLogin?.maLoaiNguoiDung === "QuanTri") {
              return <Component {...routeProps} />;
            } else {
              alert("Bạn Không Đủ Cấp Quyền");
              return <Redirect to="/home" />;
            }
          }
          alert("Bạn Chưa Đăng Nhập...");
          return <Redirect to="/login" />;
        }}
      ></Route>
    </Fragment>
  );
};
export default AdminAuth;
