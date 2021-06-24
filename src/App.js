import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import FilmDetail from "./pages/FilmDetail/FilmDetail";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

//Cấu hình History để chuyển hướng trang cho route
import { createBrowserHistory } from "history";
import Userinfo from "./pages/Userinfo/Userinfo";
import UserinfoLayout from "./pages/Userinfo/UserinfoLayout";
import Phongve from "./pages/PhongVe/Phongve";

export const history = createBrowserHistory(); //export để các nơi cần điều hướng có thể  xử dụng history.push("path")

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          {/* Set trang chủ */}
          <Route path="/login" exact component={Login}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/chitietphongve/:id" exact component={Phongve}></Route>
          <Route path="/userinfo" exact component={Userinfo}></Route>
          <Route path="/filmdetail/:id" exact component={FilmDetail}></Route>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
