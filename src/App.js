import { Route, Switch, Router, Redirect } from "react-router-dom";
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

//Cấu hình History để chuyển hướng trang cho route
import { createBrowserHistory } from "history";

import Phongve from "./pages/PhongVe/Phongve";
import Auth from "./components/Auth/Auth";
import UserinfoLayout from "./pages/Userinfo/UserinfoLayout";
import Admin from "./pages/QuanLyNguoiDung/Admin";
import AdminAuth from "./components/Auth/AdminAuth";
export const history = createBrowserHistory(); //export để các nơi cần điều hướng có thể  xử dụng history.push("path")

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          {/* Set trang chủ */}
          {/* //Auth Componet là cơ chế bảo vể router đề phòng đăng nhập từ URL mà ko đăng nhập */}
          {/* <AdminAuth path="/admin" exact component={Admin}></AdminAuth> */}
          <AdminAuth path="/admin" Component={Admin}></AdminAuth>
          <Auth path="/chitietphongve/:id" Component={Phongve} />
          {/* <Route path="/chitietphongve/:id" exact component={Phongve}></Route> */}

          <Auth path="/userinfo" Component={UserinfoLayout} />

          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>

          <Route path="/filmdetail/:id" exact component={FilmDetail}></Route>
          <Route path="/" exact component={Home}></Route>

          {/* Khi các URL nhập vào không đúng so với các Router trên thì Redirect sẽ hỗ trợ trả về home default
            - Ví dụ Route Phòng vé và Login chỉ render 1 trong 2 tuỳ vào điều kiện userAccount đã Login chưa để tránh trường hợp user có URL của chi tiết đặt vé mà không cần đăng nhập. Nên khi userAccount undefine thì Route Phòng Vé không đc render ra. và Ngược lại
          */}
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
